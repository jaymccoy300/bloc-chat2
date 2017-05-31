(function() {
    function MainCtrl(Room, Message, $uibModal) {
        this.chatRoomArray = Room.all;
        this.currentRoom = null;
        
        
        this.addRoom = function() {
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                size: 'sm',
                controller: 'ModalCtrl',
                controllerAs : 'modal'
                               
            });
        }
        
        this.setCurrentRoom = function(room) {
            this.currentRoom = room;
            this.messages = Message.getByRoomId(this.currentRoom.$id);
            console.log(this.messages);
        }
    }

    angular
        .module('blocChat')
        .controller('MainCtrl', ['Room', 'Message', '$uibModal', MainCtrl]);
})();
