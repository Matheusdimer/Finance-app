import styled from 'styled-components';

export const Background = styled.div`
  display: flex;
  background-color: ${props => props.theme.background};
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 100vh;
`;