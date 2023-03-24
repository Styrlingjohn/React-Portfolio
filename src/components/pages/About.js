import React from 'react';

 function About() {
  return (
    <div>
      <h1>About Me</h1>
      <p className='About'>
    Currently enrolled in a full-stack computer programming bootcamp through the University of Utah.
    I am scheduled to complete the course on April 17th. I have learned many skills during my journey but 
    I am excited to further my knowledge by entering the workforce. I love to be social and interact with people.
    Me and my wife have been married for almost 4 years and we love to travel. Some notable places we have been is 
    Athens, Greece; Santorini, Greece; Cabo, Mexico; Roaton, Honduras; Maui, Hawaii. I am a person that has a lot to 
    offer in life and am excited to apply my new learned skills to a company willing to hire me.
      </p>

      <img className = 'Pics' src="/Headshot.png" alt='Pics' />
      <img className = 'Pics' src="/Savannah and I.png" alt='Pics' />

    </div>
  );
}

export default About; 