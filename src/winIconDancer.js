var WinIconDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class ="dancer" src="https://68.media.tumblr.com/14f9a65f9733eac78600ea51b979cfd3/tumblr_n8gux98bRT1r6zgh0o1_500.gif">');
  this.setPosition(top, left);
  this.oldStep = Dancer.prototype.step;
  this.goalTop = top;
  this.goalLeft = left;
  this.step();
};

WinIconDancer.prototype = Object.create(Dancer.prototype);
WinIconDancer.prototype.constructor = WinIconDancer;

WinIconDancer.prototype.step = function() {
  this.oldStep();
  //if current pos is goal
  var curLeft = this.$node.css('left').slice(0, -2);
  var curTop = this.$node.css('top').slice(0, -2);
  if (Number(curTop) === this.goalTop && Number(curLeft) === this.goalLeft) {
    //set new goal
    this.goalTop = Math.floor($('body').height() * Math.random());
    this.goalLeft = Math.floor($('body').width() * Math.random());
    // animate to goal
    this.$node.animate({
      top: this.goalTop,
      left: this.goalLeft
    }, 2000);
  }

  //interaction function
  //at each step
  // looop through window.dancers
    //at each dancer check if it's position is close to =/= this position
      //if true create new errorMsgDancer at this location.
};

//gify classic windows icon dancer

// animation style scroll right on page and flip,  scroll left and flip 

