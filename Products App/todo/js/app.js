angular.module("myApp", ["ngRoute"])
    .directive("customInput", function () {
        return {
            restrict: 'E',
            templateUrl: "./addToDo.html",
            controller: function () {
                this.toDoList = [];
                this.toDo = "";
                this.editable = false;
                this.addToDo = function () {
                    this.toDoList.push(this.toDo);
                    this.toDo = "";
                }
                this.removeToDo = function ($index) {
                    this.toDoList.splice($index, 1);
                    if(this.toDoList.length < 1){
                        this.editable = false;
                    }
                    
                }
                this.saveChanges = function ($index) {
                    this.editable = false;
                }
                this.enableEdit = function () {
                    this.editable = true;
                }
            },
            controllerAs: "td"
        };
    })