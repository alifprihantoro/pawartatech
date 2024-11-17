import { build } from 'esbuild'
import { readFileSync, writeFileSync, watch } from 'fs'

const bundleFile = async () => {
  const getPkg = JSON.parse(readFileSync('./package.json'))

  const Opts = {
    entryPoints: ['src/loadmore/index.ts', 'src/gisqus.ts'],
    bundle: true,
    minify: true,
    outdir: 'dist',
    platform: 'node',
    format: 'esm',
    outExtension: { '.js': '.mjs' },
    external: [
      'vite',
      ...Object.keys(getPkg.dependencies || {}),
      ...Object.keys(getPkg.peerDependencies || {}),
    ],
  }

  await build(Opts)
  Opts.format = 'cjs'
  Opts.outExtension = { '.js': '.cjs' }
  await build(Opts)

  const replaceHtml = (PATH) => {
    const getResult = readFileSync(PATH, 'utf8')
    const result = getResult.replace(/html\`/gim, '`').replace(/[\n\r]/gim, '')
    writeFileSync(PATH, result)
  }

  replaceHtml('./dist/loadmore/index.mjs')
  replaceHtml('./dist/loadmore/index.cjs')
}

const isBuild = process.env.BUILD === 'true'
if (isBuild) {
  bundleFile()
  console.log('success build...')
} else {
  watch('./src', (_, filename) => {
    if (filename) {
      bundleFile()
    } else {
      console.log('filename tidak tersedia')
    }
  })

  console.log('Watching for file changes in ./src')
}
