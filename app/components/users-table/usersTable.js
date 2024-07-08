var app = angular.module("companyEmployees");

app.component("usersTable", {
	templateUrl: "components/users-table/usersTable.html",
	controller: UsersTableCtrl,
	controllerAs: "table",
	bindings: {
		users: "<",
		selectedUser: "<",
		selectUser: "<",
	},
});

function UsersTableCtrl() {
	var table = this;
}
