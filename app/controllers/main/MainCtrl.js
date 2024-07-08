var app = angular.module("companyEmployees");

app.controller("MainCtrl", ["$scope", "dataFactory", MainCtrl]);

function MainCtrl($scope, dataFactory) {
	$scope.users = [];
	$scope.selectedUser = null;

	// klik na tabelo izbere uporabnika
	$scope.selectUser = function (user) {
		$scope.selectedUser = user;
	};

	// API klic za populacijo tabele
	dataFactory
		.getUsers()
		.then((res) => {
			$scope.users = res.data;
		})
		.catch((err) => console.log(`Napaka v API klicu: ${err}`));
}
