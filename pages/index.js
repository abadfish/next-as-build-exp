import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function SafeHydrate({ children }) {
  return (
    <div suppressHydrationWarning> // Must be a div, can't be a fragment 😑🤦‍♂️
      {typeof document === 'undefined' ? null : children}
    </div>
  )
}

export default function App() {
  return (
    <SafeHydrate>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>Welcome!</h1>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </SafeHydrate>
  )
}