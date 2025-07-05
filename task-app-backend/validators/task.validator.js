import { body, validationResult } from 'express-validator';

export const addTask = [
  // Validation rules
  body('title').notEmpty().withMessage('Title is required'),
  body('description').isString().notEmpty().withMessage('Description is required'),
  // Middleware to handle validation result
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];