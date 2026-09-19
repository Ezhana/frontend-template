import { defineConfig } from 'eslint/config'

import reactConfig from '@ezhana/eslint-config-react'

import reactRefresh from 'eslint-plugin-react-refresh'

export default defineConfig([...reactConfig, reactRefresh.configs.vite])
