(function() {
    function MainCtrl(Room, Message, $uibModal, $cookies) {
        var main = this;
        main.chatRoomArray = Room.all;

        if ($cookies.get('blocChatCurrentUser')) {
            main.currentUser = $cookies.get('blocChatCurrentUser');
        }

        main.openNewRoomModal = function() {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/new_room_modal.html',
                controller: 'ModalCtrl',
                controllerAs: 'modal'
            });
        };

        main.currentRoomId = undefined;

        main.setCurrentRoom = function(room) {
            main.messageArray = Message.getByRoomId(room.$id);
            console.log(room.$id);
            main.currentRoomId = room.$id;

        };


  

        main.sendMessage = function() {
            var currentTime = "1:00pm";
            console.log();
            Message.send(main.message, main.currentRoomId, main.currentUser);
            main.message = "";
        }
    }

    angular
        .module('blocChat')
        .controller('MainCtrl', ['Room', 'Message', '$uibModal', '$cookies', MainCtrl]);

})();
