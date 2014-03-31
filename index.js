
module.exports = function(text) {

  // prefix
  if (text.charAt(0) === ':') {
    var i = text.indexOf(' ');
    var prefix = text.slice(1, i);
    text = text.slice(i + 1);
  }

  // command
  var i = text.indexOf(' ');
  if (i === -1) i = text.length;
  var command = text.slice(0, i);
  text = text.slice(i + 1);

  var params = [];

  // middle
  while (text && text.charAt(0) !== ':') {
    var i = text.indexOf(' ');
    if (i === -1) i = text.length;
    params.push(text.slice(0, i));
    text = text.slice(i + 1);
  }

  // trailing
  if (text) params.push(text.slice(1));

  return {
    prefix: prefix,
    command: command,
    params: params
  };
};
