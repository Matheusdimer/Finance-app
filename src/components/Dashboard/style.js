import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import Icon from "@material-ui/core/Icon";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: clamp(300px, 70%, 100%);
  row-gap: 20px;
  padding-bottom: 20px;

  @media (max-width: 1024px) {
    width: 90vw;
  }
`;

export const BalanceGrid = styled.div`
  //background-color: ${props => props.theme.cards};
  width: 100%;
  border-radius: 0.5rem;
  
  display: flex;
  flex-direction: row;
  

  justify-items: center;
  align-items: center;

  //box-sizing: border-box;

  column-gap: 1rem;
  row-gap: 1rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const InCard = styled.div`
  width: 100%;
  height: 100%;

  background: rgb(45,189,124);
  background: linear-gradient(360deg, rgba(45,189,124,1) 28%, rgba(117,226,177,1) 83%);
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  padding: 15px 30px;

  border-radius: 4px;

  color: #f0f0f0;

  align-items: flex-start; 
`;

export const OutCard = styled.div`
  width: 100%;
  height: 100%;

  background: rgb(227,91,104);
  background: linear-gradient(360deg, rgba(227,91,104,1) 28%, rgba(255,148,158,1) 83%);
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  padding: 15px 30px;

  border-radius: 4px;

  color: #f0f0f0;

  align-items: flex-start; 
`;

export const BalanceCard = styled.div`
  width: 100%;
  height: 100%;

  background: rgb(52,171,235);
  background: linear-gradient(360deg, rgba(52,171,235,1) 28%, rgba(103,198,249,1) 83%);
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  padding: 15px 30px;

  border-radius: 4px;

  color: #f0f0f0;

  align-items: flex-start; 
`;

export const InOutCard = styled.div`
  width: 100%;
  height: 100%;
  //background-color: ${props => props.theme.cards};

  grid-column: 1/4;

  //overflow-y: scroll;

  display: flex;
  flex-direction: column;
  row-gap: 5px;

  box-sizing: border-box;  
`;

export const Money = styled.h1`
  color: #f0f0f0;
  font-size: 28px;
  font-weight: 550;
  align-self: flex-start;
`;

export const Item = styled.div`
  width: calc(100% -20px);
  height: 55px;
  background-color: ${props => props.theme.cards};

  display: grid;
  grid-template-columns: 50% 25% 20% 5%;

  border-radius: 4px;

  box-sizing: border-box;
  align-items: center;

  padding: 0 30px;

  @media (max-width: 1024px) {
    grid-template-columns: 1.6fr 1.6fr 1.4fr 0.4fr;
    padding: 0 5px 0 20px;
    font-size: 14px;
  }
`;

export const AddButton = styled.a`
  background: none;
  margin-bottom: 10px;
  margin-left: 10px;
  color: #2dbd7c;

  font-size: 12pt;

  align-self: flex-start;
  border: none;
  border-radius: 4px;

  transition: 300ms ease-in-out;
  cursor: pointer;

  &:hover {
    text-decoration: outline;
  }
`;

export const TransactionMoney = styled.p`
  color: ${props => props.neg ? 'rgb(227,91,104)' : 'rgb(45,189,124)'};
`;

export const DeleteButton = styled(Icon)`
  color: rgb(227,91,104);
  transition: 300ms;
  cursor: pointer;
  &:hover {
    color: #555;
  }
`;

export const Mask = styled.div`
  background-color: rgba(0,0,0,0.5);
  width: 100%;
  height: 100%;
  
  position: fixed;
  top: 0;
  left: 0;

  animation-name: appear;
  animation-duration: 300ms;
  animation-fill-mode: backwards;
  z-index: 10;
`;

export const AddCard = styled.div`
  background-color: ${props => props.theme.hover};
  position: fixed;
  width: 28rem;
  height: 25rem;

  top: 50%;
  left: 50%;

  border-radius: 4px;

  margin-top: -12rem;
  margin-left: -14rem;

  box-sizing: border-box;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  row-gap: 15px;

  animation-name: appear;
  animation-duration: 300ms;
  animation-fill-mode: backwards;

  -webkit-box-shadow: 3px 2px 17px 5px rgba(0,0,0,0.51); 
  box-shadow: 3px 2px 17px 5px rgba(0,0,0,0.51);

  @media (max-width: 1024px) {
    width: 100%;
    margin-left: -50%;
    z-index: 10;
  }
`;

export const Input = styled.input`
  box-sizing: border-box;
  background-color: #fff;
  border: none;
  border-radius: 4px;
  height: 45px;
  width: 100%;
  padding: 0 15px;
  color: #333;
  font-size: 1rem;
  align-items: center;
`;

export const CancelButton = styled.button`
  width: 100%;
  height: 50px;

  border: 3px solid rgb(227,91,104);
  border-radius: 4px;

  color: rgb(227,91,104);
  font-size: 16px;

  cursor: pointer;
  transition: 300ms;

  &:hover {
    background-color: rgba(0,0,0,0.1);
  }
`;

export const SaveButton = styled.button`
  width: 100%;
  height: 50px;

  border: none;
  background-color: rgb(45,189,124);
  border-radius: 4px;

  color: #fff;
  font-size: 16px;
  
  cursor: pointer;
  transition: 300ms;

  &:hover {
    background-color: ${shade(0.2, '#2dbd7c')}
  }
`;

export const TabHeader = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${props => props.theme.cards};
  display: flex;
  flex-direction: row;

  align-items: center;
`;

export const TabsContainer = styled.div`
  height: 100%;

  display: flex;
  flex-direction: row;
  
  overflow-x: auto;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TabButton = styled.button`
  background: none;
  border: none;
  color: #333;
  flex: none;
  width: 150px;
  height: 100%;
  transition: 300ms;
  font-size: 16px;
  border-bottom: 2px solid transparent;
  cursor: pointer;

  ${props => props.active && `
    border-bottom: 2px solid ${props.theme.primary};
    color: ${props.theme.primary};
  `}

  &:hover {
    background-color: rgba(0,0,0,0.1);
  }
`;

export const ScrollButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  width: 50px;
  background: #fefefe;

  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const MonthCard = styled.div`
  position: fixed;
  top: 1.25rem;
  left: 50%;
  width: 30rem;
  min-height: 2.5rem;
  margin-left: -15rem;
  background-color: ${props => props.theme.cards};
  transition: 300ms;

  box-sizing: border-box;
  overflow: hidden;
  
  animation-name: appear;
  animation-duration: 400ms;
  animation-fill-mode: backwards;

  border-radius: 4px;
  z-index: 25;

  @media (max-width: 1024px) {
    position: static;
    margin: 0;
    width: 100%;
    z-index: 11;
    box-shadow: 0px 0px 8px -1px rgba(0,0,0,0.75);
  }
`;

export const Selected = styled.div`
  width: 100%;
  height: 2.5rem;
  padding-left: 1.5rem;
  padding-right: 1rem;

  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;

  ${props => props.active && `
    border-bottom: solid 1px #aaa;
  `}
`;

export const Months = styled.div`
  margin-top: 5px;
  width: 100%;
  height: 22rem;
  padding: 0 1rem;
  box-sizing: border-box;
  overflow-y: auto;
`;

export const ButtonMonth = styled.div`
  width: 100%;
  height: 2.5rem;
  padding-left: 0.5rem;

  margin-top: 2px;

  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  transition: 300ms;

  cursor: pointer;

  border-radius: 4px;

  &:hover {
    background-color: rgba(0,0,0,0.1);
  }
`;

export const Loading = styled.div`
  position: fixed;
  top: 5rem;
  left: 0rem;
  width: 100%;
`;