import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'

import { Dashboard } from './dashboard'

import { store } from './__data__/store'

const App = () => {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <ReduxProvider store={store}>
          <Dashboard />
        </ReduxProvider>
      </ChakraProvider>
    </BrowserRouter>
  )
}

export default App
