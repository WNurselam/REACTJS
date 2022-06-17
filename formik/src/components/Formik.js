import "../App.css";
import { useFormik } from "formik";
import validationSchema from "./Validations";

function Formik() {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema,
  });
  return (
    <div className="App">
      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email : </label>
        <input
          name="email"
          onChange={handleChange}
          placeholder="jane@acme.com"
          type="email"
          value={values.email}
        />
        <br />
        <br />

        <label htmlFor="password">Password : </label>
        <input name="password" onChange={handleChange} type="password" value={values.password} />
        <br />
        <br />

        <label htmlFor="passwordConfirm">Password Confirm : </label>
        <input name="passwordConfirm" onChange={handleChange} type="password" value={values.passwordConfirm} />
        <br />
        <br />

        <button type="submit">Submit</button>
        <br /><br />
        <code>{JSON.stringify(values)}</code>
      </form>
    </div>
  );
}

export default Formik;
