import {Roboto} from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  const links = [
    {
      title: 'Home',
      url: '/home',
    },
    {
      title: 'About',
      url: '/about',
    },
    {
      title: 'Projects',
      url: '/projects',
    },
    {
      title: 'Uses',
      url: '/uses',
    },
  ];
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Navbar
          options={[
            { path: "/", label: "Home" },
            { path: "/about", label: "About" },
            { path: "/projects", label: "Projects" },
            { path: "/uses", label: "Uses" },
          ]}
          style={{ margin: "0 auto" }}
        />
      </div>
      <main>{children}</main>
      <Footer links={links}/>
    </>
  );
}
