new TypeIt('#typewriter', {
  strings: ["For Everyone.", "Made Simple.", "Demystified."],
  speed: 100,
  breakLines: false,
  waitUntilVisible: true,
  lifeLike: true,
  loop: true,
  loopDelay: 3000,
  nextStringDelay: 1000
}).go();

$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});