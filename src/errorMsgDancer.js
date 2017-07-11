var ErrorMsgDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, [top, left, timeBetweenSteps]); 
  this.$node = $('<img class="dancer" src="http://atom.smasher.org/error/xp.png.php?icon=Error&style=xp&title=Windows+can+not+even&url=&text=DANCE%21%21%21&b1=&b2=&b3=OK%22">');
  this.setPosition(top, left);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.oldStep = Dancer.prototype.step;
  this.$audio = $('#error');
  this.step();
};

ErrorMsgDancer.prototype = Object.create(Dancer.prototype);
ErrorMsgDancer.prototype.constructor = ErrorMsgDancer;

ErrorMsgDancer.prototype.step = function() {
  this.oldStep();
  this.$audio.get(0).currentTime = 0;
  this.$audio.get(0).play();
};
//rror message w/sound
