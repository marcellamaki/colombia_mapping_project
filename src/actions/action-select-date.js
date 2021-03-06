import axios from 'axios';
/**
 * selectDate - Specifies the style for the geojson
 *
 * @param  {String} date description
 * @return {object} dispatch
 */
export const selectDate = function(date) {
  return function(dispatch) {
    console.log('You selected', yearMonthDay(date));
    console.log('http://localhost:8000/api/v1/mobility/sources/acme/series/santiblanko/countries/col/' +
    yearMonthDay(date) +
    '.csv')
    axios.get('http://localhost:8000/api/v1/mobility/sources/acme/series/santiblanko/countries/col/' +
    yearMonthDay(date) +
    '.csv')
      .catch(err => {
        alert('There was an error trying to do the initial fetch')
      })
      .then(res => {
        console.log(res.data)
        dispatch({
          type: 'DATE_SELECTED',
          payload: date
        })
      })
  }
}

/**
 * selectDate - Specifies the style for the geojson
 *
 * @param  {String} date description
 * @return {String} year-month-day
 */
function yearMonthDay(date) {
  let year = new Date(date).getUTCFullYear();
  let month = new Date(date).getUTCMonth() + 1;
  let day = new Date(date).getUTCDay()+ 1;

  return year + '-' +
  prepend_zero(month) + '-' +
  prepend_zero(day);
}

function prepend_zero(number) {
  if (number.toString().length == 1) {
    number = '0' + number;
  }
  return number
}
