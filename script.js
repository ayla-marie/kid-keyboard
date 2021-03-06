const textField = document.getElementById("activity");
const spacebar = document.getElementById("space");
const shift = document.getElementsByClassName("shift");
const virtualkey = document.querySelector("button");
const del = document.getElementById("delete");
const ent = document.getElementById("enter");
const row = document.getElementsByClassName("row");
const lockKey = document.getElementById("lock");
const apostraphe = document.getElementById("apostraphe");
const quotes = document.getElementById("quotes");
const clearbtn = document.getElementById("clear");
const leftArrow = document.getElementById("leftArrow");
const RightArrow = document.getElementById("RightArrow");
const virtualKeys = document.getElementsByClassName("key");
//level button elements
const red = document.getElementById("Red");
const yellow = document.getElementById("Yellow");
const green = document.getElementById("Green");

//array mapped of letters on keyboard
const keybrdMap = {
  one: [0, 0],
  two: [0, 1],
  three: [0, 2],
  four: [0, 3],
  five: [0, 4],
  six: [0, 5],
  seven: [0, 6],
  eight: [0, 7],
  nine: [0, 8],
  zero: [0, 9],
  minus: [0, 10],
  plus: [0, 11],
  delete: [0, 12],
  tab: [1, 0],
  q: [1, 1],
  w: [1, 2],
  e: [1, 3],
  r: [1, 4],
  t: [1, 5],
  y: [1, 6],
  u: [1, 7],
  i: [1, 8],
  o: [1, 9],
  p: [1, 10],
  enter: [1, 11],
  Lock: [2, 0],
  a: [2, 1],
  s: [2, 2],
  d: [2, 3],
  f: [2, 4],
  g: [2, 5],
  h: [2, 6],
  j: [2, 7],
  k: [2, 8],
  l: [2, 9],
  quotes: [2, 10],
  apostraphe: [2, 11],
  go: [2, 12],
  shift2: [3, 0],
  z: [3, 1],
  x: [3, 2],
  c: [3, 3],
  v: [3, 4],
  b: [3, 5],
  n: [3, 6],
  m: [3, 7],
  comma: [3, 8],
  period: [3, 9],
  question: [3, 10],
  shift: [3, 11],
  ctrl: [4, 0],
  option: [4, 1],
  space: [4, 2],
  left: [4, 3],
  updown: [4, 4],
  right: [4, 5]
};

//levels of letters
var group1 = [
  keybrdMap["w"],
  keybrdMap["e"],
  keybrdMap["a"],
  keybrdMap["s"],
  keybrdMap["i"],
  keybrdMap["o"],
  keybrdMap["k"],
  keybrdMap["l"],
  keybrdMap["r"],
  keybrdMap["t"],
  keybrdMap["d"]
];

var group2 = [
  keybrdMap["h"],
  keybrdMap["f"],
  keybrdMap["y"],
  keybrdMap["u"],
  keybrdMap["j"],
  keybrdMap["m"],
  keybrdMap["plus"],
  keybrdMap["minus"],
  keybrdMap["period"],
  keybrdMap["question"]
];

var group3 = [
  keybrdMap["c"],
  keybrdMap["g"],
  keybrdMap["p"],
  keybrdMap["n"],
  keybrdMap["q"],
  keybrdMap["z"],
  keybrdMap["x"],
  keybrdMap["v"],
  keybrdMap["b"],
  keybrdMap["quotes"],
  keybrdMap["apostraphe"],
  keybrdMap["comma"],
  keybrdMap["one"]
];

//autofocus the cursor on the editable div so prompting user to click is unecessary
textField.focus();

//show letters by group
function turnKeysOn(array) {
  const showKey = virtualKeys => {
    const virtualKeyEl = row[virtualKeys[0]].children[virtualKeys[1]];

    virtualKeyEl.className = "key-on";
  };
  var i;
  for (i = 0; i < array.length; i++) {
    showKey(array[i]);
  }
}

