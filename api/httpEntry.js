export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  if (req.method === 'OPTIONS') return res.status(204).end();

  const name = req.query.name || (req.body && req.body.name) || 'world';
  res.status(200).json({
    hello: name,
    runtime: 'nodejs',
    region: process.env.VERCEL_REGION || 'unknown'
  });
}
