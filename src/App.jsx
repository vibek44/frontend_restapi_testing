import { useState, useEffect } from 'react'
import LoginForm from './components/LoginForm'
import Blogs from './components/Blogs'
import Notification from './components/Notification'
import loginService from '../src/services/login'
import blogService from './services/blogs'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser]=useState(null)
  const [userName, setUserName]=useState('')
  const [password, setPassword]=useState('')
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
   }

  },[])

  const handleLogin=async (e)=>{
    e.preventDefault()

    try {
      if(!userName || !password){
        setMessage({...message,error:'username or password missing'})
        setTimeout(()=>{
          setMessage({...message,error:null})
        },2000)
        return
      }
      const user=await loginService.login({userName,password})
      localStorage.setItem('userJson',JSON.stringify(user))
      //console.log(user);
      setUser(user)
      setUserName('')
      setPassword('')
    } catch (error) {
       setMessage({...message, error:error.response.data.error})
       setTimeout(() => {
         setMessage({...message,error:null})
       }, 2000);
    } 
  }

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem('userJson')
  }
 
  return (
    <div>
       <Notification message={message} />
      {<LoginForm 
        userName={userName} setUserName={setUserName}
        password={password} setPassword={setPassword}
        handleLogin={handleLogin} handleLogout={handleLogout}
        user={user} blogs={blogs}
      />}
    </div>
  )
}

export default App