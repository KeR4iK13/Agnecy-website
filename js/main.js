$(function() {

	let header = $('#header'),
		headerHeight = $('#header').innerHeight(),
		future_prodH = $('#future_prod').offset().top,
		ourTeamH = $('#ourTeam').offset().top,
		lastformH = $('#lastform').offset().top,
		scrollOffset = $(window).scrollTop(),
		nav = $('#nav'),
		home = $('#home'),
		button__ourTeam = $('#button__ourTeam'),
		contact__btn = $('#contact__btn'),
		learnMore__btn = $('#learnMore__btn'),
		contact__btn2 = $('#contact__btn2'),
		button__page2 = $('#button__page2');
		page2H = $("#page2").offset().top;

	

		/* Отслеживание скролла */

	$(window).on('scroll', function() {

		scrollOffset = $(this).scrollTop();
		checkScroll(scrollOffset);

		/* fixed navbar */

	function checkScroll(scrollOffset){

		if(scrollOffset >= headerHeight){
			nav.addClass("nav--fixed");
		} else {
			nav.removeClass("nav--fixed");
		}



		/* Dinamic NavBar */


		if(scrollOffset < future_prodH){
			$("#nav a").removeClass("nav__item--active");
			home.addClass("nav__item--active");
		} else {
			home.removeClass("nav__item--active");
		}


		if(scrollOffset >= future_prodH){
			$("#nav a").removeClass("nav__item--active");
			button__page2.addClass("nav__item--active");
		} else {
			button__page2.removeClass("nav__item--active");
		}


		if(scrollOffset >= ourTeamH - 150){
			$("#nav a").removeClass("nav__item--active");
			button__ourTeam.addClass("nav__item--active");
		} else {
			button__ourTeam.removeClass("nav__item--active");
		}


		if(scrollOffset >= lastformH - 125){
			$("#nav a").removeClass("nav__item--active");
			contact__btn.addClass("nav__item--active");

		} else {
			contact__btn.removeClass("nav__item--active");
		}
	}
		
		

	});


	/* Scroll */

	$("[data-scroll]").on('click', function(event) {
		event.preventDefault();

		let blockId = $(this).data('scroll'),
			blockOffset = $(blockId).offset().top - 100,
			$this = $(this);

			$("#nav a").removeClass("nav__item--active");
			$this.addClass("nav__item--active");
			contact__btn2.removeClass("nav__item--active");
			learnMore__btn.removeClass("nav__item--active");


		
		$("html, body").animate({
			scrollTop: blockOffset
		}, 600)
	});




});



/* User Data*/


var username = document.querySelector("#username");
var usermail = document.querySelector("#usermail");
var usermessage = document.querySelector("#usermessage");
var send__button = document.querySelector("#send__button");
var subs__button = document.querySelector("#subs__button");

subs__button.addEventListener('click', () =>{
	console.log("Почта пользователя: " + usermail.value);
})


send__button.addEventListener('click', () => {
	console.log("Имя пользователя: " + username.value);
	console.log("Почта пользователя: " + usermail.value);
	console.log("Сообщение пользователя: " + usermessage.value);
})









