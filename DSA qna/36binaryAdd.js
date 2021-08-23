/**Program to add two binary numbers */

const binaryAdd = (a, b) => {
  let carry = 0;
  let str = "";
  let aSize = a.length - 1;
  let bSize = b.length - 1;

  while (aSize >= 0 || bSize >= 0) {
    let tempA = a[aSize] || 0;
    let tempB = b[bSize] || 0;

    let sum = Number(tempA) + Number(tempB) + carry;

    if (sum > 1) {
      sum = sum % 2;
      carry = 1;
    } else {
      carry = 0;
    }

    str = str + sum;
    aSize--;
    bSize--;
  }

  if (carry) {
    str += carry;
  }

  console.log(str)
};

binaryAdd('1010','1011')
