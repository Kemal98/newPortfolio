import Navbar from '@components/Navbar';
import Sidebar from '@components/Sidebar';
import '@styles/globals.css'

export const metadata = {
  title: "Portfolio",
  description: "My portfolio",
};


const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/30 nav scrollbar-thumb-textDark">
          <Navbar />
          <main className="app">{children}</main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;