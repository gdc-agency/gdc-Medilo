import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ isTopBar, variant }) => {
  return (
    <div>
      <Header isTopBar={isTopBar} variant={variant} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
