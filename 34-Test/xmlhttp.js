var ajax = (function () {
  var xhr = null;

  // 创建对象
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject('Microsoft.XMLHTTP');
  }

  return function (options) {
    var params = formsParams(options.data);

    // 连接
    if (options.type === 'GET') {
      xhr.open(options.type, options.url + '?' + params, options.async);
      xhr.send(null);
    } else if (options.type === 'POST') {
      xhr.open(options.type, options.url, options.async);
      xhr.sendRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.send(params);
    }

    xhr.onreadystatechange = function () {
      if (xhr.readystate === 4 && xhr.status === 200) {
        options.success(xhr.responseText);
      }
    }

    function formsParams (data) {
      var arr = [];

      for (var key in data) {
        if (data.hasOwnProperty(key)) {
          arr.push(`key=${data[key]}`);
        }
      }

      return arr.join('&');
    }
  }
})();

// 测试用例
ajax({
  url: 'a.php',
  type: 'POST',
  async: true,
  data: {
    name: 'liu',
    age: 18
  },
  success: function (data) {
    console.log(data);
  }
})