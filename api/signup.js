// Relays email signups from index.html to the GoHighLevel inbound webhook
// as real JSON (browsers can only send text/plain cross-site, which GHL
// doesn't pick up). The page posts here; this posts to GHL.
const GHL_WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/ipRIuBMrlyPNaFSXDz3q/webhook-trigger/29339ed4-d513-40d2-95ef-c043f4756267";

// Only pass on the fields the site sends.
function pick(data, email) {
  const out = { email };
  for (const k of ['source', 'form_placement', 'series', 'page']) {
    if (typeof data[k] === 'string') out[k] = data[k].slice(0, 500);
  }
  if (Array.isArray(data.tags)) out.tags = data.tags.filter(t => typeof t === 'string').slice(0, 10);
  for (const k of Object.keys(data)) {
    if (k.startsWith('utm_') && typeof data[k] === 'string') out[k] = data[k].slice(0, 200);
  }
  return out;
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false });
  }

  let data = req.body;
  if (typeof data === 'string') {
    try { data = JSON.parse(data); } catch { data = null; }
  }
  const email = data && typeof data.email === 'string' ? data.email.trim() : '';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    return res.status(400).json({ ok: false });
  }

  try {
    const r = await fetch(GHL_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(pick(data, email))
    });
    if (!r.ok) {
      console.error('GHL webhook returned', r.status, await r.text());
      return res.status(502).json({ ok: false });
    }
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('GHL webhook failed', err);
    return res.status(502).json({ ok: false });
  }
};
