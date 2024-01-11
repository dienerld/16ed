import { NavLink, Outlet } from 'react-router-dom'
import styled from 'styled-components'

import { useTheme } from '../contexts/ThemeContext'

export function Layout() {
  // const themeContext = useContext(ThemeContext)
  const themeContext = useTheme()

  return (
    <Wrapper>
      <Header>
        <NavLink to="/books">Listagem</NavLink>
        <NavLink to="/">Cadastro</NavLink>
        <button onClick={themeContext.toggle}>Mudar tema</button>
      </Header>
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
