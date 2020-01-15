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

})
