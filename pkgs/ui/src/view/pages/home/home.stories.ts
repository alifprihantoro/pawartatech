import Layouts from '../../layouts'
import home from './'

export default {
  title: 'Pages/Home',
  render: () => {
    return Layouts(
      home({
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
export const Home = {}
