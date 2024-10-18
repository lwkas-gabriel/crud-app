import styled from 'styled-components';
import { light } from '../../styles/themes/defaultTheme';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const PageButton = styled.button<{ isActive: boolean }>`
  background-color: ${(props) => 
    props.isActive 
      ? (props.theme === light ? '#333' : '#fff') 
      : (props.theme === light ? '#f0f0f0' : '#444')};
  color: ${(props) => 
    props.isActive 
      ? (props.theme === light ? '#fff' : '#000') 
      : (props.theme === light ? '#333' : '#ddd')};
  border: none;
  padding: 8px 12px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => 
      props.isActive 
        ? (props.theme === light ? '#555' : '#ddd') 
        : (props.theme === light ? '#e0e0e0' : '#555')};
  }

  &:disabled {
    cursor: default;
    opacity: 0.6;
  }
`;