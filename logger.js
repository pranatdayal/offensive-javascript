(function(){

// server side logging utility that sends console.log to a remote server

// define console if not already defined
console || (console = {});

// new toFile method
console.toFile = function(log) {
  // variable declarations
  var http, url, params;

  // might as well use the traditional console.log() as well
  console.log(log);

  // ajax request
  http = new XMLHttpRequest();
  url = "//example.com/log.php";
  params = "log=" + Date.now() + ' ' + escape(sanitize(log));
  http.open("POST", url, true);
  http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  http.send(params);
}

// do something special if txt is an object
var sanitize = function(txt) {
  var output, x;

  if(typeof txt == 'object') {
    // create a new object to get around circular references
    output = {};
    for(x in txt) {
        // type conversion of each element to a string
        output[x] = txt[x] + '';
    }
    output = JSON.stringify(output, null, 2);
  } else {
    output = txt;
  }

  return output;
}

})();
