var row = document.querySelector(".main");
var taskValue = document.querySelector(".task");

var close = document.querySelectorAll(".close");
var i;

for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

var tick = document.querySelectorAll(".tick");
var a;

for (a = 0; a < tick.length; a++) {
  tick[a].onclick = function () {
    spanNode = this.parentNode.childNodes[2];
    spanNode.classList.toggle("bg-info");
    this.classList.toggle("bg-info");
  };
}

function createElement(name, text, className1) {
  var name;
  name = document.createElement(name);
  var txt;
  txt = document.createTextNode(text);
  name.appendChild(txt);
  name.className = className1;
  // name.setAttribute("onclick", "this.classList.toggle('btn-outline-info')");
  return name;
}

function newElement() {
  var i, div, btn1, span, btn2;

  if (taskValue.value == "") {
    alert("You must add a task");
  } else {
    div = createElement("div", "", "input-group p-0", "");
    trash = createElement("i", "", "fa fa-trash");
    tick = createElement("i", "", "fa-solid fa-check");

    // below are three elements within div for bootstrap
    btn1 = createElement("button", "", "btn tick btn-outline-secondary");
    btn1.appendChild(tick);

    span = createElement("span", taskValue.value, "form-control");

    btn2 = createElement("button", "", "btn close btn-outline-secondary");
    btn2.appendChild(trash);
    // above will be three elements in bootstrap

    div.appendChild(btn1);
    div.appendChild(span);
    div.appendChild(btn2);

    row.appendChild(div);

    taskValue.value = "";

    var tick = document.querySelectorAll(".tick");
    var a;

    for (a = 0; a < tick.length; a++) {
      tick[a].onclick = function () {
        spanNode = this.parentNode.childNodes[2];
        spanNode.classList.toggle("bg-info");
        this.classList.toggle("bg-info");
      };
    }

    var close = document.querySelectorAll(".close");
    var i;
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
      };
    }
  }
}
