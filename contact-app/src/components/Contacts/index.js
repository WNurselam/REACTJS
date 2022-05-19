import {useState,useEffect} from 'react'
import "./style.css"
import List from './List'
import Form from './Form'

 function Contact() {
    const [contacts, setContacts] = useState([    //Kayıtların eklenceği state

      {
          fullName:'Nurselam',
          number:'056465'
      },
      {
      fullName:'Azat',
      number:'056465'
      }

    ]) 

    useEffect(()=>{
        console.log(contacts);

    },[contacts])
    return (
        <div id='container'>
            <h1>Contacts</h1>
            <List contacts={contacts}/>
            <Form addContact = {setContacts} contacts={contacts}/>
        </div>
    )
}
export default Contact

/*
Kullanıcıların ekleneceği state bu Contact componentinde tutup set 
işlemi yapacak olan fonksiyonu form componentine geçeceğiz
*/
