import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { Link as Navlink } from 'react-router-dom'

const Navbar = () => {
  return (
    <Nav>
      <Navlink to="/">Home</Navlink>
      <Link href="/funds/insights">Insights</Link>
      <Navlink to="/todos">Todos</Navlink>
    </Nav>
  )
}

export default Navbar

const Nav = styled.nav `
  width: 100%;
  display: flex;
  justify-content: space-around;
`