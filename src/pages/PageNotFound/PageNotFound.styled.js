import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const H2 = styled.h2`
  margin-top: 30px;
  margin-left: 20px;
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
