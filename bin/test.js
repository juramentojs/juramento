import glob from 'glob'
import path from 'path'

glob('src' + '/**/*', (err, /** @type {string[]} */ res) => {
  if (err) {
    console.log('Error', err)
  } else {
    res
      .filter((x) => x.endsWith('.test.js'))
      .forEach(async (x) => {
        const { pathname: root } = new URL(`../${x}`, import.meta.url)
        await import(root)
      })
  }
})
