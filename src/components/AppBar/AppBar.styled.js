import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  height: 80px;
  display: flex;
  align-items: center;
  background-color: #d3e2ea;
`;

export const NavItem = styled(NavLink)`
  margin-left: 40px;
  color: #212121;
  font-size: 26px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-decoration: none;

  &.active {
    color: #565656;
    text-decoration: underline;
  }

  &:hover:not(.active),
  :focus-visible:not(.active) {
    color: #565656;
  }
`;
