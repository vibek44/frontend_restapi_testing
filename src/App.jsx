import { useState, useEffect } from 'react'
import LoginForm from './components/LoginForm'
import Blogs from './components/Blogs'
import blogService from './services/blogs'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser]=useState(null)
  const [userName, setUserName]=useState('')
  const [password, setPassword]=useState('')

  useEffect(() => {
    console.log('2')
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [user])

  const handleLogin=(e)=>{
    e.preventDefault()
    
  }
  console.log('1');
  return (
    <div>
      {<LoginForm 
        handleLogin={handleLogin} user={user} 
        userName={userName} setUserName={setUserName}
        password={password} setPassword={setPassword}
      />}
      { <Blogs blogs={blogs} /> }
    </div>
  )
}

export default App