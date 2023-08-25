import React from 'react';
import CoverWrapper from './cover-wrapper';
import IconHero from './IconHero';
import { Footer } from './footer';


function Container({ children, ...props}:any) {
  return (
    <div className="page-scroller ">
      <CoverWrapper img={props.coverWrapper} />
      <main className="page bg-yellow-100 page-has-cover page-has-icon page-has-image-icon full-page index-page">
        <IconHero />
        <h1 className="title text-[1.2em] md:text-[2em] capitalize">
          {(props.title && `${props.title} `) || 'Zykson.com'}
        </h1>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Container;
