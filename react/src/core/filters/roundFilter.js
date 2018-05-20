export default (value, decimal = 2) => {
  if (!value) {
    return;
  }

  return value.toFixed(decimal);
};
