import Ember from 'ember';

export default Ember.Component.extend({
  showReviewFlag: false,

  actions: {
    showReviewForm() {
      console.log('showReview called');
      this.set('showReviewFlag', true);
    },

    saveReview() {
      var params = {
        author: this.get('author'),
        rating: this.get('rating'),
        content: this.get('content')
      };
      this.set('showReviewFlag', false);
      this.sendAction('saveReview', params);
    }
  }
});
