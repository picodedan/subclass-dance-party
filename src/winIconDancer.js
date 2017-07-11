var WinIconDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class ="dancer" src="https://68.media.tumblr.com/14f9a65f9733eac78600ea51b979cfd3/tumblr_n8gux98bRT1r6zgh0o1_500.gif">');
  this.setPosition(top, left);
  this.oldStep = Dancer.prototype.step;
  this.step();
};

WinIconDancer.prototype = Object.create(Dancer.prototype);
WinIconDancer.prototype.constructor = WinIconDancer;

WinIconDancer.prototype.step = function() {
  this.oldStep();
  //this.$node.css({'width': '100px', 'height': '100px'});
  this.$node.animate({
    right: '+=10'
  }, 400);
};

//gify classic windows icon dancer