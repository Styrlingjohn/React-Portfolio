import React from 'react';

function About() {

  const picCss = {
    boxShadow: '10px 5px 9px #918d8f',
    margin: '4em',
    padding: '1em',
  }
  return (
    <div>
      <h1>About Styrling Morris</h1>
      <p className='About'>
      I am a frontend developer with a passion for JavaScript, React, HTML, and CSS and utilizing those languages to create awesome websites.
        
      </p>
      <img style={picCss} className='Pics' src="/Headshot.png" alt='Pics' />


    </div>
  );
}

export default About; 