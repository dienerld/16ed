import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const Form = styled.form`
  width: 100%;
  max-width: 900px;
  padding: 24px;
`
export const Input = styled.input`
  padding: 16px;
  margin-bottom: 8px;
  width: 100%;
  border-radius: 9999px;
  border: none;
  outline: none;
`

export const Button = styled.button`
  padding: 16px;
  margin-bottom: 8px;
  width: 100%;
  border-radius: 9999px;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: bold;
  cursor: pointer;
`
