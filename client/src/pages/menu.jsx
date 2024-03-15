import './menu.css';
import '../components/navbar.css';
import Navbar from '../components/navbar';
import Bottombar from '../components/bottonmbar';
import Sidebar from '../components/sidebar';
import Poster from './poster'

function Menu() {

  return (
    <div className="Menu">
      <div className='navbar'>
        <Navbar />
      </div>
      <div className ='sidebarLayout centered'>
        <Sidebar />  
      </div>

      <div className="content centered">
        <Poster></Poster>
      </div>
      <div className='bottombar'>
        <Bottombar />
      </div>
    </div>
  );
}

export default Menu;
