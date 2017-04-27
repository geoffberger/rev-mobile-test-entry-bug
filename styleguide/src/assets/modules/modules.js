import $ from 'jquery';

import './modules.scss';
import './accordion';
import './back-button';
import './toggle-display';
import './truncate';
import './product-size-change';
import './product-add-to-bag';
import './product-color-change';
import './product-oos';
import './product-zoom';
import ProductCarousel from './product-carousel';
import './ui-tabs';
import './rating-scale/rating-scale';
import updateNotifyMe from './notify-me-update';
import './modal';
import './submit-modal';
import './track-video';
import './vanish/vanish';

// Jon to move into its own module and follow standards
$.fn.navDropdowns = function navDropdowns() {
  function toggleDropdown($el) {
    $el.find('ul').slideToggle('slow');
  }

  // Iterate and reformat each matched element.
  return this.each(function reformat() {
    $(this).on('click', function setupToggle() {
      toggleDropdown($(this));
    });
  });
};


$(document).ready(() => {
  $('#js-nav-dropdown').navDropdowns();
  $('#js-nav-dropdown--full').navDropdowns();
  $('.js-accordion').accordion();
  $('.ui-tabs').tabs();
  $('.js-toggle-display').toggleDisplay();
  $('.js-modal').modal();
  $('.js-track-video').trackVideo();
  $('.submit-modal').submitModal();
  $('[data-truncate]').truncate();
  $('.back-button').backButton();

  $('.image-carousel').slick({
    lazyLoad: 'progressive',
    dots: true,
    dotsClass: 'image-carousel__dots',
    appendDots: '.image-carousel',
    arrows: false,
    infinite: false,
  });

  const $product = $('.product');
  $product.find('.product__size select, .product__size input').sizeChange().trigger('change');
  $product.find('.product__color select').colorChange();
  $product
    .find('form')
    .filter('[data-open="product-added-confirmation"]')
    .addToBag();
  $product.find('.product-oos').oosProduct();

  const productCarousel = new ProductCarousel('.product__image--carousel');
  $('.product__image').productZoom({
    slideFunc: productCarousel.setSlideNumber.bind(productCarousel),
    beforeUnmount: productCarousel.transitionSlide.bind(productCarousel),
    targetSelector: 'img',
  });

  const notifyMeClass = 'notify-me';

  $(`.${notifyMeClass}`).find('.product__size select, .product__size input')
    .sizeChange({ wrapBlockClass: notifyMeClass, update: updateNotifyMe })
    .trigger('change');

  $(document.getElementsByClassName('rating-scale')).ratingScale({
    titleSelector: '.form-section__title',
  });

  $(document.getElementsByClassName('vanish')).vanish();
});
