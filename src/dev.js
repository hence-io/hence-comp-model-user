'use strict';

import HenceCompModelUser from './hence-comp-model-user';

let options = [
  {
    label: 'Test',
    action: ()=> {
      alert('this is my option!');
    }
  }
];

let callToAction = {
  label: 'Sign Up Now!',
  align: 'right', // left/center/right
  action: (e, input)=> {
    alert(`Successful submission with: ${input.value}`);
  },
  input: {
    label: 'Enter your email here:',
    type: 'text',
    placeholder: 'Email'
  }
};


HenceCompModelUser.appendElementTo({
  test: {
    title: 'Hax0r!',
    image: 'http://placehold.it/350x50',
    options: options,
    callToAction: callToAction
  }
});

export * from './hence-comp-model-user';
