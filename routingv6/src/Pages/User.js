import {useParams} from 'react-router-dom'

function User() {
    const params = useParams();
  return (
    <div><h1>User {params.userId}</h1></div>
  )
}

export default User