import Blog from "./Blog";
import BlogForm from "./BlogForm";
import Togglable from "./Togglable";

const Blogs = ( {user,blogs,handleBlogForm,handleLogout} ) =>{
    return(
        <div>
              <h3>Blogs</h3>
              <p>{user.userName} Logged In <button onClick={handleLogout}>LogOut</button></p> 
              <Togglable buttonLabel='Create new blog' >
                <BlogForm  handleBlogForm={handleBlogForm}/>
              </Togglable>
              <h4>BlogList</h4>
              {blogs.map(blog => <Blog key={blog.id} blog={blog}/>)}
        </div>
      )
}
     
export default Blogs
