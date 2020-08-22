import TokenService from './token-service'
import config from '../config'

const PostApiService = {
  getDrinks() {
    return fetch(`${config.API_ENDPOINT}/drinks`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },


  searchDrink(search_drink) {
    return fetch(`${config.API_ENDPOINT}/drinks/search/${search_drink}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
 /*     body: JSON.stringify({
        search_drink
      }),*/
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  deletePost(post_id) {
    return fetch(`${config.API_ENDPOINT}/drinks/${post_id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      mode: 'cors'
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => Promise.reject(error))
        }
        return res.json()
      })
      .catch(error => {
        console.error(error)
      })
  }
}

export default PostApiService