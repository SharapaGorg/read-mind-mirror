import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'
import { Header } from './layout/header'

import { Dashboard } from './dashboard'

import { store } from './__data__/store'

const App = () => {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <ReduxProvider store={store}>
          <Header />
          <Dashboard />
        </ReduxProvider>
      </ChakraProvider>
    </BrowserRouter>
  )
}

export default App
