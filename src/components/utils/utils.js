export const validate = (payload) => {
  let errors = { email: null, description: null };
  if (!payload?.title || payload?.title.length === 0) {
    const errMsg = "Please enter a todo title";
    errors = { ...errors, title: errMsg };
  } else if (payload?.title.length > 50 || payload?.title.length < 3) {
    const errMsg = "Please enter a todo title in 3-50 characters length";
    errors = { ...errors, title: errMsg };
  } else {
    errors = { ...errors, title: null };
  }

  if (payload?.description && payload?.description.length < 3) {
    const errMsg =
      "Please enter a todo description in minimum 3 characters length";
    errors = { ...errors, description: errMsg };
  } else {
    errors = { ...errors, description: null };
  }
  return errors;
};
