import axios from '../axios'



export const summary = data => {

  return axios({
    url: '/article/summary',
    method: 'post',
    data,
  })

}

export const finarticle = data => {

  return axios({
    url: '/article/finarticle',
    method: 'post',
    data,
  })

}

export const getArticle = data => {

  return axios({
    url: '/article/getArticle',
    method: 'post',
    data,
  })

}
