'use client';


import Link from 'next/link';
import React from 'react';

import { ModeToggle } from './mode-toggle';


const navs = ['blog', 'portfolio', 'contact'];

const Navs = () => {
  console.log({ todo: 'Navs' });
  return (
    <nav className="nav-header-rhs breadcrumbs">
      {navs.map((nav) => {
        return (
          <Link className="breadcrumb button capitalize" key={nav} href={`/${nav}`}>
            {nav}
          </Link>
        );
      })}
      <ModeToggle/>
    </nav>
  );
};

export default Navs;
