import { useState } from 'react'

const Blog = ({ blog ,handleBlogUpdate,handleRemove }) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }
  const [view,setShow]=useState(false)
  const hideWhenView={ display:view ? 'none' : '' }
  const showWhenView={ display:view ? '' : 'none' }

  const handleLikes = (blog) => {
    const changedBlog={ ...blog,likes:blog.likes+1 }
    handleBlogUpdate(changedBlog)
  }

  return(
    <div style={blogStyle}>
      <div className='briefly' style={hideWhenView}>
        {blog.title}<b>By</b> {blog.author} <button onClick={() => setShow(!view)}>view</button>
      </div>
      <div className='detail' style={showWhenView}>
        <p>{blog.title} by {blog.author} <button onClick={() => setShow(!view)}>hide</button></p>
        <a href={blog.url} target="_blank">{blog.url}</a>
        <p>likes:{blog.likes} <button onClick={() => handleLikes(blog)}>like</button> </p>
        <p> {blog.user.userName} </p>
        <button onClick={() => handleRemove(blog)}>remove</button>
      </div>

    </div>
  )
}
export default Blog