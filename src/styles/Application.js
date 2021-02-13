import styled from 'styled-components';
import Icon from '@material-ui/core/Icon';
import { shade } from 'polished';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  background-color: ${props => props.theme.primary};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  z-index: 20;

  box-sizing: border-box;

  -webkit-box-shadow: 0px 5px 17px 5px rgba(0,0,0,0.48); 
  box-shadow: 0px 3px 17px 5px rgba(0,0,0,0.48);

  @media (max-width: 1024px) {
    padding: 0 15px;
  }
`;

export const AppContainer = styled.div`
  background-color: ${props => props.theme.background};
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding-left: 10rem;
  padding-top: 6.5rem;

  @media (max-width: 1024px) {
    padding-left: 0;
  }
`;

export const Sidebar = styled.div`
  position: fixed;
  left: 0;
  top: 0;

  background-color: ${props => props.theme.cards};
  width: 10rem;
  height: 100%;
  padding-top: 6rem;
  padding-bottom: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  box-sizing: border-box;

  transition: 400ms;

  z-index: 5;

  -webkit-box-shadow: 2px 9px 21px -8px rgba(0,0,0,0.75);
  -moz-box-shadow: 2px 9px 21px -8px rgba(0,0,0,0.75);
  box-shadow: 2px 9px 21px -8px rgba(0,0,0,0.75);

  @media (max-width: 1024px) {
    left: -100%;
    z-index: 15;

    &.show {
      left: 0;
    }
  }
`;

export const HeaderTitle = styled.h1`
  color: #fff;
  font-size: ${props => props.size};

  @media (max-width: 1024px) {
    font-size: 12pt;
  }
`;

export const MenuButton = styled.div`
  display: none;
  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    margin-right: 15px;
    transition: 300ms;
    cursor: pointer;
    
    font-size: 50px;

    &:hover {
      color: #e0e0e0;
    }
  }
`;

export const SideButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 8rem;
  height: 7rem;
  border-radius: 0.5rem;
  transition: 300ms;
  cursor: pointer;

  background-color: ${props => props.active && shade(0.1, props.theme.cards)};

  &:hover {
    background-color: ${props => props.theme.hover};
  }
`;