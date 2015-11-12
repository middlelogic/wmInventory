if (Meteor.isClient) {

  Template.signup.events({
    'submit form': function(event) {
      event.preventDefault();
      alert("signup clicked!");
    }
  });

}
