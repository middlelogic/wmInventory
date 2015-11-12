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

Router.route('/login', {
  template: 'login',
  data: function() {
    return {
      name: 'login'
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
