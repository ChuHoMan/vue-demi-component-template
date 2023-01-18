import fs from 'fs'
import path from 'path'

const dir = path.resolve(__dirname, '..', 'utils')

function copy(version: number, name: string) {
  const src = path.join(dir, `v${version}`, name)
  const dest = path.join(dir, name)

  const content = fs.readFileSync(src, 'utf-8')

  try {
    fs.unlinkSync(dest)
  } catch (e) {}
  fs.writeFileSync(dest, content, 'utf-8')
}

function switchTestVersion(version: number) {
  console.log(`[switchVueTestUtils] 正在切换 test 环境至 Vue ${version}...`)
  copy(version, 'vueTestUtils.ts')
  console.log(`[switchVueTestUtils] 切换至 Vue ${version} 成功!!!`)
}

const version = process.argv[2]

if (version === '2') {
  switchTestVersion(2)
} else if (version === '3') {
  switchTestVersion(3)
} else {
  console.warn(
    `[switchVueTestUtils] expecting version "2" or "3" but got "${version}"`
  )
  process.exit(1)
}
