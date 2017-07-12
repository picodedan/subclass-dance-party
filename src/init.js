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
    this.remove();
  });
});

