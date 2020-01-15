describe('Address Book', function () {
    it('should be able to add a new contact', function () {
      let addressBook = new AddressBook();
      let thisContact = new Contact();
      //add a contact to the book.
      addressBook.addContact(thisContact);

      expect(addressBook.getContact(0)).toBe(thisContact);
    });

    it('should be able to delete a contact', function () {
      let addressBook = new AddressBook();
      let thisContact = new Contact();
      //add a contact to the book.
      addressBook.addContact(thisContact);
      // test deleting a contact
      addressBook.deleteContact(thisContact);
      expect(addressBook.getContact(0)).not.toBeDefined();
    });

})
