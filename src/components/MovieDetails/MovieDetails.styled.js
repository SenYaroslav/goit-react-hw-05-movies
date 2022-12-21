import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
`;

export const Wrapper = styled.div`
  margin: 15px;
`;

export const WrapperInfo = styled.div`
  box-sizing: border-box;
  padding: 15px;
  background-color: #e4ebef;
`;

export const Year = styled.p`
  padding: 5px;
  width: 50px;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  border-radius: 15px;

  background-color: #d3e2ea;
`;

export const LinkItem = styled(Link)`
  display: block;
  margin-bottom: 10px;
  color: #212121;
  text-decoration: none;
  // height: 20px;

  &.active {
    color: #565656;
    text-decoration: underline;
  }

  &:hover:not(.active),
  :focus-visible:not(.active) {
    color: #565656;
  }
`;
