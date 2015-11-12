if(Meteor.isClient) {

  Template.navigation.events({
    'click .signout': function(event) {
      event.preventDefault();

      // Logout Current User
      Meteor.logout();

      // Toggle navbar collapse
      $('.navbar-toggle').click();

      // Re-direct to Sign-in
      Router.go('/signin');
    }
  });

  Template.navigation.rendered = function() {

    $('.navbar ul.nav li a').on('click', function(){
      $('.navbar-toggle').click();
    });

  }

}
