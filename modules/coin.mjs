/** Coin flip functions 
 * This module will emulate a coin flip given various conditions as parameters as defined below
 */

/** Simple coin flip
 * 
 * Write a function that accepts no parameters but returns either heads or tails at random.
 * 
 * @param {*}
 * @returns {string} 
 * 
 * example: coinFlip()
 * returns: heads
 * 
 */

function coinFlip() {
  return Math.random() > 0.5 ? ("heads") : ("tails")
}

/** Multiple coin flips
 * 
 * Write a function that accepts one parameter (number of flips) and returns an array of 
 * resulting "heads" or "tails".
 * 
 * @param {number} flips 
 * @returns {string[]} results
 * 
 * example: coinFlips(10)
 * returns:
 *  [
      'heads', 'heads',
      'heads', 'tails',
      'heads', 'tails',
      'tails', 'heads',
      'tails', 'heads'
    ]
 */

function coinFlips(flips) {
  const arr = []
  for(let i = 1; i <= flips; i++) {
    arr.push(Math.random() > 0.5 ? ("heads") : ("tails"))
  }
  return arr
}
/** Count multiple flips
 * 
 * Write a function that accepts an array consisting of "heads" or "tails" 
 * (e.g. the results of your `coinFlips()` function) and counts each, returning 
 * an object containing the number of each.
 * 
 * example: conutFlips(['heads', 'heads','heads', 'tails','heads', 'tails','tails', 'heads','tails', 'heads'])
 * { tails: 5, heads: 5 }
 * 
 * @param {string[]} array 
 * @returns {{ heads: number, tails: number }}
 */

function countFlips(array) {
  const Tab = {tails: 0, heads: 0}
  for(let i = 0; i < array.length; i++) {
    if(array[i] == "heads"){
      Tab.heads = Tab.heads + 1
    } else {
      Tab.tails = Tab.tails + 1
    }
  }
  if(Tab.heads == 0){
    delete Tab.heads
  } if(Tab.tails ==0){
    delete Tab.tails
  }
  return(Tab)
}

/** Flip a coin!
 * 
 * Write a function that accepts one input parameter: a string either "heads" or "tails", flips a coin, and then records "win" or "lose". 
 * 
 * @param {string} call 
 * @returns {object} with keys that are the input param (heads or tails), a flip (heads or tails), and the result (win or lose). See below example.
 * 
 * example: flipACoin('tails')
 * returns: { call: 'tails', flip: 'heads', result: 'lose' }
 */

function flipACoin(call) {
  const Tab = {call: "", flip: "", result: ""}
  Tab.call = call
  Tab.flip = Math.random() > 0.5 ? ("heads") : ("tails")
  if(Tab.call == Tab.flip){
    Tab.result = "win"
  } else {
    Tab.result = "lose"
  }
  return Tab
}


/** Export 
 * 
 * Export all of your named functions
*/
export {coinFlip, coinFlips, countFlips, flipACoin};


