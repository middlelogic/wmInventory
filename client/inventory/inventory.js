if(Meteor.isClient) {

  Template.inventory.helpers({

    items: function() {
        return Items.find({ userId: Meteor.userId() }).fetch();
    }

  });

  Template.inventory.events({

    'submit form' : function(event) {
      event.preventDefault();

      // Build new Item
      var item = {
        name: event.target.itemName.value,
        sku: event.target.itemSKU.value,
        quantity: event.target.itemQty.value,
        userId: Meteor.userId()
      }

      // Quick Validation...
      var fields = ['name', 'sku', 'quantity', 'userId'],
          isValid = true;

      // Iterate fields array to ensure item is valid.
      fields.forEach(function(d) {
        if(item[d] === "") {
            isValid = false;
            toastr.error("Item is missing field: " + d.toUpperCase());
        }
      });

      // If item is valid...
      if(isValid) {
        Items.insert(item, function(err) {
          if(err) {
            toastr.error(err.reason);
          }
          else {
            toastr.success("Item was added.");
            event.target.itemName.value = "";
            event.target.itemSKU.value = "";
            event.target.itemQty.value = "";

            $('input[id=itemName]').focus();  
          }
        })
      }


    },

    'click .removeItem' : function(event) {
      event.preventDefault();
      Items.remove({ _id: this._id }, function(err) {
        if(err) {
          toastr.error(err.reason);
        }
        else {
          toastr.success("Item was removed.");
        }
      })
    }

  })

}
