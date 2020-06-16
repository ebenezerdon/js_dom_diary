const entryTextbox = document.querySelector('.entry-textbox');
const entriesSection = document.querySelector('#entries');
const entriesNav = document.querySelector('.entries-nav');

let count = 1;
function addEntryToDom(event) {
  event.preventDefault();

  const entryDiv = document.createElement('div');
  entryDiv.className = 'single-entry';
  entryDiv.innerText = entryTextbox.value;
  entryDiv.style.display = 'none';
  entriesSection.appendChild(entryDiv);

  const displayEntryButton = document.createElement('button');
  displayEntryButton.className = 'display-entry-button';
  displayEntryButton.innerText = count;
  entriesNav.appendChild(displayEntryButton);

  count++;
}

const entryForm = document.querySelector('#entryForm');
entryForm.addEventListener('submit', addEntryToDom);
