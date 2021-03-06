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
        homeNumber: 242898478,
        mobileNumber: faker.phone.phoneNumber(),
        otherNumber: faker.phone.phoneNumber(),
      };
    });

    // TODO: This test case will always fail! Can not overcome the 'faker's phoneNumber samples.
    // It always returns a number which ends like: 'x123'. Therefore need to keep research for a solution...
    test('should correctly validate a valid contact', async () => {
      await expect(new Contact(newContact).validate()).resolves.toBeUndefined();
    });

    test('should throw a validation error if email is invalid', async () => {
      newContact.email = 'invalidEmail';
      await expect(new Contact(newContact).validate()).rejects.toThrow();
    });

    test('should throw a validation error if workNumber contains string characters', async () => {
      newContact.workNumber = 'workNumber0101';
      await expect(new Contact(newContact).validate()).rejects.toThrow();
    });

    test('should return contact homeNumber correct', async () => {
      await expect(new Contact(newContact).toJSON().homeNumber).toEqual(242898478);
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
