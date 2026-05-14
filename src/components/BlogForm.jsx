import { use, useState } from "react"

const BlogForm = () => {
    const [title,setTitle]=useState("")
    const [author,setAuthor]=useState("")
    const [url,setUrl]=useState("")
    const handleFormInput = (e) => {
         e.preventDefault()
         console.log(author,title);
    }
    return(
      <form  onSubmit={handleFormInput}style={{width:400}}>
        <fieldset >
          <legend>create your favorite blog</legend>
          <label>
             title: <input type="text" value={title} onChange={({target})=>setTitle(target.value)}/> 
          </label> <br />
          <label>
             author: <input type="text" value={author} onChange={({target})=>setAuthor(target.value)}/> 
          </label> <br />
          <label>
             url: <input type="text" value={url} onChange={({target})=>setUrl(target.value)} /> 
          </label>  <br />
          <button type="submit">create</button>
          <button >cancel</button>
        </fieldset>
      </form>
    )
}

export default BlogForm