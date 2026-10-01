const BASE = import.meta.env.VITE_API_URL || '';
export async function sendContact(payload) {
  let res;
  try {
    res = await fetch(`${BASE}/api/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
  } catch { throw new Error('Cannot reach the server. Check your connection and try again.'); }
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.errors?.[0] || data.message || 'Request failed');
  return data;
}
