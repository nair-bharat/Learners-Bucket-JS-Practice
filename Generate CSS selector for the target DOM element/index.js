// generate css selector

const cssGenerator = (root, target) => {
  const selectors = [];
  while (root != target) {
    // console.log(target.parentNode.nodeName);
    // console.log(target.nodeName);
    const nth = Array.from(target.parentNode.children).indexOf(target) + 1;
    console.log(nth);
    const selector = `${target.tagName.toLowerCase()}:nth-child(${nth})`;
    selectors.unshift(selector);
    // selectors.unshift(target.nodeName.toLowerCase());
    // console.log(target.parentNode.children);

    target = target.parentNode;
  }

  selectors.unshift(`${target.tagName.toLowerCase()}[id='${target.id}']`);

  return selectors.join(" > ");
};

const root = document.getElementById("root");
const target = document.getElementById("target");
console.log(cssGenerator(root, target));
