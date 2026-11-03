// Sends an email alert for each new form submission via Resend.
// Never throws: a failed alert must not lose the lead, which is already saved in Supabase.

const NOTIFY_TO = process.env.NOTIFY_EMAIL || 'elyoussefimehdi@gmail.com';
// onboarding@resend.dev works without domain setup, but only delivers to the Resend account owner's email.
// Once automathub.com is verified in Resend, set RESEND_FROM to e.g. "Automat Leads <leads@automathub.com>".
const FROM = process.env.RESEND_FROM || 'Automat Leads <onboarding@resend.dev>';

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatValue(value) {
  if (Array.isArray(value)) return value.join(', ');
  if (typeof value === 'boolean') return value ? 'Yes' : 'No';
  return value;
}

/**
 * @param {object} opts
 * @param {string} opts.subject
 * @param {string} [opts.replyTo] submitter's email, so hitting Reply answers the lead directly
 * @param {Array<[string, unknown]>} opts.fields label/value pairs to include
 */
export async function notifyNewSubmission({ subject, replyTo, fields }) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn('RESEND_API_KEY not set; skipping submission alert email');
    return;
  }

  const rows = fields
    .filter(([, value]) => value !== undefined && value !== null && value !== '' && !(Array.isArray(value) && value.length === 0))
    .map(([label, value]) => [label, formatValue(value)]);

  const html = `
    <div style="font-family:sans-serif;max-width:600px">
      <h2 style="margin:0 0 16px">${escapeHtml(subject)}</h2>
      <table style="border-collapse:collapse;width:100%">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding:8px;border-bottom:1px solid #eee;font-weight:600;vertical-align:top;white-space:nowrap">${escapeHtml(label)}</td>
            <td style="padding:8px;border-bottom:1px solid #eee;white-space:pre-wrap">${escapeHtml(value)}</td>
          </tr>`
          )
          .join('')}
      </table>
      <p style="color:#888;font-size:12px;margin-top:16px">Reply to this email to respond to the sender directly. Also saved in Supabase.</p>
    </div>`;

  const text = rows.map(([label, value]) => `${label}: ${value}`).join('\n');

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: FROM,
        to: [NOTIFY_TO],
        subject,
        html,
        text,
        ...(replyTo ? { reply_to: replyTo } : {}),
      }),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) {
      console.error('Resend alert failed:', res.status, await res.text());
    }
  } catch (err) {
    console.error('Resend alert error:', err);
  }
}
