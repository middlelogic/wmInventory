if(Meteor.isClient) {

  Template.inventory.helpers({

    items: function() {
      return Items.find({ userId: Meteor.userId() }).fetch();
    },
    addOrEdit: function(state) {
      return state === Session.get('formAddOrEdit') ? true : false;
    },
    item: function() {
      return Session.get('editableItem');
    }

  });

  Template.inventory.events({

    'submit form' : function(event) {
      event.preventDefault();

      var itemId = event.target.itemId.value;

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
        // Get current form state ('Add or Edit')
        if(Session.get('formAddOrEdit') === 'Add') {

          // If Add, Insert new Item
          Items.insert(item, function(err) {

            // Insert Failed
            if(err) {
              // Notify user
              toastr.error(err.reason);
            }

            // Insert Success
            else {
              // Notify user
              toastr.success("Item was added.");

              // Reset form field values
              event.target.itemName.value = "";
              event.target.itemSKU.value = "";
              event.target.itemQty.value = "";

              // Focus cursor in Name field
              $('input[id=itemName]').focus();
            }
          });

        // Get current form state ('Edit')
        } else if (Session.get('formAddOrEdit') === 'Edit') {

          // Append itemId to existing record
          item['_id'] = itemId;

          // Update Item using itemId
          Items.update({ _id: itemId }, item, function(err) {

            // Update Failed
            if(err) {
              // Notify user
              toastr.error(err.reason);
            }

            // Update Success
            else {
              // Notify user
              toastr.info("Item was updated.");

              // Set state back to 'Add'
              Session.set('formAddOrEdit', 'Add');

              // Wait for Add form to render...
              Meteor.setTimeout(function() {
                // Focus cursor on Name field.
                $('input[id=itemName]').focus();
              }, 100);

            }
          })
        }

      }
    },

    'click .editItem' : function(event) {
      event.preventDefault();

      // Change Form state to Edit (if/else statement in view)
      Session.set('formAddOrEdit', 'Edit');
      // Use session to pass Item to Edit form
      Session.set('editableItem', this);
    },

    'click .removeItem' : function(event) {
      event.preventDefault();

      // Attempt to delete item (using item Id)
      Items.remove({ _id: this._id }, function(err) {

        // Delete Failed
        if(err) {
          // Notify User
          toastr.error(err.reason);
        }

        // Delete Success
        else {
          // Notify User
          toastr.success("Item was removed.");
        }
      })
    }

  });

  Template.inventory.rendered = function() {

    // Default Form state
    Session.set('formAddOrEdit', 'Add');

  }

}
