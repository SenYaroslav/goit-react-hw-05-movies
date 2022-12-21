import React from 'react';
import {H2, LinkItem} from './PageNotFound.styled';

const PageNotFound = () => {
  return (
    <>
      <H2>🧐 Page is not found</H2>
      <LinkItem to="/">Please, click to go Home page</LinkItem>
    </>
  );
};

export default PageNotFound;
