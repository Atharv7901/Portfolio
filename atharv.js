var bubbleLifeTime = 20;
var noOfBubbles = 100;

var wrapper = document.querySelector('.wrapper');
var bubbles = [];

init();

function init() {
    var bubble;
    for(var i = 0; i < noOfBubbles; i++) {
      bubble = createBubble();
      wrapper.appendChild(bubble);
    }
}

function createBubble() {
  var circleContainer = document.createElement('div');
  circleContainer.classList.add('circle_container');
  circleContainer.style.transform = "rotate(" + Math.floor(Math.random() * 360) + "deg)";

  var circle = createCircle();
  circleContainer.appendChild(circle);

  return circleContainer;
}

function createCircle() {
  var circle = document.createElement('div');
  circle.classList.add('circle');
  circle.style.animationDelay = (Math.random() * bubbleLifeTime) + 's';

  var side = (5 + Math.floor(Math.random() * 5)) + 'px';
  circle.style.width = side;
  circle.style.height = side;

  return circle;
}
var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};
// ICON 
var insta = document.querySelector(".insta");
insta.addEventListener("mouseover",function(){
  insta.style.color = "RGB(219, 46, 150)";
});


var hacker = document.querySelector(".hacker");
hacker.addEventListener("mouseover",function(){
  hacker.style.color="RGB(49, 199, 102)";
});

var facebook = document.querySelector(".facebook");
facebook.addEventListener("mouseover",function(){
  facebook.style.color="RGB(72, 103, 170)";
});
facebook.addEventListener("mouseout",function(){
  facebook.style.color= "grey";
});

var google = document.querySelector(".google");
google.addEventListener("mouseover",function(){
  google.style.color="RGB(221, 74, 64)";
});


var twitter = document.querySelector(".twitter");
twitter.addEventListener("mouseover",function(){
  twitter.style.color="RGB(29, 162, 242)";
});
twitter.addEventListener("mouseout",function(){
  twitter.style.color= "grey";
});

var linked = document.querySelector(".linked");
linked.addEventListener("mouseover",function(){
  linked.style.color="RGB(0, 119, 180)";
});
linked.addEventListener("mouseout",function(){
  linked.style.color= "grey";
});

var googlePlus = document.querySelector(".googlePlus");
googlePlus.addEventListener("mouseover",function(){
  googlePlus.style.color="RGB(221, 74, 64)";
});
googlePlus.addEventListener("mouseout",function(){
  googlePlus.style.color= "grey";
});

var instaGram = document.querySelector(".instaGram");
instaGram.addEventListener("mouseover",function(){
  instaGram.style.color = "RGB(219, 46, 150)";
});
instaGram.addEventListener("mouseout",function(){
  instaGram.style.color= "grey";
});
