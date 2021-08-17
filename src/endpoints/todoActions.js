import { server } from '../../config'

const headers = () => {
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
}

export const getTodos = () => {
  return fetch(`${ server }/todos`)
  .then(res => res.json())
}

export const postTodo = (todo) => {
  const request = {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({ todo })
  }
  return fetch(`${ server }/todos`, request)
  .then(res => res.json())
}
