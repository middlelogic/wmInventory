// Model
Item = function(doc) {
  _.extend(this, doc);
};

// Collection
Items = new Mongo.Collection("items", {
  transform: function(doc) {
    return new Item(doc);
  }
});
