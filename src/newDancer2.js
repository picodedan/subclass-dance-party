var '' = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, [top, left, timeBetweenSteps]); 
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.oldStep = Dancer.prototype.step;
  this.step();
};

''.prototype = Object.create(Dancer.prototype);
''.prototype.constructor = '';
