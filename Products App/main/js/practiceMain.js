angular.module("mainApp", [])
.directive("carouselWrapper", function () {
        return {
            restrict: "E",
            templateUrl: "../html/partials/carousel.html"
        };
});