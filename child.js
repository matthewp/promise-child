module.exports = promiseChild;

function promiseChild(child, opts){
  opts = opts || {};
  var includeResult = opts.stdout || opts.stderr;

  var result = {};

  if(opts.stdout) {
    appendData(child.stdout, result, "stdout");
  }
  if(opts.stderr) {
    appendData(child.stderr, result, "stderr");
  }

  return new Promise(function(resolve, reject){
    child.on("exit", function(code){
      result.code = code;
      if(code) {
        reject(includeResult ? result : code);
      } else {
        resolve(includeResult ? result : code);
      }
    });
  });
}

function appendData(stream, result, prop){
  result[prop] = "";
  stream.on("data", function(d){
    result[prop] += d;
  });
}
