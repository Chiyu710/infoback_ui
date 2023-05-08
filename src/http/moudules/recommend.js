import axios from '../axios'

export const itemsShow = data => {
  return axios({
    url: 'recommend/itemsShow',
    method: 'post',
    data,
  })
}

export const userpicture = data => {
  return axios({
    url: '/recommend/userpicture',
    method: 'post',
    data,
  })
}


export const getUser = data => {
  return axios({
    url: 'recommend/user/get-user',
    method: 'post',
    data,
  })
}



  export const getFeedbackByUserId = data => {

    return axios({
      url: 'recommend/feedback/get-feedback',
      method: 'post',
      data,
    })
  }

  export const sendFeedBack = data => {

    return axios({
      url: 'recommend/feedback/send-feedback',
      method: 'post',
      data,
    })
  }


  export const getItem = data => {

    return axios({
      url: 'recommend/items/get-item',
      method: 'post',
      data,
    })
  }

  export const getNeighbors = data => {

    return axios({
      url: 'recommend/items/get-neighbors',
      method: 'post',
      data,
    })
  }



