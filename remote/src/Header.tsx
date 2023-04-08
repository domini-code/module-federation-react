// Header.tsx
import React, { FC } from 'react';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return <div className='p-5 text-3xl text-white bg-blue-600'>Header V1</div>;
};

export default Header;
