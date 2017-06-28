(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
       $uibModal.open({
        // Modal configuration object properties
        templateUrl: '/templates/new_user_modal.html',
        controller: 'UserModalCtrl',
        controllerAs: 'usermodal'
      })
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
