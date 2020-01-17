function AddressBook () {
  this.contacts = [];
  this.initialComplete = false;
}

//add a contact
AddressBook.prototype.getInitialContacts = function (callBack) {
  let self = this;

  setTimeout(function () {
    self.initialComplete = true;
    if (callBack) {
      return callBack();
    }
  }, 3);
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

// get all contacts
AddressBook.prototype.getAllContacts = function () {
  return this.contacts;
}
