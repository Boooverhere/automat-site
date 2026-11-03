import { ImageResponse } from 'next/og';

export const alt = 'Automat by Mehdi Elyoussoufi: automation for home-service and trades businesses';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #312e81 100%)',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 32, color: '#a5b4fc', marginBottom: 24 }}>automathub.com</div>
        <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.1 }}>More booked jobs. Less admin.</div>
        <div style={{ fontSize: 34, color: '#cbd5e1', marginTop: 32 }}>
          Automation for home-service &amp; trades businesses, by Mehdi Elyoussoufi.
        </div>
      </div>
    ),
    size
  );
}
