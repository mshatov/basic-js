const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if(typeof(sampleActivity) != 'string') return false;

  const activity = parseFloat(sampleActivity);
  const k = 120968094e-12; //0.00012096809433855938
 
  if(typeof(activity) != 'number'
     || Number.isNaN(activity)
     || activity <= 0
     || activity > 15) {
       return false;
     }
  
  const t = Math.log(MODERN_ACTIVITY / activity) / k;

  return Math.ceil(t);
}

module.exports = {
  dateSample
};
