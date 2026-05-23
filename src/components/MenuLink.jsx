import { NavLink } from 'react-router-dom'

const MenuLink = ({ user,handleLogout }) => {
  const styleLink= ({ isActive }) => (
    { color: isActive ? '#4B0092' : '',
      marginRight:'0.5em',
      textDecoration:isActive?'underline':'none'
    })

  return(
    <div style={{ marginBottom:'1em' }}>
      <NavLink to='/' style={styleLink}>Blogs</NavLink>
      {user && <NavLink to='/create'>new blog</NavLink>}
      { user ? <button onClick={handleLogout}>logout</button>:<NavLink to='/login' style={styleLink}>Login</NavLink>}
    </div>
  )
}
export default MenuLink