export default function Cookies() {
  return;
}

export function setCookie(name, value, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = `expires=${d.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/`;
}

export function getCookie(name) {
  let nameString = `${name}=`;
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(nameString) === 0) {
      return c.substring(nameString.length, c.length);
    }
  }
  return "";
}

export function checkCookie(name) {
  let cname = getCookie(name);
  if (cname !== "") {
    return true;
  } else {
    return false;
  }
}

export function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}
