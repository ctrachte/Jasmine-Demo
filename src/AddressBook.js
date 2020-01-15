function AddressBook () {
  this.contacts = [];
}
//add a contact
AddressBook.prototype.addContact = function (contact) {
  this.contacts.push(contact);
}
// get a contact
AddressBook.prototype.getContact = function (index) {
  return this.contacts[index];
}
