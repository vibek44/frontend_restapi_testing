import { Link } from 'react-router-dom'

const Blog = ({ user, blog ,handleBlogUpdate,handleRemove }) => {
  const handleLikes = (blog) => {
    const changedBlog={ ...blog,likes:blog.likes+1 }
    handleBlogUpdate(changedBlog)
  }

  if (!blog)return null
  return(
    <div className='detail' style={{ margin:'10px' }}>
      <b>  {blog.author}:  {blog.title}</b><br/>
      <Link to={blog.url} target="_blank">{blog.url}</Link>
      <p>likes:{blog.likes} {user && <button onClick={() => handleLikes(blog)}>like</button>} </p>
      <p> Created by {blog.user.userName} </p>
      {( user && (user.id===blog.user.id))  && <button onClick={() => handleRemove(blog)}>remove</button>}
    </div>
  )

}
export default Blog