(function() {
    function MainCtrl(Room, Message, $uibModal) {
        var main = this;
        main.rooms = Room.all;
        main.currentRoom = null;
        
        
        main.addRoom = function() {
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                size: 'sm',
                controller: 'ModalCtrl',
                controllerAs : 'modal'
                               
            });
        }
        
        main.setCurrentRoom = function(room) {
            main.messages = Message.getByRoomId(room.$id);
      //      console.log(this.messages);
        }
    }

    angular
        .module('blocChat')
        .controller('MainCtrl', ['Room', 'Message', '$uibModal', MainCtrl]);
})();
