  /*
   * 传入时间戳，可显示刚刚，几分钟前，几天前（大于三天前则显示月日）
   */
  dateFormat: function dateFormat(timestamp, format) {
    if (!timestamp) {
      return;
    }

    if (typeof timestamp !== 'number') {
      try {
        timestamp = Number(timestamp);
      } catch (error) {
        throw Error('Expected to be a number.', error);
      }
    }

    function zeroize(num) {
      if (num && typeof num !== 'number') {
        return;
      }

      return num < 10 ? "0".concat(num) : num;
    }

    var date = new Date(timestamp);
    var format = format || 'YYYY年MM月DD日';
    var now = Number(new Date());
    var diff = now - timestamp;
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hours = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var _seconds = 1000;

    var _minute = 60 * _seconds;

    var _hours = 60 * _minute;

    var _day = 24 * _hours;

    var formatArray = ['YYYY', 'MM', 'DD', 'H', 'M', 'S'];
    var dateArray = [year, month, day, hours, minute];

    if (diff > _day * 3) {
      if (diff < _day * 366) {
        format = 'MM月DD日';
      }

      for (var i = 0; i < formatArray.length - 1; i++) {
        format = format.replace(formatArray[i], dateArray[i]);
      }

      return format;
    } else {
      if (parseInt(diff / _day, 10) >= 1 && parseInt(diff / _day, 10) < 3) {
        return "".concat(parseInt(diff / _day, 10), "\u5929\u524D");
      } else if (parseInt(diff / _hours, 10) >= 1) {
        return "".concat(parseInt(diff / _hours, 10), "\u5C0F\u65F6\u524D");
      } else if (parseInt(diff / _minute, 10) >= 1) {
        return "".concat(parseInt(diff / _minute, 10), "\u5206\u949F\u524D");
      } else {
        return '刚刚';
      }
    }
  };
  //防抖动函数
  debounce: function debounce(func, delay) {
    let timer = null
    return function(...args) {
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        func.apply(this, args)
      }, delay)
    }
  };

  module.exports = {
    dateFormat,
    debounce
  }