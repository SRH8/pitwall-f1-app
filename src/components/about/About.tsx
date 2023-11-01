import React from 'react';

const About: React.FC = () => {
  return(
    <>
      <div className='about-container'>
        <div className='about-info'>
            <p>
                Pitwall F1 is a web application to view data about the current Formula 1 season.
                This project was made to learn React, so I will try to keep it updated and improve it
                as I learn more about react and its features. <br/>
                It was made possible by:
            </p>
            <ul>
              <li><a href='https://ergast.com/mrd/'>Ergast</a></li>
              <li><a href='https://react.dev/'>React</a></li>
              <li><a href='https://fontawesome.com/'>Font Awesome</a></li>
              <li><a href='https://nodejs.org/en'>NodeJS</a></li>
            </ul>
        </div>
      </div>
    </>
  );
}

export default About;