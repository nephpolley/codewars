// A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.

// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

// His mother looks out of a window 1.5 meters from the ground.

// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing)?

// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

// Note:
// The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

// Kata link: https://www.codewars.com/kata/5544c7a5cb454edb3c000047


function bouncingBall(h,  bounce,  window) {
    if ((h > 0) && (0 < bounce && bounce < 1) && (window < h)) {
      // Initial fall
      let ballSeenCount = 1
      
      // Bounce the ball until its next height is below the window
      while (h > window) {
        
        // Next height
        h *= bounce
        
        // Is it still above the window?
        if (h > window) {
          // Add 2 to seen count - one for going up, one for down
          ballSeenCount += 2
        }
        
      }
      
      return ballSeenCount
      
    } else {
      return -1
    }
  }