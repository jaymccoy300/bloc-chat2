(function() {
    function Message($firebaseArray) {
        var Message = {};

        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);

        Message.getByRoomId = function(roomId) {
            var array = $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
            // var array = $firebaseArray(ref.orderByChild("roomId").equalTo(parseInt(roomId)));
            return array;
        };

        // Message.send = function(newMessage, roomname, time, usrname) {
        //     messages.$add({ content: newMessage, roomId: roomname, sentAt: time, username: usrname }).then(function(ref) {
        //         var id = ref.key;
        //         console.log("added new message with id " + id);
        //         messages.$indexFor(id); // returns location in the array
        //     });
        // }

        Message.send = function(newMessage,roomId, user) {
            console.log("YES " + roomId );
            messages.$add({ content: newMessage, roomId: roomId, user: user})
        }


        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();

// (function() {
//   function Message($firebaseArray) {
//     var Message = {};
//     var ref = firebase.database().ref().child("messages");
//     var messages = $firebaseArray(ref);

//     Message.getByRoomId = function(roomId) {
//         // Filter the messages by their room ID.
//     };

//     return Message;
//     };
//   }

//   angular
//     .module('blocChat')
//     .factory('Message', ['$firebaseArray', Message]);
// })();
