import { Outlet } from 'react-router-dom'
import Wrapper from '../../assets/wrappers/SharedLayout'
import { Navbar, BigSidebar, SmallSidebar } from '../../components'
const SharedLayout = () => {
  return (
    <Wrapper>
      <main className='dashboard'>
      
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className='dashboard-page'>
          <form method='POST' action='/pay'><p>Find The App Useful?   <a href='/payment'><button type="submit" className='member-btn'>You Can Always Buy Me A Coffee</button></a></p></form>
         
         
          
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  )
}

export default SharedLayout
