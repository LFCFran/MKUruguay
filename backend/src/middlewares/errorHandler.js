function errorHandler(err, req, res, next) {
  const status = err.statusCode || 500;

  res.status(status).json({
    ok: false,
    error: err.name || "Error",
    message: err.message || "Unexpected error",
  });
}

module.exports = { errorHandler };