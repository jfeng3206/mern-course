import { Form, redirect, Link } from 'react-router-dom';
import customFetch from '../utils/customFetch.js';
import {Logo, FormRow, SubmitBtn} from "../components";
import Wrapper from '../assets/wrappers/RegisterAndLoginPage.js';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post('/auth/register', data);
    return redirect('/login');
  } catch (error) {
    return error;
  }
};
const Register = () => {
  return <Wrapper>
    <Form method='post' className='form'>
      <Logo/>
      <h4>Register</h4>
      <FormRow type="text" name="name"   />
      <FormRow type="text" name="lastName"  labelText="last name"   />
      <FormRow type="email" name="email"   />
      <FormRow type="password" name="password"    />
      <SubmitBtn/>
      <p>
      Already have an account? <Link to ="/login">Login</Link>
    </p>
    </Form>
    
  </Wrapper>
  
  
}

export default Register