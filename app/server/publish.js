


Meteor.publish('drinks', function () {
  return Drinks.find();
});
