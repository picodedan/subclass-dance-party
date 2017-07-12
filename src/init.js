$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      Math.floor($("body").height() * Math.random()),
      Math.floor($("body").width() * Math.random()),
      2000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.groupButton').on('click', function(event) {
    //line up various elemnts on page
    //to be specified
    //get window size
    var top = '75%';
    var left = 10;
    var increment = $('body').width() / window.dancers.length;
    // loop through elements in window.dancers
    for (var i = 0; i < window.dancers.length; i++) {
      // move each to 75% of screen height and space evenly across the screen from left to right
      window.dancers[i].lineUp(top, left);
      left += increment;
    }
  });

  $(document).on('click', '.errorMessage', function(event) {
    window.dancers = [];
    this.remove();
  });

  function collisionTest(elem1, elem2) {
    var left1 = elem1.offset().left;
    var top1 = elem1.offset().top;
    var height1 = elem1.outerHeight(true);
    var width1 = elem1.outerWidth(true);
    var bottom1 = top1 + height1;
    var right1 = left1 + width1;
    var left2 = elem2.offset().left;
    var top2 = elem2.offset().top;
    var height2 = elem2.outerHeight(true);
    var width2 = elem2.outerWidth(true);
    var bottom2 = top2 + height2;
    var right2 = left2 + width2;

    if (bottom1 < top2 || top1 > bottom2 || right1 < left2 || left1 > right2) {
      return false;
    } else {
      return true;
    };

  }

  window.setInterval(function() {
    var dancing = window.dancers;
    //loop through window.dancers
    for (var i = 1; i < dancing.length; i++) {
      //if collision is detected
      if (collisionTest(dancing[i].$node, dancing[i-1].$node)) {
        var refNode = dancing[i].$node.offset();
        var top = refNode.top;
        var left = refNode.left;
        var dancer = new ErrorMsgDancer(top, left, 2000);
        window.dancers.push(dancer);
        //remove elements that collided
        dancing[i].$node.remove();
        dancing[i-1].$node.remove();
        window.dancers.splice(i-1, 2);
        //create errorMSg Dancer
        $('body').append(dancer.$node);
      }

    }
  }, 500);

});

