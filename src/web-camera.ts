// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
import {Browser} from './browser';
import {Dom} from './dom';

export default class WebCamera {
  static browser = new Browser();
  static dom = new Dom();

  constructor() {
    // codes here
  }

  static getAccess() {
    // codes here
  }

  static test() {
    this.browser.getCameras((data, error) => {
      if (data) {
        this.dom.addCameraToPage();
      }
    });
  }
}

