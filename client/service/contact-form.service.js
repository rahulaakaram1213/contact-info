angular.module("contact-form").factory("Contacts", ["$http", function($http) {
  var dataFactory = {};

    dataFactory.getAll = function () {
      return $http.get("http://localhost:3000/data");
    };
    dataFactory.getById = function (id) {
      return $http.get("http://localhost:3000/data/" + id);
    };
    dataFactory.editContact = function (id, data) {
      return $http.put("http://localhost:3000/data/" + id, data);
    };
    dataFactory.addContact = function (data) {
      return $http.post("http://localhost:3000/data", data);
    };
    dataFactory.deleteContact = function (id) {
      return $http.delete("http://localhost:3000/data/" + id);
    };

    return dataFactory;
  }
]);
