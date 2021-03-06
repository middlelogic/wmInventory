if (Meteor.isClient) {

  Template.signup.events({
    'submit form': function(event) {
      event.preventDefault();

      // Get Email and Password from Form
      var emailVar = event.target.signupEmail.value;
      var passwordVar = event.target.signupPassword.value;

      // Create Account
      Accounts.createUser({
        email: emailVar,
        password: passwordVar
      }, function(err) {

        // Failed login
        if(err) {
          // Notify user
          toastr.error(err.reason);
        }

        // Successful login
        else {
          // Notify user
          toastr.success("Account created!");

          // Re-direct to Inventory
          Router.go('/inventory');
        }
      });
    }
  });

}
