import Layouts from '../../layouts'
import Home from './'

export default {
  render: () => {
    return Layouts(
      Home({
        CardArgs: {
          title: 'Lorem ipsum dolor sit amet.',
          img: 'https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp',
          spoiler:
            'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet...',
        },
        ListTagsArgs:
          'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet...',
      }),
    )
  },
}
export const home = {}
