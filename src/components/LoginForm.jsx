import Blogs from "./Blogs"
import BlogForm from "./BlogForm"

const LoginForm=( { handleLogin,handleLogout,user,blogs,userName,setUserName,password,setPassword})=>{
  if (user===null){
    return(
      <form onSubmit={handleLogin}>
        <div>
          <label>
            username
            <input
              type="text"
              value={userName}
              onChange={({ target }) => setUserName(target.value.trim())}
            />
          </label>
        </div>
        <div>
          <label>
            password
            <input
              type="password"
              value={password}
              onChange={({ target }) => setPassword(target.value.trim())}
            />
          </label>
        </div>
        <button type="submit">login</button>
      </form>)
  }

  return(
    <div>
          <h3>Blogs</h3>
          <p>{user.userName} Logged In <button onClick={handleLogout}>LogOut</button></p> 
          <BlogForm />
          <h4>BlogList</h4>
          <Blogs blogs={blogs}/>
    </div>
  )
}



export default LoginForm