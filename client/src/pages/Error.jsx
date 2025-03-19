import {Link, useRouteError} from 'react-router-dom'
import Wrapper from '../assets/wrappers/ErrorPage.js';
import img from '../assets/images/not-found.svg';

const Error = () => {
  const error = useRouteError();
  if(error.status === 404) {
    return <Wrapper>
      <div>
      <img src={img} alt='error_img' className='img' />
      <h3>Page not found</h3>
      <p>The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link to ="/dashboard" >back home</Link>
      </div>
    </Wrapper>
  }
}

export default Error