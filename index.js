const entryTextbox = document.querySelector('.entry-textbox');
const entriesSection = document.querySelector('#entries');

function addEntryToDom(event) {
  event.preventDefault();

  const entryDiv = document.createElement('div');
  entryDiv.className = 'single-entry';
  entryDiv.innerText = entryTextbox.value;
  entryDiv.style.display = 'none';
  entriesSection.appendChild(entryDiv);
}

const entryForm = document.querySelector('#entryForm');
entryForm.addEventListener('submit', addEntryToDom);
