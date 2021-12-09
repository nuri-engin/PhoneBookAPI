const faker = require('faker');
const { Contact } = require('../../../src/models');

describe('Contact model', () => {
  describe('Contact validation', () => {
    let newContact;
    beforeEach(() => {
      newContact = {
        name: faker.name.findName(),
        email: faker.internet.email().toLowerCase(),
        address: faker.phone.phoneNumber(),
      };
    });

    test('should correctly validate a valid contact', async () => {
      await expect(new Contact(newContact).validate()).resolves.toBeUndefined();
    });

    test('should throw a validation error if email is invalid', async () => {
      newContact.email = 'invalidEmail';
      await expect(new Contact(newContact).validate()).rejects.toThrow();
    });
  });
});
