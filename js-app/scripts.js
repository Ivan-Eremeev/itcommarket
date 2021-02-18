//  Ivan Eremeev - 2021
//  Skype: ivan.eremeev_1
//  Telegram: IvanMessage
//  Email: ivan.frontcoder@gmail.com

$(document).ready(function () {

	// Брэйкпоинты js
	var	breakXl = 1400,
			breakLg = 1200,
			breakMd = 1050,
			breakSm = 769,
			breakXs = 500;
	
	//= libs-settings/slick_settings.js

	// Запрет перехода по ссылкам с хэшем
	$('a[href="#"]').click(function(e) {
		e.preventDefault();
	});

	// Мобильное меню
	function myMenu(menu) {
		if (menu.length) {
			menu.each(function () {
				var $this = $(this),
						menuBtn = $this.find('#menu-btn'),
						over = $this.find('#menu-over'),
						close = $this.find('#menu-close');
				menuBtn.on('click', toggleOpenMenu);
				over.on('click', menuClose);
				close.on('click', menuClose);
				function menuOpen() { // Открывание меню
					$this.addClass('open');
					menuBtn.addClass('is-active');
				}
				function menuClose() { // Закрывание меню
					$this.removeClass('open');
					menuBtn.removeClass('is-active');
				}
				function toggleOpenMenu() { // Открывание/закрывание меню
					if ($this.hasClass('open')) {
						menuClose();
					}else {
						menuOpen();
					}
				}
			})
		};
	};
	myMenu($('.js-menu'));

	// Табы
	function tabs(tabs) {
		if (tabs.length) {
			tabs.each(function() {
				var trigger = $(this).find('#tabs_triggers').children(),
						content = $(this).find('#tabs_content').children(),
						time = 300;
				trigger.click(function () {
					var $this = $(this),
							index = $this.index();
					if (!$this.hasClass('active')) {
						trigger.removeClass('active');
						$this.addClass('active');
						content.hide().removeClass('open');
						content.eq(index).fadeIn(time).addClass('open');
						tabs.find('.slick-slider').slick('setPosition');
					}else {
						return false;
					}
				});
			});
		}
	}
	tabs($('.js_tabs'));

	// Выпадайка при клике
	function dropClick(btn) {
		if (btn.length) {
			btn.each(function () {
				var $this = $(this),
						id = $this.data('id'),
						dropBlock = $(id);
				$this.on('click', function () {
					$this.toggleClass('active');
					dropBlock.toggleClass('open');
				});
				$(document).mouseup(function (e) {
					if (!dropBlock.is(e.target) && dropBlock.has(e.target).length === 0 && !$this.is(e.target) && $this.has(e.target).length === 0) {
						$this.removeClass('active');
						dropBlock.removeClass('open');
					}
				});
			});
		}
	}
	dropClick($('.js-drop-click'));

	// Селект сортировки в каталоге
	function selectSort(btn) {
		if (btn.length) {
			btn.each(function () {
				var $this = $(this),
					id = $this.data('id'),
					dropBlock = $(id),
					input = dropBlock.find('input'),
					span = $this.find('.catalog__select-btn-span');
				$this.on('click', function () {
					$this.toggleClass('active');
					dropBlock.toggleClass('open');
				});
				$(document).mouseup(function (e) {
					if (!dropBlock.is(e.target) && dropBlock.has(e.target).length === 0 && !$this.is(e.target) && $this.has(e.target).length === 0) {
						$this.removeClass('active');
						dropBlock.removeClass('open');
					}
				});
				input.on('change', function () {
					span.text($(this).siblings('.catalog__select-drop-text').text());
					$this.removeClass('active');
					dropBlock.removeClass('open');
				});
			});
		}
	}
	selectSort($('.js-select-sort'));

	// Аккордеон
	function accordeon(block) {
		if (block.length) {
			block.each(function () {
				var $this = $(this),
					triggers = $this.find('.js-accordeon-trigger');
				triggers.on('click', function () {
					$(this).toggleClass('active');
					$(this).next('.js-accordeon-drop').stop().slideToggle(function () {
						$(this).toggleClass('open');
					});
				});
			});
		}
	}
	accordeon($('.js-accordeon'));

	// Вид каталога "списком или плиткой"
	function viewCatalog() {
		var btn = $('.catalog__view-btn'),
				catalogCards = $('.catalog__cards'),
				card = $('.card');
		btn.on('click', function () {
			btn.removeClass('active');
			$(this).addClass('active');
			if ($(this).hasClass('catalog__view-btn--list')) {
				catalogCards.addClass('catalog__cards--list');
				card.addClass('card--list');
			} else {
				catalogCards.removeClass('catalog__cards--list');
				card.removeClass('card--list');
			}
		});
		// $(window).resize(function () {
		// 	if ($(window).width() < breakXs) {
		// 		catalogCards.removeClass('catalog__cards--list');
		// 		card.removeClass('card--list');
		// 		btn.removeClass('active');
		// 		$('.catalog__view-btn--tiles').addClass('active');
		// 	}
		// });
	}
	viewCatalog();

	// Вставляет svg в html, позволяет управлять svg через css 
	$('img[src$=".svg"]').each(function(){
		var $img = $(this);
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');
		$.get(imgURL, function(data) {
			var $svg = $(data).find('svg');
			if(typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass+' replaced-svg');
			}
			$svg = $svg.removeAttr('xmlns:a');
			if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
				$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
			}
			$img.replaceWith($svg);
		}, 'xml');
	});
	
});