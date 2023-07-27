console.log("index.js");

const obj = {
  A: "12",
  B: 23,
  C: {
    P: 23,
    O: {
      L: 56,
    },
    Q: [1, 2],
  },
};

// output -

/*

{
    "A": "12"
    "B": 23,
    "C.O.L": 56,
    "C.P": 23,
    "C.Q.0": 1,
    "C.Q.1": 2,
  }

  */

const getResult = (obj, prefix = "") => {
  let output = {};
  for (let key in obj) {
    const val = obj[key];
    const newKey = prefix === "" ? key : prefix + "." + key;
    if (val != null && typeof val === "object") {
      const intermediateOutput = getResult(val, newKey);
      output = { ...output, ...intermediateOutput };
    } else {
      output[newKey] = val;
    }
  }
  return output;
};

const res = getResult(obj);
console.log(res);
