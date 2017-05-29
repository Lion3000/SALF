const TIME_TO_WAIT = 42; //1s / 24images/s * 1000 = 41,666666667ms durée d'une image
const TIME_TO_WAIT_BUTTON = 500;

Date.prototype.yyyymmdd = function() {
  var mm = this.getMonth() + 1; // getMonth() is zero-based
  var dd = this.getDate();

  return [this.getFullYear(),'-',
          (mm>9 ? '' : '0') + mm,'-',
          (dd>9 ? '' : '0') + dd
         ].join('');
};
