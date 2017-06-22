(function() {
    function UserModalCtrl($cookies, $uibModalInstance) {
        var userModal = this;
        userModal.statusBar = "This name will appear when you send messages";
        userModal.setUsername = function() {
            if(userModal.username){
              $cookies.put('blocChatCurrentUser', userModal.username);
              $uibModalInstance.dismiss('cancel');
            } else {
              alert("Username should not be empty!");
            }
        };
    };

    angular
        .module('blocChat')
        .controller('UserModalCtrl', ['$cookies', '$uibModalInstance', UserModalCtrl]);
})();
