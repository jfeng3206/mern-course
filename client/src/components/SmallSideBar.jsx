import Wrapper from '../assets/wrappers/SmallSidebar';
import NavLinks from './NavLinks';
import {FaTimes} from 'react-icons/fa';
import { useDashboardContext } from '../pages/DashboardLayout';
import Logo from './Logo';

const SmallSideBar = () => {
  const {showSidebar, toggleSidebar}=useDashboardContext();
  return (
  <Wrapper>
    <div className = {showSidebar?'sidebar-container show-sidebar': 'sidebar-container'}>
      <div className="content">
        <button type='buton' className='close-btn' onClick={toggleSidebar}>
          <FaTimes/>
        </button>
        <header>
          <Logo/>
        </header>
          <NavLinks/>
      </div>
    </div>
  </Wrapper>
  )
}

export default SmallSideBar