import { Link, Form, redirect,useNavigate } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow, Logo, SubmitBtn } from '../components';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';
import { useActionData } from 'react-router-dom';

export const action = async ({ request }) => {
   const formData = await request.formData();
   const data = Object.fromEntries(formData);
   const errors = { msg: '' };
   if (data.password.length < 3) {
      errors.msg = 'password too short';
      return errors;
      }
   try {
     await customFetch.post('/auth/login', data);
     return redirect('/dashboard');
   } catch (error) {
      errors.msg = error?.response?.data?.msg ;
     return errors;
   }
 };
const Login = () => {
   const navigate = useNavigate();
   const errors = useActionData();
  const loginDemoUser = async () => {
    const data = {
      email: 'test@test.com',
      password: 'secret123',
    };
    try {
      await customFetch.post('/auth/login', data);
      // toast.success('take a test drive');
      navigate('/dashboard');
    } catch (error) {
      return error;
    }
  };
   
   return (
      <Wrapper>
          <Form method='post' className='form'>
         <Logo/>
         <h4>Login</h4>
         {errors && <p style={{ color: 'red' }}>{errors.msg}</p>}
         <FormRow type="email" name="email"   />
         <FormRow type="password" name="password"    />
         <SubmitBtn />
         <button type='button' className='btn btn-block' onClick={loginDemoUser}>
          explore the app
        </button>
         <p>
               Not a member yet? <Link to ="/register">Register</Link>
         </p>
         </Form>
         
      </Wrapper>
      
   )
      
   
}

export default Login