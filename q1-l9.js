var isPalindrome = (x) => {
  const rev = x.toString().split("").reverse().join("");
  if (Number(rev) <= x) {
    return true;
  } else {
    return false;
  }
};
const r = isPalindrome(121);
