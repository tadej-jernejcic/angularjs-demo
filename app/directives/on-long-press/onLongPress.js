var app = angular.module("companyEmployees");

app.directive("onLongPress", [
	"$timeout",
	function ($timeout) {
		return {
			restrict: "A",
			link: function (scope, element, attrs) {
				var timeoutPromise;

				// poslušaj za začetek klika
				element.on("mousedown touchstart", function (event) {
					timeoutPromise = $timeout(function () {
						console.log("dogodek onLongPress!");
					}, 800);
				});

				// prenehaj če uporabnik prekine klik
				element.on("mouseup touchend touchcancel", function (event) {
					$timeout.cancel(timeoutPromise);
				});

				// počisti poslušalce dogodkov ob odstranitvi
				scope.$on("$destroy", function () {
					element.off("mousedown touchstart");
					element.off("mouseup touchend touchcancel");
				});
			},
		};
	},
]);
