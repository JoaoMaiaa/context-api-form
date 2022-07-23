/* eslint-disable @typescript-eslint/no-empty-function */

import { createContext } from 'react'

export interface LoginContextInterface {
  email: string
  setEmail: (input: string) => void
  setShowProfile: (input: boolean) => void
}

export const LoginContext = createContext<LoginContextInterface>({
  email: '',
  setEmail: () => {},
  setShowProfile: () => {}
})
