describe('Address Book', function () {
  let addressBook, thisContact;

  //reduce redundancy by adding all repeated code to a `beforeEach()`
  beforeEach(function() {
     addressBook = new AddressBook();
     thisContact = new Contact();
  });

    it('should be able to add a new contact', function () {
      //add a contact to the book.
      addressBook.addContact(thisContact);
      expect(addressBook.getContact(0)).toBe(thisContact);
    });

    it('should be able to delete a contact', function () {

      //add a contact to the book.
      addressBook.addContact(thisContact);
      // test deleting a contact
      addressBook.deleteContact(thisContact);
      expect(addressBook.getContact(0)).not.toBeDefined();
    });

});
// an example of Asyncronous API call spec suite
describe('Asyncronous Address Book', function () {
  let addressBook = new AddressBook();
  // needed to handle Asyncronous call to API
  beforeEach(function (done) {
    addressBook.getInitialContacts(function (){
      // `done` signals to the Asyncronous framework that we are done, and ready to run specs
      done();
    });
  });
  it ('should grab initial contacts', function (done) {

    // our mock Asyncronous API call:
    // should fail bercause API call has not completed.

    // addressBook.getInitialContacts();
    // expect(addressBook.initialComplete).toBe(true);

    // should pass because we are handling the Asyncronous call properly:
    expect(addressBook.initialComplete).toBe(true);
    done();
  });
});
