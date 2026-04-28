import { mkdirSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { basename, dirname, extname, join, relative } from 'node:path';

const sourceDir = 'logos';
const targetDir = 'logos2';

const goldA = '#fff1a8';
const goldB = '#e9c84d';
const goldC = '#a8841d';
const ink = '#15130b';
const moss = '#253523';

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

function slugTitle(file) {
  return basename(file, extname(file))
    .replace(/[-_]+/g, ' ')
    .replace(/\b(icon|logo|wit|groen|png|2024|2025)\b/gi, '')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function hash(text) {
  return [...text].reduce((sum, char) => (sum * 31 + char.charCodeAt(0)) >>> 0, 7);
}

function defs(id) {
  return `
  <defs>
    <linearGradient id="gold-${id}" x1="18%" y1="8%" x2="82%" y2="92%">
      <stop offset="0" stop-color="${goldA}"/>
      <stop offset="0.48" stop-color="${goldB}"/>
      <stop offset="1" stop-color="${goldC}"/>
    </linearGradient>
    <radialGradient id="shine-${id}" cx="34%" cy="24%" r="64%">
      <stop offset="0" stop-color="#fff8cf" stop-opacity="0.95"/>
      <stop offset="0.45" stop-color="${goldB}" stop-opacity="0.7"/>
      <stop offset="1" stop-color="${goldC}" stop-opacity="0.92"/>
    </radialGradient>
    <filter id="soft-${id}" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="5" stdDeviation="4" flood-color="#000" flood-opacity="0.25"/>
    </filter>
  </defs>`;
}

function shell(id, inner, title, viewBox = '0 0 300 300') {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" role="img" aria-label="${escapeXml(title)}">
  <title>${escapeXml(title)}</title>
  ${defs(id)}
  ${inner}
</svg>
`;
}

function escapeXml(text) {
  return text.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[c]);
}

function hairFollicle(id, label = '') {
  const text = label
    ? `<text x="150" y="266" text-anchor="middle" font-family="Georgia, serif" font-size="26" font-weight="700" fill="${goldB}">${escapeXml(label)}</text>`
    : '';
  return shell(id, `
  <path d="M63 154c34-10 67-12 103-7 9 1 14-5 14-14 0-36 14-75 54-112-26 51-25 99-12 135 9 24-8 55-35 59-28 5-52-17-51-45-25 1-49 6-73 15z" fill="url(#shine-${id})" filter="url(#soft-${id})"/>
  <path d="M141 178c0-34 13-82 50-133-16 54-12 92 6 128 10 22-5 47-29 47-16 0-27-11-27-42z" fill="#fff0a2" opacity="0.55"/>
  <path d="M72 159c29-7 60-9 92-5m29-113c-22 57-21 104 2 139" fill="none" stroke="${ink}" stroke-opacity="0.42" stroke-width="7" stroke-linecap="round"/>
  <path d="M95 189c21 12 58 18 112 1" fill="none" stroke="url(#gold-${id})" stroke-width="8" stroke-linecap="round"/>
  ${text}`, 'Haarwortel');
}

function checkIcon(id) {
  return shell(id, `
  <circle cx="150" cy="150" r="104" fill="${ink}" opacity="0.96"/>
  <circle cx="150" cy="150" r="91" fill="none" stroke="url(#gold-${id})" stroke-width="12"/>
  <path d="M95 151l35 35 78-88" fill="none" stroke="url(#gold-${id})" stroke-width="24" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M99 109c35-28 82-29 116 4" fill="none" stroke="#fff7c6" stroke-width="6" stroke-linecap="round" opacity="0.5"/>`, 'Check');
}

function starIcon(id) {
  return shell(id, `
  <path d="M150 38l28 70 75 7-57 49 17 74-63-39-64 39 18-74-58-49 76-7z" fill="url(#shine-${id})" filter="url(#soft-${id})"/>
  <path d="M150 72l17 43 46 4-35 30 10 46-38-24-39 24 11-46-35-30 46-4z" fill="${ink}" opacity="0.22"/>
  <circle cx="150" cy="150" r="112" fill="none" stroke="url(#gold-${id})" stroke-width="5" opacity="0.65"/>`, 'Ster');
}

function languageBadge(id, code) {
  return shell(id, `
  <rect x="50" y="75" width="200" height="150" rx="28" fill="${ink}"/>
  <path d="M77 107h146M77 150h146M77 193h146" stroke="url(#gold-${id})" stroke-width="16" stroke-linecap="round"/>
  <circle cx="87" cy="107" r="18" fill="#fff5bd"/>
  <text x="150" y="166" text-anchor="middle" font-family="Arial, sans-serif" font-size="56" font-weight="800" fill="url(#gold-${id})">${code}</text>
  <path d="M68 214c34-18 126-18 164 0" fill="none" stroke="${goldC}" stroke-width="7" stroke-linecap="round"/>`, `${code} taal`);
}

function socialIcon(id, type) {
  const camera = `<rect x="82" y="82" width="136" height="136" rx="36" fill="none" stroke="url(#gold-${id})" stroke-width="18"/><circle cx="150" cy="150" r="35" fill="none" stroke="#fff0a0" stroke-width="15"/><circle cx="195" cy="105" r="11" fill="${goldA}"/>`;
  const network = `<circle cx="92" cy="150" r="28" fill="url(#shine-${id})"/><circle cx="196" cy="91" r="28" fill="url(#shine-${id})"/><circle cx="204" cy="204" r="28" fill="url(#shine-${id})"/><path d="M118 136l52-31M118 164l58 29" stroke="url(#gold-${id})" stroke-width="14" stroke-linecap="round"/>`;
  return shell(id, `
  <circle cx="150" cy="150" r="115" fill="${ink}"/>
  ${type.includes('instagram') ? camera : network}
  <path d="M80 229c37 18 96 21 142-7" stroke="${goldB}" stroke-width="6" stroke-linecap="round" opacity="0.7"/>`, type);
}

function faqIcon(id) {
  return shell(id, `
  <path d="M62 115c0-39 35-70 86-70 54 0 91 30 91 73 0 42-31 65-76 72l-7 34h-39l11-61c45-4 69-20 69-46 0-21-18-35-47-35-30 0-50 15-52 39z" fill="url(#shine-${id})" filter="url(#soft-${id})"/>
  <circle cx="136" cy="255" r="19" fill="url(#gold-${id})"/>
  <path d="M92 110c8-34 84-46 102 2" fill="none" stroke="#fff6c0" stroke-width="7" stroke-linecap="round" opacity="0.55"/>`, 'Veelgestelde vragen');
}

function careIcon(id) {
  return shell(id, `
  <path d="M150 44l82 32v66c0 58-34 94-82 118-48-24-82-60-82-118V76z" fill="${ink}" stroke="url(#gold-${id})" stroke-width="12" filter="url(#soft-${id})"/>
  <path d="M151 95v104M99 147h104" stroke="url(#gold-${id})" stroke-width="24" stroke-linecap="round"/>
  <path d="M101 82c30 12 67 12 98 0" stroke="#fff4b4" stroke-width="7" stroke-linecap="round" opacity="0.45"/>`, 'Zorg');
}

function bookIcon(id) {
  return shell(id, `
  <path d="M65 76c34-17 62-16 85 1v150c-25-16-53-17-85-1zM150 77c25-17 53-18 85-1v150c-34-16-62-15-85 1z" fill="${ink}" stroke="url(#gold-${id})" stroke-width="9" stroke-linejoin="round"/>
  <path d="M88 112h36M88 145h39M88 178h31M176 112h37M176 145h31M176 178h39" stroke="url(#gold-${id})" stroke-width="9" stroke-linecap="round"/>
  <path d="M150 81v143" stroke="#fff2aa" stroke-width="5" opacity="0.55"/>`, 'Kenniscentrum');
}

function consultationIcon(id) {
  return shell(id, `
  <circle cx="112" cy="120" r="41" fill="url(#shine-${id})"/>
  <circle cx="190" cy="120" r="41" fill="${ink}" stroke="url(#gold-${id})" stroke-width="10"/>
  <path d="M62 231c8-44 39-68 82-68 23 0 42 7 56 19 20 1 38 17 45 49z" fill="${ink}" stroke="url(#gold-${id})" stroke-width="10" stroke-linejoin="round"/>
  <path d="M74 88c29-28 73-29 104-2" stroke="#fff5bd" stroke-width="7" stroke-linecap="round" fill="none" opacity="0.5"/>`, 'Consult');
}

function growthIcon(id, variant = 0) {
  const extra = variant % 2 ? `<path d="M93 195c28-56 76-85 135-92" stroke="url(#gold-${id})" stroke-width="12" stroke-linecap="round" fill="none"/><path d="M188 89c21 0 38 7 52 22-20 5-40 2-58-10z" fill="#fff2a8"/>`
    : `<path d="M78 207c39-72 88-112 146-132" stroke="url(#gold-${id})" stroke-width="12" stroke-linecap="round" fill="none"/><path d="M132 135c15-31 37-51 66-60-9 29-29 50-60 64z" fill="#fff2a8"/>`;
  return shell(id, `
  <path d="M60 225h180" stroke="${ink}" stroke-width="18" stroke-linecap="round"/>
  ${extra}
  <circle cx="87" cy="202" r="12" fill="${goldB}"/><circle cx="124" cy="169" r="10" fill="${goldA}"/><circle cx="166" cy="135" r="8" fill="${goldB}"/>
  <path d="M71 229c38 19 116 21 158 0" stroke="url(#gold-${id})" stroke-width="6" stroke-linecap="round"/>`, 'Haargroei');
}

function clockIcon(id) {
  return shell(id, `
  <circle cx="150" cy="150" r="101" fill="${ink}" stroke="url(#gold-${id})" stroke-width="13"/>
  <path d="M150 91v66l48 31" stroke="url(#gold-${id})" stroke-width="17" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M91 76l-25 25M209 76l25 25" stroke="#fff4b4" stroke-width="12" stroke-linecap="round"/>
  <path d="M91 223c35 27 84 28 119 0" stroke="${goldB}" stroke-width="7" stroke-linecap="round" opacity="0.6"/>`, 'Tijd');
}

function costIcon(id) {
  return shell(id, `
  <circle cx="150" cy="150" r="106" fill="${ink}" stroke="url(#gold-${id})" stroke-width="12"/>
  <path d="M178 92c-52-18-93 17-93 60s41 77 93 56M76 134h99M76 166h88" fill="none" stroke="url(#gold-${id})" stroke-width="15" stroke-linecap="round"/>
  <path d="M198 95c20 28 21 79 0 109" stroke="#fff5bd" stroke-width="7" stroke-linecap="round" opacity="0.5"/>`, 'Kosten');
}

function processIcon(id, file) {
  const lower = file.toLowerCase();
  if (lower.includes('consult') || lower.includes('analyse')) return consultationIcon(id);
  if (lower.includes('behandeltijd') || lower.includes('herstel') || lower.includes('resultaat')) return clockIcon(id);
  if (lower.includes('tarief') || lower.includes('kosten')) return costIcon(id);
  if (lower.includes('expertise') || lower.includes('veiligheid') || lower.includes('betrouwbaar')) return careIcon(id);
  if (lower.includes('graft') || lower.includes('haarzak') || lower.includes('implant') || lower.includes('incis') || lower.includes('kanalen') || lower.includes('dichtheid')) return hairFollicle(id);
  if (lower.includes('scheren')) return shell(id, `<path d="M76 100h121l37 49-37 49H76l37-49z" fill="${ink}" stroke="url(#gold-${id})" stroke-width="12"/><path d="M111 121l80 56M191 121l-80 56" stroke="url(#gold-${id})" stroke-width="13" stroke-linecap="round"/><path d="M77 219c49 19 101 19 151 0" stroke="#fff2aa" stroke-width="7" stroke-linecap="round"/>`, 'Scheren');
  if (lower.includes('bloeding') || lower.includes('bijwerkingen')) return shell(id, `<path d="M150 44c48 62 72 105 72 140 0 43-32 72-72 72s-72-29-72-72c0-35 24-78 72-140z" fill="${ink}" stroke="url(#gold-${id})" stroke-width="12"/><path d="M116 184c9 18 23 27 44 27" stroke="url(#gold-${id})" stroke-width="15" stroke-linecap="round"/><path d="M129 105c-17 29-25 53-25 73" stroke="#fff5bd" stroke-width="8" stroke-linecap="round" opacity="0.5"/>`, 'Comfort');
  return growthIcon(id, hash(file));
}

function partnerLogo(id, file) {
  const title = slugTitle(file).replace(/\b(No 1|01)\b/g, '').trim();
  const words = title.split(' ').filter(Boolean);
  const initials = words.slice(0, 2).map((w) => w[0]).join('') || 'P';
  const display = title.length > 25 ? `${title.slice(0, 23)}...` : title;
  return shell(id, `
  <rect x="20" y="52" width="520" height="176" rx="18" fill="${ink}" stroke="url(#gold-${id})" stroke-width="7"/>
  <circle cx="122" cy="140" r="55" fill="url(#shine-${id})"/>
  <path d="M101 157c22-48 46-70 76-86-10 37-7 67 8 92-11 20-37 24-54 8-8-7-16-12-30-14z" fill="${ink}" opacity="0.82"/>
  <text x="121" y="154" text-anchor="middle" font-family="Georgia, serif" font-size="31" font-weight="700" fill="#fff3ac">${escapeXml(initials)}</text>
  <text x="205" y="129" font-family="Georgia, serif" font-size="34" font-weight="700" fill="url(#gold-${id})">${escapeXml(display)}</text>
  <text x="207" y="164" font-family="Arial, sans-serif" font-size="16" letter-spacing="4" fill="#fff1a8">PARTNER SALON</text>
  <path d="M205 185h230" stroke="${goldC}" stroke-width="5" stroke-linecap="round"/>`, title || 'Partner logo', '0 0 560 280');
}

function brandLogo(id, file) {
  const lower = file.toLowerCase();
  if (lower.includes('email')) return shell(id, `<rect x="55" y="88" width="190" height="128" rx="22" fill="${ink}" stroke="url(#gold-${id})" stroke-width="12"/><path d="M66 105l84 72 84-72" fill="none" stroke="url(#gold-${id})" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/><path d="M78 210c42 18 105 18 145 0" stroke="#fff3ae" stroke-width="6" stroke-linecap="round" opacity="0.55"/>`, 'Email');
  if (lower.includes('mobiel') || lower.includes('telefoon')) return shell(id, `<rect x="95" y="43" width="110" height="214" rx="27" fill="${ink}" stroke="url(#gold-${id})" stroke-width="12"/><circle cx="150" cy="224" r="10" fill="${goldA}"/><path d="M121 80h58M75 116c-15 21-15 48 0 69M225 116c15 21 15 48 0 69" stroke="url(#gold-${id})" stroke-width="10" stroke-linecap="round" fill="none"/>`, 'Mobiel');
  return starIcon(id);
}

function rootIcon(id, file) {
  const lower = file.toLowerCase();
  if (lower.includes('check')) return checkIcon(id);
  if (lower.includes('en-vlag')) return languageBadge(id, 'EN');
  if (lower.includes('nl-vlag')) return languageBadge(id, 'NL');
  if (lower.includes('facebook') || lower.includes('instagram')) return socialIcon(id, lower);
  if (lower.includes('faq')) return faqIcon(id);
  if (lower.includes('kennis')) return bookIcon(id);
  if (lower.includes('zorg')) return careIcon(id);
  if (lower.includes('ster')) return starIcon(id);
  if (lower.includes('wave')) return growthIcon(id, 1);
  if (lower.includes('haartransplantatie') || lower.includes('hair-clinic') || lower.includes('favicon')) return hairFollicle(id, lower.includes('favicon') ? '45' : '');
  return hairFollicle(id);
}

function benefitIcon(id, file) {
  const lower = file.toLowerCase();
  if (lower.includes('betrouwbaar') || lower.includes('expertise')) return careIcon(id);
  if (lower.includes('consult') || lower.includes('analyse')) return consultationIcon(id);
  if (lower.includes('behandeltijd') || lower.includes('herstel') || lower.includes('resultaat')) return clockIcon(id);
  if (lower.includes('kosten')) return costIcon(id);
  if (lower.includes('bijwerkingen')) return processIcon(id, lower);
  if (lower.includes('haar') || lower.includes('groei') || lower.includes('regeneratie')) return growthIcon(id, hash(file));
  return checkIcon(id);
}

function logoFor(file) {
  const rel = relative(sourceDir, file).replaceAll('\\', '/');
  const id = hash(rel).toString(36);
  if (rel.startsWith('partner-logos/')) return partnerLogo(id, file);
  if (rel.startsWith('brand-icons/')) return brandLogo(id, file);
  if (rel.startsWith('benefit-icons-2024/')) return benefitIcon(id, file);
  if (rel.startsWith('process-icons-2025/')) return processIcon(id, file);
  return rootIcon(id, file);
}

if (statSync(sourceDir).isDirectory()) {
  rmSync(targetDir, { recursive: true, force: true });
  for (const file of walk(sourceDir).filter((item) => extname(item).toLowerCase() === '.png')) {
    const rel = relative(sourceDir, file);
    const output = join(targetDir, dirname(rel), `${basename(file, extname(file))}.svg`);
    mkdirSync(dirname(output), { recursive: true });
    writeFileSync(output, logoFor(file), 'utf8');
  }
}
