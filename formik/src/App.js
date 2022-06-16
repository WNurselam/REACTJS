import "./App.css";
import { useFormik } from "formik";

function App() {
  const {handleSubmit,handleChange,values} = useFormik({
    initialValues: {
        // Bizim statemiz gibi
        firstName: "",
        lastName: "",
        email: "",
        gender:"",
        hobbies:[],
        country:"Turkey"  // Turkey seçili gelsin
    },
    onSubmit: values => {
      console.log(values);
    },
  });
  return (
    <div className="App">
      <h1>Sign Up</h1>
    
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input name="firstName" onChange={handleChange} placeholder="Jane" />
    
            <br /> <br />

            <label htmlFor="lastName">Last Name</label>
            <input name="lastName" onChange={handleChange} placeholder="Doe" />

            <br /> <br />
             
            <label htmlFor="email">Email</label>
            <input name="email" onChange={handleChange} placeholder="jane@acme.com" type="email" />

            <br /> <br />

            <label>Male</label>
            <input
             type="radio"
             onChange={handleChange}
             name="gender"
             value="male"
              />

            <label>female</label>
            <input 
            type="radio" 
            name="gender" 
            onChange={handleChange} 
            value="female"
            />

           <br /> <br />

           <label>Hobiler</label><br />
           <label >Football</label> 
           <input
           type="checkbox" 
           name="hobbies" 
           value="Football" 
           onChange={handleChange}
           /><br />

           <label>Table Tennis</label>
           <input 
           type="checkbox" 
           name="hobbies"
           value="Table Tennis"
           onChange={handleChange}
           />
           <br />
           
            <label>Swiming</label>
          <input 
           type="checkbox" 
           name="hobbies"
           value="Swiming"
           onChange={handleChange}
           />

           <br />

           <select name="country" value={values.country} onChange={handleChange}>
            <option value="turkey">Turkey</option>
            <option value="usa">USA</option>
            <option value="england">England</option>
           </select>

           
       
            <br /><br />
            <button type="submit">Submit</button>
            <br /><br />

            <code>{JSON.stringify(values)}</code>
          </form>  
    </div>
  );
}

export default App;
