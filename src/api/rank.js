import axios from 'axios'
import {HOST} from 'common/js/config'

export function getTop (id) {
  const url = HOST + `/top/list?idx=${id}`//排行榜

  return axios.get(url)
}
