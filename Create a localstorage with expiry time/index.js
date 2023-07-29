localStorage.setItem("name", "bharat");
//sessionStorage.setItem("user", "bharatnair");
//localStorage.removeItem("name");
//localStorage.clear();

/*
let result = { name: "Australia", animal: "Kangaroo" };
const res1 = JSON.stringify(result);
console.log(res1);
const res2 = JSON.parse(res1);
console.log(res2);*/

window.localStorageWithExpiryTime = {
  setItem: function (key, valueData, time) {
    let result = {
      valueData,
      time: Date.now() + time,
    };
    localStorage.setItem(key, JSON.stringify(result));
  },
  getItem: function (key) {
    if (localStorage.getItem(key) !== null) {
      let data = localStorage.getItem(key);
      data = JSON.parse(data);
      if (data.time <= Date.now()) {
        localStorage.removeItem(key);
        return null;
      }

      return data.valueData;
    }

    return null;
  },
  removeItem: function (key) {
    localStorage.removeItem(key);
  },
  clear: function () {
    localStorage.clear();
  },
};

//test

localStorageWithExpiryTime.setItem("user", "bharatnair", 1000);
setTimeout(() => {
  console.log(localStorageWithExpiryTime.getItem("user"));
}, 1500);

setTimeout(() => {
  console.log(localStorageWithExpiryTime.getItem("user"));
}, 500);
