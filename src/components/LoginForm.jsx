import { useState } from 'react'

const LoginForm=( { handleLogin }) => {
  const [userName, setUserName]=useState('')
  const [password, setPassword]=useState('')

  const handleLoginFormInput  = (e) => {
    e.preventDefault()
    handleLogin({ userName,password })
    setUserName('')
    setPassword('')
  }

  return(
    <form onSubmit={handleLoginFormInput}>
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

    </form>
  )
}



export default LoginForm