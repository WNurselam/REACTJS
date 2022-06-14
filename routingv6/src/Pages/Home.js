import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
const navigate = useNavigate();

useEffect(() => {        
    setTimeout(() =>{     
        navigate("blog")   // 3 Saniye sonra blog sayfasına atar
    },3000)
}, [navigate])
  return (
    <div>
      <h1> 3 Saniye sonra blog sayfasına yönlendirileceksiniz...</h1>
    </div>
  );
}

export default Home;

