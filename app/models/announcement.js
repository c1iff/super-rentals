import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr(),
  text: DS.attr()
});
