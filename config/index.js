const config = {}

config.redisStore = {
  url: 'redis://localhost:6379',
  secret: 'ray'
}

console.log(config)

module.exports = config
