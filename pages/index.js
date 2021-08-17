import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import Navbar from '../src/components/Navbar'
import Todos from '../src/views/Todos'
import Home from '../src/views/Home'

function SafeHydrate({ children }) {
  return (
    <div suppressHydrationWarning> 
      {typeof document === 'undefined' ? null : children}
    </div>
  )
}

const queryClient = new QueryClient()

export default function App() {
  if (typeof document === 'undefined') {
    return null
  }

  return (
    <QueryClientProvider client={ queryClient }>
      <SafeHydrate>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={ Home }/> 
            <Route exact path="/todos" component={ Todos } />
          </Switch>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={true} />

      </SafeHydrate>
    </QueryClientProvider>
  )
}