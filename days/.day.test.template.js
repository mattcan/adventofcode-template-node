'use strict'

const { test } = require('tap')
const day = require('./01') // TODO replace with day to test

test('part 1', ({ test: t, end }) => {
  const part = 0

  t('should return 0 when no result', async ({ is }) => {
    const result = await day([])
    is(result[part], 0)
  })

  end()
})

test('part 2', ({ test: t, end }) => {
  const part = 1

  t('should return 0', async ({ is }) => {
    const result = await day([])
    is(result[part], 0)
  })

  end()
})
