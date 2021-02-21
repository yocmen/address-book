import { Factory } from 'fishery';
import { name, internet, random, address, phone } from 'faker';

const factory = Factory.define(() => ({
  picture: {
    thumbnail: internet.avatar(),
  },
  name: {
    first: name.firstName(),
    last: name.lastName(),
  },
  login: {
    username: internet.userName(),
  },
  email: internet.email(),
  location: {
    street: {
      number: random.number(),
      name: address.streetName(),
    },
    city: address.city(),
    state: address.state(),
    postcode: address.zipCode(),
    phone: phone.phoneNumber(),
    cell: phone.phoneNumber(),
  },
}));

export default function generateUsers(min = 0, max = 10) {
  const length = Math.floor(Math.random() * (max - min) + min);
  return factory.buildList(length);
}
