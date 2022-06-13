import React,{useEffect, useState} from 'react' 

import axios from 'axios'

function User() {

    const [users,setUsers] = useState([]);
    const [isLoading ,setIsLoading] = useState(true) // Veri çekme işlemi yapıldığında bir loading işlemi yapmak için
    //component açılır açılmaz yükleme işlemi başlayacağı içi true yapıyoruz

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users') // Veriyi aldığımız yer
       .then(res=> setUsers(res.data)) // Aldığımız verileri state'e atıyoruz.
       .catch((e) => console.log(e)) // Hataları görüntülemek için
       .finally(() => setIsLoading(false)) // Veri çekme işlemi başarılı ise loading'i göstermemesini istiyoruz.
         
    }, [])
  return (
    <div >
        <h1 >Users</h1>
        {
            isLoading && <div>Loading</div>  // loading işlemi true ise 
        }
        {
            users.map((user) => <div key={user.id}>{user.name}</div>) // Aldığımız veriyi burada listeliyoruz.
        }
    </div>
  )
}

export default User

/* 
json veri dosyasına erişmek için component'm mount edildiği anda veriye erişmek istiyoruz. 
component'in mount edildiği anda veriye erişmek içine "useEffect" i kullanıyoruz 

NOT : axios fetch işleminin farkı JSON parse işlemi yapmıyoruz.

*/