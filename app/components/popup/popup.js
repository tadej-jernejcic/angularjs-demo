var app = angular.module("companyEmployees");

app.component("popup", {
	templateUrl: "components/popup/popup.html",
	controller: PopupCtrl,
	controllerAs: "popup",
	bindings: {
		user: "=",
		users: "=",
	},
	replace: true,
	transclude: true,
});

function PopupCtrl() {
	var popup = this;
	popup.displayDeleteAlert = false;

	// pokaži pojavno okno za izbris
	popup.showDeleteAlert = function () {
		popup.displayDeleteAlert = true;
	};

	// skrij pojavno okno za izbris
	popup.hideDeleteAlert = function () {
		popup.displayDeleteAlert = false;
	};

	// ponastavi izbranega uporabnika
	popup.unselectUser = function () {
		popup.user = null;
	};

	// zapri popup okno
	popup.hidePopup = function () {
		popup.hideDeleteAlert();
		popup.unselectUser();
	};

	// izbrisi izbranega uporabnika iz tabele
	popup.deleteUser = function (user) {
		let userIndex = popup.users.indexOf(user);
		popup.users.splice(userIndex, 1);
		popup.hideDeleteAlert();
		popup.unselectUser();
	};
}
