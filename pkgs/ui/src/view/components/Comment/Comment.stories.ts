import comment from './'
import Scripts from '../../../../node_modules/myscripts/dist/gisqus.js?raw'

export default {
  render: () => {
    return comment(Scripts)
  },
}
export const Comment = {}
