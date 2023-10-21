import React, { PropsWithChildren } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const Layout: React.FC<PropsWithChildren> = ({ children }) => (
  <>
    <Nav />
    <main>{children}</main>
    <Footer />
  </>
)

export default Layout;
