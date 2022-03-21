const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if(date === undefined){
    return 'Unable to determine the time of year!';
  }

  if(Number.isNaN(Date.parse(date))){
    throw new Error ('Invalid date!');
  }

  if(Object.getOwnPropertyNames(date).length != 0) {
    throw new Error ('Invalid date!');
  }

  const seasons = {
    11: 'winter',
    0: 'winter',
    1: 'winter',
    2: 'spring',
    3: 'spring',
    4: 'spring',
    5: 'summer',
    6: 'summer',
    7: 'summer',
    8: 'autumn',
    9: 'autumn',
    10: 'autumn'
  }

  return seasons[date.getMonth()];

}

module.exports = {
  getSeason
};
