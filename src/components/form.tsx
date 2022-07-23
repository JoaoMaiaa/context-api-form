import { useContext } from 'react'

import { LoginContext } from '../contexts/loginContext'

const Form = () => {
  const { email, setEmail, setShowProfile } = useContext(LoginContext)
  return (
    <>
      <div
        style={{
          borderRadius: '2px',
          width: '400px',
          backgroundColor: '#252430',
          padding: '20px'
        }}
      >
        <h2
          style={{
            color: '#7e7a66',
            marginLeft: '40px'
          }}
        >
          Cadastre-se
        </h2>
        <form>
          <input
            type="email"
            placeholder="Seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              color: '#252430',
              fontFamily: 'sans-serif',
              borderRadius: '2px',
              padding: '10px',
              backgroundColor: '#485557',
              width: '300px',
              marginTop: '25px',
              display: 'block',
              margin: '0 auto',
              border: 'none'
            }}
          />
          <input
            type="password"
            placeholder="Sua senha"
            style={{
              color: '#252430',
              fontFamily: 'sans-serif',
              borderRadius: '2px',
              padding: '10px',
              backgroundColor: '#485557',
              marginTop: '30px',
              width: '300px',
              display: 'block',
              margin: '35px auto',
              border: 'none'
            }}
          />
          <button
            type="submit"
            onClick={() => {
              setShowProfile(true)
            }}
            style={{
              fontFamily: 'sans-serif',
              borderRadius: '2px',
              padding: '10px',
              marginLeft: '40px',
              marginBottom: '15px',
              border: 'none',
              cursor: 'pointer',
              backgroundColor: '#888b80'
            }}
          >
            Login
          </button>
        </form>
      </div>
    </>
  )
}

export default Form
