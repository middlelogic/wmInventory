if(Meteor.isClient) {

  Template.inventory.helpers({

    items: function() {
        // return [];
        return [
          { name: 'Wellington SPA', sku: '349534789', quantity: 45 },
          { name: 'Stonehammer Dark', sku: '23874326', quantity: 25 },
          { name: 'Boneshaker', sku: '383838989', quantity: 15 },
          { name: 'Karma Citra', sku: '80087089', quantity: 22 }
        ];
    }

  });

}
