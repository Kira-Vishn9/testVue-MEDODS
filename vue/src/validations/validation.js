function validateLength(name) {
  return name.length >= 3;
}
function validateAlphabeticInput(value) {
  return /^[a-zA-Z]+$/.test(value);
}

function validateRussianPhoneNumber(phoneNumber) {
  return /^(\+?[78])[\-]?\(?\d{3}\)?[\-]?\d{7}$/.test(phoneNumber);
}

function validateToFuture(birthday) {
  return new Date(birthday) <= new Date();
}

function validateTooOld(passportIssueDate) {
  const currentYear = new Date().getFullYear();
  const yearsDiff = currentYear - passportIssueDate.slice(0, 4);
  return yearsDiff <= 10;
}

export default {
  validateAlphabeticInput,
  validateLength,
  validateRussianPhoneNumber,
  validateToFuture,
  validateTooOld,
};
