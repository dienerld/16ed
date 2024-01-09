import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

export function Layout() {
  return (
    <Wrapper>
      <Header>Header</Header>
      <Outlet />
    </Wrapper>
  )
}

const Header = styled.header`
  background: ${(props) => props.theme.colors.primary};
  height: 60px;
  width: 100%;
`

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`
