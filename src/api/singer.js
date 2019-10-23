import axios from 'axios'
import {HOST} from 'common/js/config'

export function getSingers () {
  const url = HOST + '/top/artists?limit=100' //热门歌手

  return axios.get(url)
}

export function getSingerDetail (singerId) {
  const url = HOST + `/artists?id=${singerId}` //歌手单曲

  return axios.get(url)
}

export function getMusic (musicId) {
  const url = HOST + `/song/url?id=${musicId}`
  return axios.get(url)
}
