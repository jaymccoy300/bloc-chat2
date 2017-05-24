(function() {
    function MainCtrl(Room, $uibModal) {
        this.chatRoomArray = Room.all;
        
        this.newRoom = function() {
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl as modal'
                
            });
        }      
    }

    angular
        .module('blocChat')
        .controller('MainCtrl', ['Room','$uibModal', MainCtrl]);
})();
