function validateRussianPhoneNumber(phoneNumber) {
  var pattern = /^(\+7|8)[\s-]?\d{3}[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;

  return pattern.test(phoneNumber);
}

function validateBirthday(birthday) {
  var inputDate = new Date(birthday);
  var currentDate = new Date();
  return inputDate <= currentDate;
}

function validatePassportIssueDate(issueDate) {
  var issueDateObj = new Date(issueDate);
  var currentDate = new Date();
  if (issueDateObj > currentDate) {
    return false;
  }

  var maxIssueAge = 10 * 365 * 24 * 60 * 60 * 1000;
  if (currentDate - issueDateObj > maxIssueAge) {
    return false;
  }
  return true;
}

export default {
  validateRussianPhoneNumber,
  validateBirthday,
  validatePassportIssueDate,
};
