import Blog from './Blog'
import BlogForm from './BlogForm'
import Togglable from './Togglable'

const Blogs = ( { user,sortedBlogs,handleBlogForm,handleLogout,ref,handleBlogUpdate,handleRemove } ) => {
  return(
    <div>
      <h3>Blogs</h3>
      <p>{user.userName} Logged In <button onClick={handleLogout}>LogOut</button></p>
      <Togglable buttonLabel='Create new blog' ref={ref}>
        <BlogForm  handleBlogForm={handleBlogForm}/>
      </Togglable>
      <h4>BlogList</h4>
      {sortedBlogs.map(blog => <Blog key={blog.id} blog={blog} handleBlogUpdate={handleBlogUpdate} handleRemove={handleRemove}/>)}
    </div>
  )
}

export default Blogs
