(function() {
    function MainCtrl(Room, Message, $uibModal, $cookies) {
        var main = this;
        main.rooms = Room.all;
        main.currentRoom = null;
        main.currentUser = $cookies.get('blocChatCurrentUser');
        
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
            main.currentRoomId = room.$id;
        }
        main.sendMessage = function() {
            console.log(main.newMessage);
            main.newMessage.roomId = main.currentRoom;
            main.newMessage.username = main.currentUser;
            Message.send(main.newMessage,main.currentRoomId);
        }
    }

    angular
        .module('blocChat')
        .controller('MainCtrl', ['Room', 'Message', '$uibModal', '$cookies', MainCtrl]);
})();
