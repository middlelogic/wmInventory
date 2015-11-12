Router.configure({
  layoutTemplate: 'layout'
});


Router.route('/', {
  template: 'home',
  data: function() {
    return {
      name: 'home'
    }
  }
});

Router.route('/signin', {
  template: 'signin',
  data: function() {
    return {
      name: 'signin'
    }
  }
});

Router.route('/signup', {
  template: 'signup',
  data: function() {
    return {
      name: 'signup'
    }
  }
});


Router.route('/inventory', {
  template: 'inventory',
  data: function() {
    return {
      name: 'inventory'
    }
  }
});
