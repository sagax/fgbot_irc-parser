### IRC Parser

    > var parse = require('irc-parser');
    > console.log(parse(':irc.example.com 001 nick :Welcome!'));
    { prefix: 'irc.example.com',
      command: '001',
      params: ['nick', 'Welcome!'] }
