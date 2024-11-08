import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming'

addons.setConfig({
  theme: create({
    base: 'dark',
    brandTitle: 'Pawarta Tech',
    brandUrl: '/',
    brandImage: '/favicon/favicon-32x32.png',
    brandTarget: '_self',
  }),
})
