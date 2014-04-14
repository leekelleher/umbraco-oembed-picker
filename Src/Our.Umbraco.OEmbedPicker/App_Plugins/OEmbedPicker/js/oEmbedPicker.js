angular.module("umbraco").controller("Our.Umbraco.PropertyEditors.OEmbedPicker",
    function ($scope, dialogService) {

        $scope.remove = function () {
            $scope.model.value = "";
        };

        $scope.add = function() {
            dialogService.embedDialog({
                callback: function(data) {
                    $scope.model.value = data;
                }
            });
        };

    });