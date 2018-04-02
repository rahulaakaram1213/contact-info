"use strict";

angular.module("contact-form").controller("ContactCtrl", [
  "Contacts",
  "$route",
  function(Contacts, $route) {
    var vm = this;
    vm.editClicked = false;
    vm.addClicked = false;

    vm.getAllContacts = function() {
      Contacts.getAll()
        .then(function (contact) {
          vm.contacts = contact.data;
        })
        .catch(function (err) {
          console.error(err);
        });
    }
    vm.getAllContacts();

    vm.deleteContact = function (itemId) {
      Contacts.deleteContact(itemId)
        .then(function (contact) {
          vm.getAllContacts();
        })
        .catch(function (err) {
          console.error(err)
        });
    };

    vm.editContact = function(data) {
      vm.editClicked = true;
      vm.addClicked= false;
      vm.data = data;
    };

    vm.addContact = function() {
      vm.addClicked = true;
      vm.editClicked = false;
    };

    vm.cancel = function() {
      vm.addClicked = false;
      vm.editClicked = false;
      vm.data = {};
    }

    vm.saveOrUpdateContact = function() {
      if (vm.editClicked) {
        Contacts.editContact(vm.data.id, vm.data)
          .then(function (contact) {
            vm.getAllContacts();
            vm.editClicked = false;
            vm.data = {};
          })
          .catch(function (err) {
            console.log(err)
          });
      } else {
        console.log(vm.data);
        Contacts.addContact(vm.data)
          .then(function (contact) {
            vm.getAllContacts();
            vm.addClicked = false;
            vm.data ={};
          })
          .catch(function (err) {
            console.log(err)
          });
      }
    };
  }
]);
