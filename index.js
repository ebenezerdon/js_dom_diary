function addEntryToDom(event) {
  event.preventDefault();
}

const entryForm = document.querySelector('#entryForm');
entryForm.addEventListener('submit', addEntryToDom);
