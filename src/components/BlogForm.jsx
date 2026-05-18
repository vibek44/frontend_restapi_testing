import {  useState } from 'react'

const BlogForm = ({ handleBlogForm }) => {
  const [title,setTitle]=useState('')
  const [author,setAuthor]=useState('')
  const [url,setUrl]=useState('')
  const handleFormInput = (e) => {
    e.preventDefault()
    handleBlogForm({ title,author,url })
  }
  return(
    <form  onSubmit={handleFormInput}style={{ width:400 }}>
      <label>
            title: <input type="text" value={title} onChange={({ target }) => setTitle(target.value)}/>
      </label> <br />
      <label>
            author: <input type="text" value={author} onChange={({ target }) => setAuthor(target.value)}/>
      </label> <br />
      <label>
            url: <input type="text" value={url} onChange={({ target }) => setUrl(target.value)} />
      </label>  <br />
      <button type="submit">submit</button>
    </form>
  )
}

export default BlogForm