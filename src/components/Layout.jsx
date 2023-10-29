import Navbar from './Navbar';

const Layout = ({children}) => {
  return (
    <>
        <Navbar/>
        <main className=''>
            {children}  
        </main>
    </>
  )
}

export default Layout