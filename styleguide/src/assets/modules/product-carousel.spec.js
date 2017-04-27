import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';

import ProductCarousel from './product-carousel';

chai.use(sinonChai);

describe('Product Carousel', () => {
  let sandbox;
  let productCarousel;
  const images = ['//:the-dude', '//:walter', '//:donny'];

  beforeEach(() => {
    fixture.set(`
      <div id="carousel">
        ${images.map(image => `<img src="${image}" />`).join('')}
      </div>
    `);
    sandbox = sinon.sandbox.create();
    productCarousel = new ProductCarousel('#carousel');
  });

  afterEach(() => {
    sandbox.restore();
    fixture.cleanup();
  });

  it('should switch to a different slides', () => {
    const changeSpy = sandbox.spy();
    const num = 2;
    productCarousel.$el.on('afterChange', changeSpy);
    productCarousel.setSlideNumber(num);
    productCarousel.transitionSlide();
    expect(changeSpy).to.have.been.calledWith(sinon.match.any, sinon.match.any, num);

    const nextSpy = sandbox.spy();
    const nextNum = 1;
    productCarousel.$el.on('afterChange', nextSpy);
    productCarousel.setSlideNumber(nextNum);
    productCarousel.transitionSlide();
    expect(changeSpy).to.have.been.calledWith(sinon.match.any, sinon.match.any, nextNum);
  });

  it('should not switch to a slide when an invalid number has been provided', () => {
    const changeSpy = sandbox.spy();
    productCarousel.$el.on('afterChange', changeSpy);
    productCarousel.setSlideNumber(undefined);
    productCarousel.transitionSlide();
    expect(changeSpy).to.not.have.been.called;
  });
});
