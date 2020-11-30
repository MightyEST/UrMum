// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app"); // = Select element with id "app"
appDiv.innerHTML = `<h1>JS Starter123</h1>`; // Inject something into that element

function reqListener() {
  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open(
  "GET",
  "http://en.wikipedia.org/api/rest_v1/page/summary/Viljandi_County"
);
oReq.send();
