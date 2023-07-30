// We have to find all the DOM elements with the given color property. The color be in HEX, RGB, or text format.

const getComputedColor = (colorCode) => {
  const div = document.createElement("div");
  div.style.color = colorCode;
  //console.log(div);
  document.body.appendChild(div);
  const computedStyle = window.getComputedStyle(div);
  //console.log(computedStyle);
  return computedStyle.color;
};

const helper = (root, colorCode) => {
  const givenColor = getComputedColor(colorCode);
  //console.log(givenColor);
  const output = [];

  const search = (ele) => {
    const elementColor = ele.style.color;
    const computedElementColor = getComputedColor(elementColor);
    //console.log(computedElementColor);

    if (computedElementColor === givenColor) {
      output.push(ele.outerHTML);
    }
    for (let child of ele.children) {
      search(child);
      //console.log(child);
      //console.log(child.style.color);
    }
  };
  search(root);

  /*
  for (let child of root.children) {
    search(child);
    //console.log(child);
    //console.log(child.style.color);
  }
  */
  return output;
};

//console.log(getComputedColor("red"));
const root = document.getElementById("root");
const res = helper(root, "red");
console.log(res);
//console.log(root);
