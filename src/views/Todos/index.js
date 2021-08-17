import {
  useQuery,
} from 'react-query'

import { getTodos, postTodo } from '../../endpoints/todoActions'


const Todos = () => {

  const { isLoading, error, data, isFetching } = useQuery('todos', getTodos)
  console.log(data)
  
  return (
    <div>
    <ul>
        { data ? 
        data.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))
        :
        null}
      </ul>
      <div>{isFetching ? "Updating..." : ""}</div>
      <div>{isLoading ? "Loading..." : ""}</div>
      <div>{error ? "An error has occurred: " + error : ""}</div>
    </div>
  )
}

export default Todos
