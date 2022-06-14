import {useParams} from 'react-router-dom' // params'ı import etme

function Post() {
    const params = useParams();  // postId 'den gönderdiğimiz id yi params ile aldık
  return (
    <div>
       <h1>Posts</h1>
        <h2>Post {params.postId}</h2> {/*postId buradan aldık */}
    </div>
  )
}

export default Post