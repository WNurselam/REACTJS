import "./App.css";
import Header from "./components/Header";
import { useState,useMemo } from "react"; // useMemo hook'u non-primitive tiplerini render etmesini engelliyoruz.

function App() {
  const [number, setNumber] = useState(0);
  const [text,setText] = useState("");

  const data = useMemo(()=>{
    
    return calculateObject(number);  // İnput erişimine engel olmaması için.
            
  },[number]) // Sayı değeri arttığında hesaplama yapsın istiyoruz

  

  return (
    <div className="App">
      <Header number={number < 5 ? 0 : number} data={data} />
      <hr />

      <h1>{number}</h1>
      <button onClick={(()=>setNumber(number+1))}>Tıkla</button>
      <br /><br />

      <input value={text} onChange={({target})=> setText(target.value)} />
    </div>
  );
}

  function  calculateObject(number){        // Bize bir obje dönsün
    console.log("Calculating...");
    for(let i=0; i<100000000; i++){}
    console.log("Calculated");

    return {name:"Mehmet",number};
  }

export default App;

/*
Primitive (ilkel) veri türlerinde 2 veriyi değerlerine göre karşılaştırmak kolaydır.
5===5             //true
false === false  //true
a === a         //true   

non-primitive (ilkel olmayan) veri türleri değerleri değil referansları karşılaştırılır.
{} === {}   //false
[] === []   //false

Primitive tipler belleğin stack kısmında, referans tipler ise heap kısmında saklanır 

*/ 
