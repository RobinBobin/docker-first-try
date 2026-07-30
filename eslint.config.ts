import { defineConfig, includeIgnoreFile } from 'eslint/config'
import { fileURLToPath } from 'node:url'

import { general } from './eslint/index.js'

const gitignore = fileURLToPath(new URL('.gitignore', import.meta.url))

export default defineConfig(includeIgnoreFile(gitignore), general)
