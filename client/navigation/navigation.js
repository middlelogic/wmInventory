if(Meteor.isClient) {

  Template.navigation.events({
    'click .signout': function(event) {
      event.preventDefault();

      // Logout Current User
      Meteor.logout();

      // Re-direct to Sign-in
      Router.go('/signin');
    }
  });

}
