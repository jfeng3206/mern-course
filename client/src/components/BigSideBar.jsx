import Wrapper from '../assets/wrappers/BigSidebar';
import NavLinks from './NavLinks';
import {FaTimes} from 'react-icons/fa';
import { useDashboardContext } from '../pages/DashboardLayout';
import Logo from './Logo';


const BigSideBar = () => {
  const {showSidebar} = useDashboardContext();

  return (
    <Wrapper>
    <div className = {showSidebar?'sidebar-container': 'sidebar-container show-sidebar'}>
    <div className="content">
        <header>
          <Logo/>
        </header>
        <NavLinks isBigSidebar/>
      </div>
      </div>
  </Wrapper>
  )
}

export default BigSideBar
