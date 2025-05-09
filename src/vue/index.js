import globals from 'globals'
import jsPlugin from '@eslint/js'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import vuePlugin from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'

export const vueConfig = {
  files: ['**/*.vue'],
  languageOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
    parser: vueParser,
    parserOptions: {
      parser: tsParser,
    },
    globals: {
      ...globals.es2021,
      ...globals.browser,
      ...globals.nodeBuiltin,
      computed: 'readonly',
      defineEmits: 'readonly',
      defineExpose: 'readonly',
      defineProps: 'readonly',
      onMounted: 'readonly',
      onUnmounted: 'readonly',
      reactive: 'readonly',
      ref: 'readonly',
      shallowReactive: 'readonly',
      shallowRef: 'readonly',
      toRef: 'readonly',
      toRefs: 'readonly',
      watch: 'readonly',
      watchEffect: 'readonly',
      $fetch: 'readonly',
    },
  },
  plugins: {
    vue: vuePlugin,
    '@typescript-eslint': tsPlugin,
  },
  rules: {
    ...jsPlugin.configs.recommended.rules,
    ...tsPlugin.configs.recommended.rules,
    ...vuePlugin.configs['flat/recommended'].rules,
    ...vuePlugin.configs['vue3-essential'].rules,
    ...vuePlugin.configs['vue3-strongly-recommended'].rules,
    ...vuePlugin.configs['vue3-recommended'].rules,
    'no-undef': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true },
    ],
    'vue/multi-word-component-names': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-self-closing': [
      'warn',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'any',
        },
      },
    ],
  },
}
