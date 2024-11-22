export default function (pkg = {}, opts = {}) {
  return {
    bundle: true,
    minify: true,
    outdir: 'dist',
    platform: 'node',
    format: 'esm',
    external: [
      'vite',
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {}),
    ],
    ...opts,
  }
}
