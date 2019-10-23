import axios from 'axios'
import {HOST} from 'common/js/config'

export function getSearchSinger (name) {
  const url = HOST + `/search?keywords=${name}&type=100` //搜索歌手

  return axios.get(url)
}

export function getSearchSongs (name, page) {
  const url = HOST + `/search?keywords=${name}&offset=${page}`

  return axios.get(url)
}

export function getSearchSuggest (name) {
  const url = HOST + `/search/suggest?keywords=${name}` //搜索建议

  return axios.get(url)
}

export function getSongDetail (id) {
  const url = HOST + `/song/detail?ids=${id}`//歌曲详情

  return axios.get(url)
}

export function getSearchHot (id) {
  const url = HOST + `/search/hot`//热搜列表

  return axios.get(url)
}
