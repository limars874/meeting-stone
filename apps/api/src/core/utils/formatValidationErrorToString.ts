import { ValidationError } from 'class-validator';
export const formatValidationErrorToString = (errors: ValidationError[]) => {
  if (errors.length === 0) {
    return;
  }
  let errorMessage = '';
  errors.forEach(v => {
    const constraints = v.constraints;
    if (constraints != null) {
      Object.keys(constraints).forEach(key => {
        errorMessage += `${constraints[key]},`;
      });
    } else if (v.children?.length && v.children[0] instanceof ValidationError) {
      errorMessage += formatValidationErrorToString(v.children);
    }
  });
  return errorMessage;
};
