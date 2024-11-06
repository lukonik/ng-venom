import { signal } from '@angular/core';
import { modify } from '../../blueprint/modify/modify';

const user = signal({
  firstName: 'John',
  lastName: 'Doe',
  username: 'Admin',
  password: 'StrongPassword',
  addresses: [
    {
      state: 'California',
    },
  ],
});
const currentUser = user();

modify(user, (draft) => {
  draft.password = 'NewPassword';
  draft.addresses.push({
    state: 'Washington',
  });
});
const newUser = user();

console.log(currentUser === newUser); // False

console.log(currentUser.addresses === newUser.addresses); // False

console.log(newUser.password); // NewPassword

console.log(newUser.addresses); // [ {state: 'California'}, { state:'Washington' } ]
