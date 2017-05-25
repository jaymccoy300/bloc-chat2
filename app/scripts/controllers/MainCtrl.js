(function() {
    function MainCtrl(Room, $uibModal) {
        this.chatRoomArray = Room.all;
        
        this.addRoom = function() {
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                size: 'sm',
                controller: 'ModalCtrl',
                controllerAs : 'modal'
                

                
            });
        }      
    }

    angular
        .module('blocChat')
        .controller('MainCtrl', ['Room','$uibModal', MainCtrl]);
})();
