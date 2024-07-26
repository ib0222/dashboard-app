import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutI {
  children: ReactNode;
}

function Layout({ children }: LayoutI) {
  return (
    <div >
      <Header />
      <main>{children}</main>
      <Footer/>
    </div>
  );
}

export default Layout;