//hide letters by group
function turnKeysOff(array) {
  const hideKey = virtualKeys => {
    const virtualKeyEl = row[virtualKeys[0]].children[virtualKeys[1]];

    virtualKeyEl.className = "key-off";
  };
  var i;
  for (i = 0; i < array.length; i++) {
    hideKey(array[i]);
  }
}
//set letters to default by group
function setKeystoDefault(array) {
  const defaultKey = virtualKeys => {
    const virtualKeyEl = row[virtualKeys[0]].children[virtualKeys[1]];

    virtualKeyEl.className = "key";
  };
  var i;
  for (i = 0; i < array.length; i++) {
    defaultKey(array[i]);
  }
}

//for loop that iterates through the whole class of "key"
var i;
for (i = 0; i < virtualKeys.length; i++) {
  //const that sets el equal to one array value within "key" class
  const el = virtualKeys[i];

  function toggleAppendText() {
    if (el.className === "key-on" || el.className === "key") {
      textField.append(el.value);
    } else {
      console.log("key click error");
    }
  }

  //event listener for virtual keys
  el.addEventListener("click", () => {
    toggleAppendText();
  });
}
//level button color border functions
function turnOnRed() {
  red.className = "levels-select";
  yellow.className = "levels";
  green.className = "levles";
}
function turnOnYellow() {
  red.className = "levels";
  yellow.className = "levels-select";
  green.className = "levles";
}
function turnOnGreen() {
  red.className = "levels";
  yellow.className = "levels";
  green.className = "levels-select";
}

//event listeners for turing on/off groups
red.addEventListener("click", () => {
  turnKeysOn(group1);
  turnKeysOff(group2);
  turnKeysOff(group3);
  turnOnRed();
  LimitInput();
});

yellow.addEventListener("click", () => {
  setKeystoDefault(group1);
  turnKeysOn(group2);
  turnKeysOff(group3);
  turnOnYellow();
});
green.addEventListener("click", () => {
  setKeystoDefault(group1);
  setKeystoDefault(group2);
  turnKeysOn(group3);
  turnOnGreen();
});

//spacebar function
spacebar.addEventListener("click", () => {
  textField.append(" ");
});
//shift function
var i;
for (i = 0; i < shift.length; i++) {
  shiftEl = shift[i];
  shiftEl.addEventListener("click", () => {
    if (shiftEl.className === "shift") {
      shiftEl.className = "shift-on";
    } else {
      shiftEl.className = "shift";
    }
    var a;
    for (a = 0; a < virtualKeys.length; a++) {
      keyEl = virtualKeys[a];
      if (shiftEl.className === "shift-on") {
        keyEl.value = keyEl.value.toUpperCase();
        keyEl.innerText = keyEl.innerText.toUpperCase();
      } else {
        keyEl.value = keyEl.value.toLowerCase();
        keyEl.innerText = keyEl.innerText.toLowerCase();
      }
    }
  });
}

//lock function
lockKey.addEventListener("click", () => {
  if (lockKey.className === "lock") {
    lockKey.className = "lock-on";
  } else {
    lockKey.className = "lock";
  }
  var a;
  for (a = 0; a < virtualKeys.length; a++) {
    keyEl = virtualKeys[a];
    if (lockKey.className === "lock-on") {
      keyEl.value = keyEl.value.toUpperCase();
      keyEl.innerText = keyEl.innerText.toUpperCase();
    } else {
      keyEl.value = keyEl.value.toLowerCase();
      keyEl.innerText = keyEl.innerText.toLowerCase();
    }
  }
});

//delete function
del.addEventListener("click", () => {
  textField.innerText = textField.innerText.substring(
    0,
    textField.innerText.length - 1
  );
});

//clear button
clearbtn.addEventListener("click", () => {
  textField.innerText = "";
});

//enter function

//tab function

//arrow left function

//arrow right function

//coursework screen
