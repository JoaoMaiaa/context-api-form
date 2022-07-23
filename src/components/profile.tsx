import { useContext } from 'react'

import { LoginContext } from '../contexts/loginContext'

const Profile = () => {
  const { email, setShowProfile, setEmail } = useContext(LoginContext)
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
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ color: '#7e7a66' }}>Perfil</h1>
        </div>
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: '#7e7a66' }}>Email: {email}</p>
        </div>
        <button
          type="button"
          onClick={() => {
            setEmail('')
            setShowProfile(false)
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
          Início
        </button>
      </div>
    </>
  )
}

export default Profile
