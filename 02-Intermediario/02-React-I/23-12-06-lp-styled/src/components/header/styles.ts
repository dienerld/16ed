import styled from 'styled-components';
import bgImg from '../../assets/ocean-background.jpg';

export const WrapperHeader = styled.header`
  height: 350px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right, #00000050, #00000050),
    url(${bgImg});
  background-size: cover;
  background-repeat: no-repeat;
`;
export const H1 = styled.h1``;
