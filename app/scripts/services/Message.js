(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    Message.all = messages;

    Message.getByRoomId = function(roomId) {
        return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
    }
    
    Message.send = function(newMessage, roomId) {
        console.log(roomId);
        messages.$add({newMessage:newMessage, roomId:roomId});
        newMessage.sentAt = firebase.database.ServerValue.timeStamp;
    }
    
    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();