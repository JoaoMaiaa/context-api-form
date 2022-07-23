import { NextPage } from 'next'
import { useState } from 'react'

import Form from '../components/form'
import Profile from '../components/profile'

import { LoginContext } from '../contexts/loginContext'

const Home: NextPage = () => {
  const [showProfile, setShowProfile] = useState(false)
  const [email, setEmail] = useState('')

  return (
    <>
      <LoginContext.Provider value={{ email, setEmail, setShowProfile }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '130px'
          }}
        >
          <div>{showProfile ? <Profile /> : <Form />}</div>
        </div>
      </LoginContext.Provider>
    </>
  )
}

export default Home
