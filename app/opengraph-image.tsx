import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { colors } from '../src/theme';
import { profile } from '../src/data/profile';

// Social preview card for links shared on LinkedIn, X, Slack, etc. Generated at build time, so it always
// matches the site's current headline and palette. Fonts are static TTFs in assets/fonts (SIL Open Font License):
// Geist for the name and details, Instrument Serif Italic for the headline.
export const alt = 'Sunny Kumar, frontend engineer: I build reliable, intuitive web applications.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const [sans, serif, photo] = await Promise.all([
    readFile(join(process.cwd(), 'assets/fonts/Geist-Regular.ttf')),
    readFile(join(process.cwd(), 'assets/fonts/InstrumentSerif-Italic.ttf')),
    readFile(join(process.cwd(), 'public/sunny.png'), 'base64'),
  ]);

  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', backgroundColor: colors.bg, color: colors.text, padding: 72, fontFamily: 'Geist' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingRight: 56 }}>
          <div style={{ display: 'flex', alignItems: 'center', fontSize: 30 }}>
            <div style={{ width: 14, height: 14, borderRadius: 3, backgroundColor: colors.accent, marginRight: 18 }} />
            {profile.name}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontFamily: 'Instrument Serif', fontStyle: 'italic', fontSize: 84, lineHeight: 1.02, letterSpacing: '-0.01em' }}>
              {profile.headline}
            </div>
          </div>
          <div style={{ display: 'flex', fontSize: 26, color: colors.muted }}>
            {profile.shortRole} · React · Next.js · TypeScript
          </div>
        </div>
        <img
          src={`data:image/png;base64,${photo}`}
          alt=""
          width={380}
          height={486}
          style={{ borderRadius: 20, objectFit: 'cover', objectPosition: '50% 30%', border: `1px solid ${colors.borderStrong}` }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Geist', data: sans, style: 'normal', weight: 400 },
        { name: 'Instrument Serif', data: serif, style: 'italic', weight: 400 },
      ],
    }
  );
}
