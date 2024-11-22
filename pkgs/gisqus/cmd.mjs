import { build } from 'esbuild'
import { readFileSync, watch } from 'fs'
import esbuildConf from 'configs/esbuild.conf.mjs'

const bundleFile = async () => {
  const getPkg = JSON.parse(readFileSync('./package.json'))
  await build(
    esbuildConf(getPkg, {
      entryPoints: ['src/index.ts'],
    }),
  )
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