'use strict'

const getInput = require('./input')

const opts = process.argv.slice(2)

;(async function (day) {
  const input = (await getInput(day)).split('\n')
  const result = await require(`./days/${opts[0] > 10 ? opts[0] : '0' + opts[0]}`)(input)
  result.forEach((r, i) => console.log(`Part ${i + 1}: ${r}`))
})(opts[0])
