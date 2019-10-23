import axios from 'axios'
import {HOST} from 'common/js/config'

export function getSong (id) {
  const url = HOST + `/song/url?id=${id}`//获取音乐url

  return axios.get(url)
}

export function getLyric (id) {
  const url = HOST + `/lyric?id=${id}` //获取歌词

  return axios.get(url)
}
