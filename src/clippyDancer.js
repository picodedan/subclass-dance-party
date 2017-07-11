var '' = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.oldStep = Dancer.prototype.step;
  this.oldStep();
};

''.prototype = Object.create(Dancer.prototype);
''newDancer''.prototype.constructor = ;

//clippy dancer