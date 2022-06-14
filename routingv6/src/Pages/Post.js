import {useParams} from 'react-router-dom'

function Post() {
    const params = useParams();
  return (
    <div>
        <h1>Post {params.postId}</h1> {/*postId buradan aldık */}
    </div>
  )
}

export default Post