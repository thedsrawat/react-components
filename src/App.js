import FontCase from "./components/FontCase";
import ScreenWidth from "./components/ScreenWidth";
import { dateFromTimestamp, timeFromTimestamp } from "./components/functions";
import {
  setCookie,
  getCookie,
  checkCookie,
  deleteCookie,
} from "./components/Cookies";

export default function App() {
  return <>Checkout the App.js file</>;
}

// ***** How to use ******

// Screen Width
// <ScreenWidth minWidth="700" maxWidth="1920">Anything</ScreenWidth>

// Font Case Changer
// <FontCase changeTo="capital">Anything</FontCase>

// Cookies
// setCookie("Name", "Dummy", 365)
// getCookie("Name")
// checkCookie("Name")
// deleteCookie("Name")

// ----- timestamp -----
// dateFromTimestamp(timestamp)
// timeFromTimestamp(timestamp)
