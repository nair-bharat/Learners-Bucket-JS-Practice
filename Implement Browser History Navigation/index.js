// this is a class, as we can create multiple instances of the page, new tab or window.
class BrowserHistory {
  constructor() {
    this.history = []; // set history as empty.
    this.index = -1; // set for blank page
  }

  visit(url) {
    this.history.push(url);
    ++this.index;
    /*
    this.history[++this.index] = url;
    this.history.length = this.index + 1;
    */
    //console.log(this.history.length);
  }

  current() {
    if (this.index < 0) {
      return "homepage";
    }

    return this.history[this.index];
  }

  forward() {
    this.index = Math.min(this.history.length - 1, ++this.index);
  }

  backward() {
    this.index = Math.max(-1, --this.index);
  }
}

const bharat = new BrowserHistory();
/*

--- Test data ---
bharat.visit("w3schools");
bharat.visit("mdndocs");
bharat.backward();
bharat.backward();
bharat.forward();
bharat.forward();
bharat.backward();
console.log(bharat.current());
*/
