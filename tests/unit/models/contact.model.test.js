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
        workNumber: faker.phone.phoneNumber(),
        homeNumber: faker.phone.phoneNumber(),
        mobileNumber: faker.phone.phoneNumber(),
        otherNumber: faker.phone.phoneNumber(),
      };
    });

    test('should correctly validate a valid contact', async () => {
      await expect(new Contact(newContact).validate()).resolves.toBeUndefined();
    });

    test('should throw a validation error if email is invalid', async () => {
      newContact.email = 'invalidEmail';
      await expect(new Contact(newContact).validate()).rejects.toThrow();
    });

    test('should throw a validation error if role is unknown', async () => {
      newContact.role = 'invalid';
      await expect(new Contact(newContact).validate()).rejects.toThrow();
    });
  });

  describe('Contact toJSON()', () => {
    test('should not return contact otherNumber when toJSON is called', () => {
      const newContact = {
        name: faker.name.findName(),
        email: faker.internet.email().toLowerCase(),
        workNumber: faker.phone.phoneNumber(),
        homeNumber: faker.phone.phoneNumber(),
        mobileNumber: faker.phone.phoneNumber(),
      };
      expect(new Contact(newContact).toJSON()).not.toHaveProperty('otherNumber');
    });
  });
});
