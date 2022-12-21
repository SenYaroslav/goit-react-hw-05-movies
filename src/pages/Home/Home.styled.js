import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const H1 = styled.h1`
  margin-top: 30px;
  margin-left: 20px;
`;

export const List = styled.ul`
  margin-left: 10px;
  font-size: 20px;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li`
  margin-top: 5px;
`;

export const LinkItem = styled(NavLink)`
  margin-left: 10px;
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
