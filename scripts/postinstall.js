const fse = require('fs-extra')
const path = require('path')
const packageJson = require('../package.json')

const packageJsonPath = path.join(__dirname, '../package.json')

async function switchVersion() {
  const vue = null
  try {
      vue =  require('vue')
  } catch(e) {
      console.log(`[vue-demi-component-template] not current Vue version, please use Vue2/3`)
      return
  }
  const { version } = vue

  if(typeof version !== 'string' || !(version.startsWith('2.') || version.startsWith('3.'))) {
    console.log(`[vue-demi-component-template] not current Vue version, please use Vue2/3`)
    return
  }

  const isVue2 = version.startsWith('2.')
  const isVue27 = version.startsWith('2.7.')

  const distDir = `dist/${isVue2 ? isVue27 ? 'v2.7' : 'v2' : 'v3'}`

  const exportJson = {
    main: `${distDir}/index.umd.js`,
    module: `${distDir}/index.es.js`,
    style: `${distDir}/style.css`,
    exports: {
      '.': {
        import: `./${distDir}/index.es.js`,
        require: `./${distDir}/index.cjs.js`,
      }
    }
  }

  const newPackageJson = Object.assign(packageJson, exportJson)

  fse.writeJsonSync(packageJsonPath, newPackageJson, { spaces: '\t' })

  console.log(`[vue-demi-component-template] Switch packageJson fields for Vue${version}`)
}

async function main() {
  await switchVersion()
}

main().catch(e => {
  console.log(e)
})
