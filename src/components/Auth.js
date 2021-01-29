import styled from 'styled-components';
import { lighten } from 'polished';

export const AuthCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.cards};
  width: 23rem;
  height: 21rem;
  padding: 2rem;

  justify-content: space-around;

  overflow: hidden;

  -webkit-box-shadow: 2px 9px 21px -8px rgba(0,0,0,0.75);
  -moz-box-shadow: 2px 9px 21px -8px rgba(0,0,0,0.75);
  box-shadow: 2px 9px 21px -8px rgba(0,0,0,0.75);
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  background-color: ${props => props.theme.cards};
  border: none;
  border-bottom: 2px solid ${props => props.error ? '#ff3333' : props.theme.hover};
  font-size: 14pt;
  padding: 5px 2px;
  margin-bottom: 30px;
  margin-top: 5px;
  transition: 300ms;

  &:focus {
    border-bottom: 2px solid ${props => props.theme.primary};
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  color: #fff;
  font-size: 14pt;
  background-color: ${props => props.theme.primary};
  transition: 300ms;
  cursor: pointer;

  &:hover {
    background-color: ${props => lighten(0.08, props.theme.primary)};
  }
`;

export const CentralContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InputError = styled.span`
  color: #ff3333;
  font-size: 10pt;
  font-weight: 500;
`;