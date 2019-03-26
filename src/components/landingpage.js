import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className='landing-grid'>
          <Cell col={12}>
            <img
              src='https://avatars0.githubusercontent.com/u/34542543?s=400&u=76294ddef811078ec9e5c21615292b39cab21957&v=4'
              alt='avatar'
              className='avatar-img'
            />
            <div className='banner-text'>
              <h1>Mobile Developer</h1>
              <hr />
              <p>
                React Native | React | JavaScript | NodeJS | Express | MongoDB
              </p>
              <div className='social-links'>
                {/* LinkedIn */}
                <a
                  href='https://www.linkedin.com/in/prakash-bokati-59aa82178/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fa fa-linkedin-square' aria-hidden='true' />
                </a>

                {/* Github */}
                <a
                  href='https://github.com/pakkibokati2012'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fa fa-github-square' aria-hidden='true' />
                </a>

                {/* Stackoverflow */}
                <a
                  href='https://stackoverflow.com/users/9860320/prakash-bokati'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fa fa-stack-overflow' aria-hidden='true' />
                </a>
                {/* Youtube */}
                <a
                  href='http://google.com'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fa fa-youtube-square' aria-hidden='true' />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
