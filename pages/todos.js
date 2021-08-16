import { server } from '../config'


export async function getStaticProps() {
  const res = await fetch(`${ server }/todos`)
  const todos = await res.json()

  if (!todos) {
    return {
      notFound: true,
    }
  }

  return {
    props: { todos }, 
  }
}


const Todos = ({todos}) => {
  return (
    <ul>
      <h3>This is the next/router todos page.</h3>
      {todos.map((todo) => (
        <li>{todo.title}</li>
      ))}

    </ul>
  )
}

export default Todos
