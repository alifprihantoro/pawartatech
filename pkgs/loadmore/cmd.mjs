import { build } from 'esbuild'
import { readFileSync, writeFileSync, watch } from 'fs'
import esbuildConf from 'configs/esbuild.conf.mjs'

const bundleFile = async () => {
  const getPkg = JSON.parse(readFileSync('./package.json'))
  await build(
    esbuildConf(getPkg, {
      entryPoints: ['src/index.ts'],
    }),
  )
  const replaceHtml = (PATH) => {
    const getResult = readFileSync(PATH, 'utf8')
    const result = getResult.replace(/html\`/gim, '`').replace(/[\n\r]/gim, '')
    writeFileSync(PATH, result)
  }

  replaceHtml('./dist/index.js')
}

const isBuild = process.env.BUILD === 'true'
if (isBuild) {
  bundleFile()
  console.log('success build...')
} else {
  bundleFile()
  watch('./src', (_, filename) => {
    if (filename) {
      bundleFile()
    } else {
      console.log('filename tidak tersedia')
    }
  })

  console.log('Watching for file changes in ./src')
}