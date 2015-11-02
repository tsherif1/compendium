Drinks = new Mongo.Collection('drinks');


if (Meteor.isServer) {
  Drinks.allow({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });
}

Drinks.attachSchema(new SimpleSchema({
  'name': {
    type: String,
    label: "Name",
    max: 200
  },
  'tagline': {
    type: String,
    label: "Tagline"
  },
  'family': {
    type: String,
    label: "Family"
  },
  'id': {
    type: String,
    label: "ID (number)"
  },
  'ingredient': {
    type: [Object],
    optional: true
  },
  'ingredient.$.name': {
    type: String,
    label: "Ingredient",
    max: 30
  },
  'ingredient.$.amount': {
    type: String,
    label: "Amount",
    max: 30
  },
  'ingredient.$.units': {
    type: String,
    label: "Units",
    max: 30
  },
  'process': {
    type: [Object],
    optional: true
  },
  'process.$.n': {
    type: String,
    label: "Process",
    //allowedValues: ['Whip', 'Stir', 'Mix', 'Shake', 'Blend'],
    max: 30
  },
  'glass': {
    type: String,
    label: "Type of glass",
    //allowedValues: ['Highball', 'Cocktail', 'Flute', 'Snifter', 'Martini'],
    max: 25
  },
  'ice': {
    type: String,
    label: "Type of ice",
    max: 25,
    optional: true
  },
  'garnish': {
    type: String,
    label: "Garnish",
    max: 50,
    optional: true
  },
  'attribution': {
    type: Object,
    optional: true
  },
  'attribution.name': {
    type: String,
    label: "Name of creator",
    max: 50,
    optional: true
  },
  'attribution.source': {
    type: String,
    label: "Original source",
    max: 50,
    optional: true
  },
  'attribution.city': {
    type: String,
    label: "City of origin",
    max: 50,
    optional: true
  },
  'attribution.year': {
    type: String,
    label: "Year created",
    max: 50,
    optional: true
  }
}));
