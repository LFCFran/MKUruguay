class ApiError extends Error {
  constructor(message, statusCode = 400, name = "ApiError") {
    super(message);
    this.statusCode = statusCode;
    this.name = name;
  }
}

module.exports = { ApiError };