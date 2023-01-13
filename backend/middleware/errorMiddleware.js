const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500; // 500 = Server error

  res.status(statusCode);
  res.json({
    message: "Please add a text field",
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

module.exports = {
  errorHandler,
};
