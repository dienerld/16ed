import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

export function Layout() {
  return (
    <div>
      <Header>Header</Header>
      <Outlet />
    </div>
  )
}

const Header = styled.header`
  background: ${(props) => props.theme.colors.primary};
  height: 60px;
  width: 100%;
`
