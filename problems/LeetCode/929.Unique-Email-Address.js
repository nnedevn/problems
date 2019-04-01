/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  let result = {};
  let count = 0;

  for (email of emails) {
    let spltEmailArr = email.split("@");
    let rawLocalName = spltEmailArr[0];
    let formattedLocalName = "";
    let domainName = spltEmailArr[1];

    if (rawLocalName.indexOf("+") != -1) {
      rawLocalName = rawLocalName.slice(0, rawLocalName.indexOf("+"));
    }

    formattedLocalName = rawLocalName.split(".").join("");
    result[formattedLocalName + "@" + domainName] = true;
  }

  return Object.keys(result).length;
};

console.log(
  numUniqueEmails([
    "test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com"
  ])
);
