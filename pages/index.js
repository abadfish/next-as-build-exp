import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Todos from '../src/views/Todos'

function SafeHydrate({ children }) {
  return (
    <div suppressHydrationWarning> 
      {typeof document === 'undefined' ? null : children}
    </div>
  )
}

export default function App() {
  if (typeof document === 'undefined') {
    return null
  }

  return (
    <SafeHydrate>
      <BrowserRouter>
        <Routes>
          <Route exact path="/"></Route> 
          <Route exact path="/todos" component={ Todos } />
        </Routes>
      </BrowserRouter>
    </SafeHydrate>
  )
}