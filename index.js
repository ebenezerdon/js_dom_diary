const entryTextbox = document.querySelector('.entry-textbox');
const entriesSection = document.querySelector('#entries');

function addEntryToDom(event) {
  event.preventDefault();

  const entryDiv = document.createElement('div');
  entryDiv.className = 'single-entry';
  entryDiv.innerText = entryTextbox.value;
  entriesSection.appendChild(entryDiv);
}

const entryForm = document.querySelector('#entryForm');
entryForm.addEventListener('submit', addEntryToDom);
