var test = require('tape');
var parse = require('../');

test('simple command', function(t) {
  t.is(parse('PING').command, 'PING');
  t.end();
});

test('prefix', function(t) {
  var msg = parse(':irc.example.com PING');
  t.is(msg.raw, ':irc.example.com PING');
  t.is(msg.prefix, 'irc.example.com');
  t.is(msg.command, 'PING');
  t.end();
});

test('params', function(t) {
  var msg = parse(':hitchcock.freenode.net NOTICE * :*** Looking up host...');
  t.is(msg.raw, ':hitchcock.freenode.net NOTICE * :*** Looking up host...');
  t.is(msg.prefix, 'hitchcock.freenode.net');
  t.is(msg.command, 'NOTICE');
  t.same(msg.params, ['*', '*** Looking up host...']);
  t.end();
});

test('nickname prefix', function(t) {
  var msg = parse(':frigg!~frigg@freenode/utility-bot PRIVMSG nick :VERSION');
  t.is(msg.prefix, 'frigg!~frigg@freenode/utility-bot');
  t.is(msg.command, 'PRIVMSG');
  t.same(msg.params, ['nick', 'VERSION']);
  t.end();
});
