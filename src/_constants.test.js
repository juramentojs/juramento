import { UNSUBSCRIBE } from './_constants.js'
import tape from 'tape'

tape('check-unsubscribe-is-symbol', (t) => {
  t.plan(1)
  t.assert(typeof UNSUBSCRIBE === 'symbol')
  t.end()
})
