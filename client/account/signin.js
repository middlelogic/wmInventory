if (Meteor.isClient) {

  Template.signin.events({
    'submit form': function(event) {
      event.preventDefault();

      // Get Email and Password from Form
      var emailVar = event.target.signinEmail.value;
      var passwordVar = event.target.signinPassword.value;

      // Attempt Login
      Meteor.loginWithPassword(emailVar, passwordVar, function(err) {

        // Failed login
        if(err) {
          // Notify user
          toastr.error(err.reason);
        }

        // Successful login
        else {
          // Re-direct to Inventory
          Router.go('/inventory');
        }
      });
    }
  });

}
