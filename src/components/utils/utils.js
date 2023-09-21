export const validate = (payload) => {
  let errors = { email: null, description: null };
  if (!payload?.title || payload?.title.length === 0) {
    const errMsg = "Please enter title";
    errors = { ...errors, title: errMsg };
  } else if (payload?.title.length > 50 || payload?.title.length < 3) {
    const errMsg = "Please enter 3 minimum and 50 maximum characters.";
    errors = { ...errors, title: errMsg };
  } else {
    errors = { ...errors, title: null };
  }

  if (payload?.description && payload?.description.length < 3) {
    const errMsg = "Please enter 3 minimum characters.";
    errors = { ...errors, description: errMsg };
  } else {
    errors = { ...errors, description: null };
  }
  return errors;
};
