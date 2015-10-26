var http = require('http');


var options = {
  host: 'www.gogle.co.in',
  path: '/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8',
  status:'GET'
};

callback = function(response) {
  var str = '';

  response.on('data', function (chunk) {
    str += chunk;
  });

  response.on('end', function () {
    console.log(str);
  });
}

http.request(options, callback).end();