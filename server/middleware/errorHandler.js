export const notFound = (req, res) =>
  res.status(404).json({ success: false, message: `Route not found: ${req.method} ${req.originalUrl}` });

export const errorHandler = (err, _req, res, _next) => {
  if (err.name === 'ValidationError') {
    const errors = Object.values(err.errors).map((e) => e.message);
    return res.status(400).json({ success: false, message: 'Please check your input', errors });
  }
  if (err.type === 'entity.parse.failed') return res.status(400).json({ success: false, message: 'Invalid request body' });
  console.error(err);
  res.status(500).json({ success: false, message: 'Something went wrong. Please try again later.' });
};
