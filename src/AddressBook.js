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
// delete a contact
AddressBook.prototype.deleteContact = function (index) {
  return this.contacts.splice(index, 1);
}
