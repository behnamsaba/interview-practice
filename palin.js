const checkPalin = (str) => {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        console.log(left);
        console.log(right);
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};


function sum(x) {
  if (arguments.length == 2) {
    return arguments[0] + arguments[1];
  } else {
    return function(y) { return x + y; };
  }
}