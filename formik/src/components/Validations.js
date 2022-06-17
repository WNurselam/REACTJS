import { object, string } from 'yup';
import * as yup from 'yup';

const Validations = object({  // Formik 'de verdiğimiz keyleri alıyor
    email: string().email().required(),
    password:string().min(5).required(),  
    passwordConfirm:yup.string().oneOf([yup.ref('password')]).required(), // passwordConfirm ile eşleşmesi için
  });

  export default Validations;