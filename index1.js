const body = document.getElementById("body");
const computedbody = window.getComputedStyle(body);
console.log(body);
// console.log(computedbody); // > style > key : value

function getElementsByStylesHelper(node, property, value, result) {
  let length = node.childElementCount;

  for (let i = 0; i < length; i++) {
    // console.log("i", i, window.getComputedStyle(node.children[i]));
    if (window.getComputedStyle(node.children[i])[property] === value) {
      result.push(node.childNodes[i]);
    }
    getElementsByStylesHelper(node.childNodes[i], property, value, result);
  }

  return;
}

function getElementsByStyles(property, value) {
  const res = [];
  getElementsByStylesHelper(body, property, value, res);
  console.log(res);
}

getElementsByStyles("display", "flex");
