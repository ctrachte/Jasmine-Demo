describe('Address Book', function () {
    it('should be able to add a new contact', function () {
      let addressBook = new AddressBook(), new Contact ();
      //add a contact to the book.
      addressBook.addContact(thisContact);

      expect(addressBook.getContact(0)).toBe(thisContact);
    })
)}
