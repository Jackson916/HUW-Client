import apiUrl from '../apiConfig'
import axios from 'axios'

export const createList = (data, user) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/list/',
    data: {
      list: {
        item: data.item,
        description: data.description
      }
    },
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const updateList = (data, id, user) => {
  return axios({
    url: apiUrl + '/list/' + id,
    method: 'PATCH',
    data: {
      list: {
        item: data.item,
        description: data.description
      }
    },
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const showList = (id, user) => {
  return axios({
    url: apiUrl + '/list/' + id,
    method: 'GET',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const deleteList = (id, user) => {
  return axios({
    url: apiUrl + '/list/' + id,
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
export const indexList = (user) => {
  return axios({
    url: apiUrl + '/list-index/',
    method: 'GET',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
