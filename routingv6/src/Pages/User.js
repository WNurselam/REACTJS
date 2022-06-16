import { useParams } from "react-router-dom"; // params hook'unu kullanarak parametreleri alıyoruz.
import { useEffect, useState } from "react";
import axios from "axios";

function User() {
  const [user, setUser] = useState({}); // User Datil aliyoruz
  const params = useParams();

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${user.id} `).then(
      (res) => setUser(res.data)
    );
  }, []);

  return (
    <div>
      <h1>User {params.userId}</h1>
      <div>{JSON.stringify(user)}</div>
    </div> //App.js'de biz bu paramatereyi atıyoruz.
  );
}

export default User;
