import { useState, useEffect } from 'react'
import LoginForm from './components/LoginForm'
import Blogs from './components/Blogs'
import Notification from './components/Notification'
import loginService from '../src/services/login'
import blogService from './services/blogs'


const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser]=useState(null)
  const [message, setMessage]=useState({success:null, error:null})

  useEffect( () => {
    async function fetchBlog(){
      try {
        const blogs=await blogService.getAll()
        setBlogs( blogs ) 
      } catch (error) {
        setMessage({...message, error:error.response.data.error})
        setTimeout(() => {
         setMessage({...message,error:null})
        }, 2000);
      } 
    }
    fetchBlog()
  }, [ ])

  useEffect(()=>{
   const userJson=localStorage.getItem('userJson')
   if(userJson){
     const user=JSON.parse(userJson)
     setUser(user)
     blogService.setToken(user.token)
   }

  },[])

  const handleLogin=async ({userName,password})=>{
    if(!userName || !password){
      setMessage({...message,error:'username or password missing'})
      setTimeout(()=>{
        setMessage({...message,error:null})
      },2000)
      return
    }
    try {
      const user=await loginService.login({userName,password})
      blogService.setToken(user.token)
      localStorage.setItem('userJson',JSON.stringify(user))
      //console.log(user);
      setUser(user)
    } catch (error) {
       //console.log(error);
       setMessage({...message, error:error.response.data.error})
       setTimeout(() => {
         setMessage({...message,error:null})
        }, 2000);
      } 
  }

  const handleBlogForm = async ({title,author,url}) => {
    if(!title ||!author ||!url){
      setMessage({...message,error:'title,author or url missing!'})
      setTimeout(() => {
        setMessage({...message,error:null})
      }, 3000)
      return
    }
    try {
     
      const savedBlog=await blogService.create({title,author,url})
      
      setBlogs(blogs.concat(savedBlog))
      setMessage({...message,success:`a new blog ${savedBlog.title}! by ${savedBlog.author} added`})
      setTimeout(() => {
        setMessage({...message,success:null})
      },2000);
    } catch (error) {
      //console.log(error);
      setMessage({...message,error:error.response.data.error})
      setTimeout(() => {
        setMessage({...message,error:null})
      }, 3000);
    }
  }

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem('userJson')
  }

  return (
    <div> 
       <Notification message={message} />
      { !user && <LoginForm  handleLogin={handleLogin} /> }
      { user && <Blogs user={user} blogs={blogs} handleLogout={handleLogout} handleBlogForm={handleBlogForm}/>}
    </div>
  )
}

export default App