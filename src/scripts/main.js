'use strict';

const inputs = document.querySelectorAll('.field-text');

const capitalize = str => (
  str[0].toUpperCase() + str.slice(1).replace(/([A-Z])/g, ' $1')
);

inputs.forEach(input => {
  input.placeholder = capitalize(input.name);

  input.insertAdjacentHTML('beforebegin',
    `<label for="${input.id}" class="field-label">
      ${capitalize(input.name)}
    </label>`);
});
