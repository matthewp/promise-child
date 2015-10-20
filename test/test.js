var test = require("tape");
var spawn = require("child_process").spawn;
var promisify = require("../child");

test("basics works", function(t){
  t.plan(1);

  var child = spawn("echo", ["hello"]);
  promisify(child).then(function(code){
    t.equal(code, 0, "Correct result code");
  });
});

test("return stdout when asked to", function(t){
  t.plan(2);

  var child = spawn("echo", ["hello"]);
  promisify(child, { stdout: true}).then(function(result){
    t.equal(result.code, 0, "Correct code");
    t.equal(result.stdout, "hello\n", "Correct stdout result");
  });
});
