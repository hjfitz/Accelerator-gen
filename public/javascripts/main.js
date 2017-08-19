const selectionItems = document.querySelectorAll('.selection-item');
const submitButton = document.getElementById('boilerplate-submit');

const log = (func, data, vars) => {
  if (vars) {
    console.log(`[LOG] module=${func} data='${data}' vars=${vars}`);
  } else {
    console.log(`[LOG] module=${func} data='${data}'`);
  }
};

const selectedItems = {
  layout: {},
  addons: [],
};

const postSelected = () => {
  log('postSelected', 'init');
  // create a formData object to send the requirements off
  const body = new FormData();
  // stringify the information we've collected earlier, and send that
  body.append('json', JSON.stringify(selectedItems));
  log('postSelected', 'appending body data', selectedItems.layout);

  fetch('/api/boilerplate/generate', {
    method: 'POST',
    body,
  }).then(resp => resp.json()).then((json) => {
    console.log(json);
  });
};

// todo: sometimes adding the class doesn't always stick.
// even with promises
const removeSelected = () => {
  [...selectionItems].map(selec => selec.classList.remove('selected'));
};

// use the dataset from the item we select to configure the selected items
const selectItemClicked = (event) => {
  removeSelected();
  event.target.classList.add('selected');
  selectedItems.layout = event.target.id;
  log('selectedItemClicked', 'var assign');
  console.log(selectedItems);
};

submitButton.addEventListener('click', postSelected);

// use a cool hack to spread out the dom list and store it, so we can map over it
[...selectionItems].map(selec => selec.addEventListener('click', selectItemClicked));
