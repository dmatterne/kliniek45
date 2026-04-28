from __future__ import annotations

import json
import shutil
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path
from typing import Any

from PIL import Image

SOURCE_DIR = Path("logos")
TARGET_DIR = Path("logos3")
MEDIA_API = "https://hairclinicwolf.be/wp-json/wp/v2/media"


def source_preference(relative_path: Path) -> str | None:
    rel = relative_path.as_posix()
    name = relative_path.name

    if rel.startswith("benefit-icons-2024/"):
        return "/2024/06/"
    if rel.startswith("process-icons-2025/"):
        return "/2025/02/"
    if rel.startswith("partner-logos/"):
        return "/2024/06/"
    if name in {"icon-EN-vlag.png", "icon-NL-vlag.png"}:
        return "/2024/12/"
    return "/2023/11/"


def search_terms(path: Path) -> list[str]:
    stem = path.stem
    terms = [
        stem,
        stem.replace("_", "-"),
        stem.replace("_", ""),
        path.name,
    ]
    unique: list[str] = []
    for term in terms:
        if term not in unique:
            unique.append(term)
    return unique


def fetch_media(term: str) -> list[dict[str, Any]]:
    query = urllib.parse.urlencode({"search": term, "per_page": "50"})
    url = f"{MEDIA_API}?{query}"
    with urllib.request.urlopen(url, timeout=20) as response:
        return json.load(response)


def source_url(item: dict[str, Any]) -> str:
    return item.get("source_url") or item.get("guid", {}).get("rendered", "")


def file_size(item: dict[str, Any]) -> int | None:
    full = item.get("media_details", {}).get("sizes", {}).get("full", {})
    if isinstance(full.get("filesize"), int):
        return full["filesize"]
    size = item.get("media_details", {}).get("filesize")
    return size if isinstance(size, int) else None


def exact_matches(relative_path: Path) -> list[dict[str, Any]]:
    filename = relative_path.name.lower()
    seen: set[str] = set()
    matches: list[dict[str, Any]] = []

    for term in search_terms(relative_path):
        for item in fetch_media(term):
            url = source_url(item)
            if not url:
                continue
            if url.rsplit("/", 1)[-1].lower() != filename:
                continue
            if url in seen:
                continue
            seen.add(url)
            matches.append(item)

    return matches


def choose_match(relative_path: Path, matches: list[dict[str, Any]]) -> tuple[dict[str, Any] | None, str]:
    if not matches:
        return None, "missing"
    if len(matches) == 1:
        return matches[0], "unique"

    preferred = source_preference(relative_path)
    if preferred:
        preferred_matches = [item for item in matches if preferred in source_url(item)]
        if len(preferred_matches) == 1:
            return preferred_matches[0], f"disambiguated:{preferred.strip('/')}"

    return matches[0], "ambiguous:first-result"


def download(url: str, output: Path) -> tuple[int, int]:
    request = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(request, timeout=30) as response:
        status = response.status
        body = response.read()
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_bytes(body)
    return status, len(body)


def validate_png(path: Path) -> tuple[bool, str | None]:
    try:
        with Image.open(path) as image:
            image.verify()
            if image.format != "PNG":
                return False, f"expected PNG, got {image.format}"
        return True, None
    except Exception as exc:  # noqa: BLE001 - recorded in manifest for diagnostics.
        return False, str(exc)


def main() -> int:
    if not SOURCE_DIR.is_dir():
        raise SystemExit(f"Missing source directory: {SOURCE_DIR}")

    if TARGET_DIR.exists():
        shutil.rmtree(TARGET_DIR)
    TARGET_DIR.mkdir(parents=True)

    manifest: dict[str, Any] = {
        "source": "https://hairclinicwolf.be/wp-json/wp/v2/media",
        "license_note": "Files are publicly accessible downloads. Reuse rights are not asserted by this manifest.",
        "files": [],
    }

    failures = 0
    for source_file in sorted(SOURCE_DIR.rglob("*.png")):
        relative_path = source_file.relative_to(SOURCE_DIR)
        target_file = TARGET_DIR / relative_path
        record: dict[str, Any] = {
            "path": relative_path.as_posix(),
            "status": "pending",
            "source_url": None,
            "http_status": None,
            "downloaded_size": None,
            "expected_size": None,
            "match": None,
            "valid_png": False,
            "error": None,
        }

        try:
            matches = exact_matches(relative_path)
            chosen, match_status = choose_match(relative_path, matches)
            record["match"] = match_status
            record["candidate_count"] = len(matches)
            record["candidates"] = [source_url(item) for item in matches]

            if not chosen:
                raise RuntimeError("No exact public media match found")

            url = source_url(chosen)
            expected = file_size(chosen)
            http_status, downloaded_size = download(url, target_file)
            valid_png, validation_error = validate_png(target_file)

            record.update(
                {
                    "status": "ok" if valid_png else "failed",
                    "source_url": url,
                    "http_status": http_status,
                    "downloaded_size": downloaded_size,
                    "expected_size": expected,
                    "valid_png": valid_png,
                    "size_matches_expected": expected is None or expected == downloaded_size,
                    "error": validation_error,
                }
            )
            if not valid_png:
                failures += 1
        except (urllib.error.URLError, urllib.error.HTTPError, RuntimeError, OSError) as exc:
            failures += 1
            record["status"] = "failed"
            record["error"] = str(exc)

        manifest["files"].append(record)

    manifest["summary"] = {
        "source_png_count": len(list(SOURCE_DIR.rglob("*.png"))),
        "downloaded_png_count": len(list(TARGET_DIR.rglob("*.png"))),
        "ok_count": sum(1 for item in manifest["files"] if item["status"] == "ok"),
        "failed_count": failures,
    }

    (TARGET_DIR / "manifest.json").write_text(json.dumps(manifest, indent=2), encoding="utf-8")
    return 1 if failures else 0


if __name__ == "__main__":
    raise SystemExit(main())
