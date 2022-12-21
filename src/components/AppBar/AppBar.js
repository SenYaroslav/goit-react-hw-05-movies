import React from 'react';
import { Header, NavItem } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Header>
      <nav>
        <NavItem to="/">Home</NavItem>
        <NavItem to="movies">Movies</NavItem>
      </nav>
    </Header>
  );
};
