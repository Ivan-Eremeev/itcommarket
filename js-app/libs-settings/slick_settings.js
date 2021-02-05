// Slick Slider
function slider(slider,sliderFor) {
  if (slider.length) {
    slider.slick({
      slidesToShow: 1, // Сколько слайдов показывать на экране
      slidesToScroll: 1, // Сколько слайдов пролистывать за раз
      asNavFor: sliderFor, // Связь со слайдерами
      dots: true, // Пагинация
      arrows: true, // Стрелки
      speed: 500, // Скорость перехода слайдов
      autoplay: false, // Автопрокрутка
      autoplaySpeed: 2000, // Скорость автопрокрутки
      centerMode: false, // Задает класс .slick-center слайду в центре
      focusOnSelect: true, // Выбрать слайд кликом
      infinite: false, // Зацикленное пролистывание
      vertical: false, // Вертикальный слайдер
      rtl: false, // Слайды листаются справа налево
      centerPadding: '0px', // Отступы слева и справа чтоб увидеть часть крайних слайдов
      adaptiveHeight: true, // Подгоняет высоту слайдера под элемент слайда
      variableWidth: false, // Подгоняет ширину слайдов под размер элемента,
      swipe: true, // Перелистывание пальцем
      draggable: true, // Перелистывание мышью
      responsive: [ // Адаптация
        {
        breakpoint: 992,
          settings: {
            arrows: false,
          }
        },
        {
        breakpoint: 720,
          settings: {
            arrows: false,
          }
        }
      ]
      // lazyLoad: 'ondemand', // Отложенная загрузка изображений. В тэг надо добавлять атрибут <img data-lazy="img/image.png"/>
    });
    
    sliderFor.slick({
      slidesToShow: 1, // Сколько слайдов показывать на экране
      slidesToScroll: 1, // Сколько слайдов пролистывать за раз
      dots: false, // Пагинация
      arrows: false, // Стрелки
      fade: true, // Плавный переход (анимация исчезновения появления) В false будет листаться
      asNavFor: slider // Связь со слайдерами
    });
  }
}
// slider();

// $('.your-slider').slick('unslick'); // Уничтожить слайдер

// $('.your-slider').slick('setPosition') // Переотрисовка слайдера. Например для использования в табах

// Слайдер с одним слайдом
function slider1(slider) {
  if (slider.length) {
    slider.slick({
      swipe: true,
      draggable: true,
      prevArrow: '<div class="slider-arrow slider-arrow--prev"><img src="img/arrow.svg"></div>',
      nextArrow: '<div class="slider-arrow slider-arrow--next"><img src="img/arrow.svg"></div>',
      infinite: false,
    });
  }
}
slider1($('.js-slider-1'));

// Слайдер с одним слайдом и кастомными стрелками
function slider2(block) {
  var slider = block.find('.js-slider-2');
  if (slider.length) {
    slider.slick({
      swipe: true,
      draggable: true,
      arrows: false,
      infinite: false,
    });
    // Кастомные стрелки
    block.find('.slider-arrow--prev').on('click', function () {
      slider.slick('slickPrev');
      console.log('ll');
    });
    block.find('.slider-arrow--next').on('click', function () {
      slider.slick('slickNext');
    });
  }
}
slider2($('.welcome__slider-container'));