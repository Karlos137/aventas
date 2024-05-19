import type { StorybookConfig } from '@storybook/nextjs'
import path from 'path'

const config: StorybookConfig = {
  stories: ['../components/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public', { from: '../public', to: 'public' }],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  async webpackFinal(config) {
    if (config?.resolve?.alias) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@/components': path.resolve(__dirname, '../components'),
        '@/app': path.resolve(__dirname, '../app'),
      }
    }
    return config
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
}
export default config
