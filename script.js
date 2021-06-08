const button = document.getElementById('enter');
const input = document.getElementById('userinput');
const list = document.querySelector('ul');
const nodeListLi = document.getElementsByTagName('LI');

// Functions

// Check for valid input
function inputLenght() {
  return input.value.length;
}

// Create the element (item + close button + close button functionality)
function createListElement() {
  // Create Element
  const li = document.createElement('li'); // create the li element
  li.appendChild(document.createTextNode(input.value)); // create text inside of it
  list.appendChild(li); // append (put) into the page
  input.value = ''; // clear the input field again

  // Create close button
  var span = document.createElement('SPAN');
  var txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  li.appendChild(span);

  // Close the item by click on close button
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = 'none';
    };
  }
}

// Add element after click the button
function addListAfterClick() {
  if (inputLenght() > 0) {
    createListElement();
  }
}

// Add element after "enter" is pressed
function addListAfterKeypress(e) {
  // console.log(e);
  //console.log(e.which); // to see the keycode of the pressed button, but a better solution is to use e.key for the key pressed
  const keyName = e.key;

  if (keyName === 'Enter' && inputLenght() > 0) {
    createListElement();
  }
}

// Modify an element (check) when clicking on it (event delegation)
const itemChecked = function () {
  list.addEventListener(
    'click',
    function (ev) {
      if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('done');
      }
    },
    false
  );
};

/////////////////////////////////////////
// Event listener
button.addEventListener('click', addListAfterClick);
input.addEventListener('keypress', addListAfterKeypress);

itemChecked();

// Add buttons next to each list item to delete the item
for (let i = 0; i < nodeListLi.length; i++) {
  let span = document.createElement('SPAN');
  let txt = document.createTextNode('\u00D7');
  span.className = 'close'; // <span class="close">\u00D7</span>
  span.appendChild(txt);
  nodeListLi[i].appendChild(span);
}

// Click on a close button to hide the current list item

let close = document.getElementsByClassName('close');
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = 'none';
  };
}
