import $ from 'jquery';
import 'slick-carousel';
import isUndefined from 'lodash/isUndefined';

/**
 * Wires up slick slider and provides hooks such that the internal can talk to
 * external functionality.
 */
export default class ProductCarousel {
  /**
   * @constructor
   * @param {string} selector - A CSS selector containing the slider
   * @params {Object} options - Any additional options based along to the slider
   */
  constructor(selector, options = {}) {
    this.num = 0;
    this.$el = $(selector).slick(Object.assign({}, {
      lazyLoad: 'progressive',
      dots: true,
      dotsClass: 'image-carousel__dots',
      appendDots: '.product__image',
      arrows: false,
      infinite: false,
    }, options));
  }

  /**
   * Sets the active slider number for later use.
   * @param {number} currentNum - The number of the active slide
   */
  setSlideNumber(currentNum) {
    this.num = currentNum;
  }

  /**
   * Transitions or goes to the slide number based on the current state.
   */
  transitionSlide() {
    if (!isUndefined(this.num)) {
      this.$el.slick('slickGoTo', this.num, true);
    }
  }
}
