import React from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';
import { Div } from './Loader.styled';

const Loader = () => {
  return (
    <Div>
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#d3e2ea"
      />
    </Div>
  );
};

export default Loader;
