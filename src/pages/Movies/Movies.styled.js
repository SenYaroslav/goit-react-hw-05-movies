import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  box-sizing: border-box;
  margin-top: 20px;
  margin-left: 20px;
`;

export const Input = styled.input`
  background-color: #d3e2ea;
  height: 30px;
  width: 300px;
  font-size: 16px;
  padding: 0;
  padding-left: 10px;
  border: 0;
  outline: 1px solid #212121;
`;

export const Button = styled.button`
  margin-left: 10px;
  height: 30px;
  width: 150px;
  border: 0;
  font-size: 16px;
  background-color: #212121;
  color: #ffffff;
  cursor: pointer;
`;

export const LinkItem = styled(Link)`
  margin-left: 20px;
  color: #212121;

  &.active {
    color: #565656;
    text-decoration: underline;
  }

  &:hover:not(.active),
  :focus-visible:not(.active) {
    color: #565656;
  }
`;
