import { validationResult } from "express-validator";

export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }

  // ✅ Convert errors to structured format
  let extractedErrors = errors.array().map((err) => ({
    field: err.path || err.param,
    message: err.msg,
  }));

  // ✅ Remove duplicate errors
  extractedErrors = Array.from(new Set(extractedErrors.map(JSON.stringify))).map(JSON.parse);

  console.error("Validation errors:", extractedErrors);

  return res.status(422).json({
    success: false,
    message: "Validation failed",
    errors: extractedErrors,
  });
};
