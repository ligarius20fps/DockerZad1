const keys = require('./keys');
const redis = require('redis');

const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000,
});
const sub = redisClient.duplicate();

function fib(index) {
  if(index<=0) return 0;
  if(index==1) return 1;
  var a;
  var a_1 = 1;
  var a_2 = 0;
  for(var i = 1;i<index;i++)
  {
    a = a_1 + a_2;
    a_2 = a_1;
    a_1 = a;
  }
  return a;
}

sub.on('message', (channel, message) => {
  redisClient.hset('values', message, fib(parseInt(message)));
});
sub.subscribe('insert');
