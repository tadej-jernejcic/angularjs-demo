var app = angular.module("companyEmployees");

app.factory("dataFactory", ["$http", dataFactory]);

function dataFactory($http) {
	const API_URL = "https://jsonplaceholder.typicode.com/users";

	return {
		getUsers: function () {
			// naredi API klic
			return $http.get(API_URL);
		},
	};
}
