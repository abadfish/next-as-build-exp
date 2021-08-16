import { server } from '../../../config'


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
      {todos.map((todo) => (
        <li>{todo.title}</li>
      ))}
    </ul>
  )
}

export default Todos
