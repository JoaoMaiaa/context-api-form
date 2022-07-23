import { NextPage } from 'next'

import Form from '../components/form'

const Home: NextPage = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '130px'
        }}
      >
        <Form />
      </div>
    </>
  )
}

export default Home
