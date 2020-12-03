'use strict'

const got = require('got')

module.exports = function (day) {
  return got(`https://adventofcode.com/2020/day/${day}/input`, {
    method: 'GET',
    headers: {
      cookie: `session=${process.env.AOC_SESSION}`
    }
  }).text()
}
