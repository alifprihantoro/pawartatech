import '../dev.css'
import { withThemeByDataAttribute } from '@storybook/addon-themes'
import { DocsPage } from '@storybook/addon-docs/blocks';

/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    docs: {
      page: (props) => (
        <div style={{ border: '5px solid red' }}>
          <DocsPage {...props} />
        </div>
      ),
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
    attributeName: 'data-theme',
  }),
]

export default preview
