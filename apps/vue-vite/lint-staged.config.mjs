import { defineConfig } from 'lint-staged/config'

export default defineConfig({
  '*.{js,mjs,cjs,ts,mts,cts,vue}': ['prettier --write', 'eslint --fix'],

  '*.{json,json5,yml,yaml,md,mdx,css,scss,html}': ['prettier --write'],
})
