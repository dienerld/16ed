import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: 100%;

  justify-content: center;
  align-items: center;

  div {
    display: flex;
    font-size: 60px;
  }

  button {
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 8px;
    border: none;
    cursor: pointer;
  }
`
