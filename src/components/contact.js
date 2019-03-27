import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
  render() {
    return (
      <div className='contact-body'>
        <Grid className='contact-grid'>
          <Cell col={6}>
            <h2>Prakash Bokati</h2>
            <img
              src='https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png'
              alt='avatar'
              style={{ height: '250px' }}
            />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
              I would describe myself as a highly motivated and disciplined
              individual who likes to keep cutting edge technologies under belt.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className='contact-list'>
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '30px', fontFamily: 'Anton' }}
                  >
                    <i className='fa fa-envelope' aria-hidden='true' />
                    pakkibokati2012@gmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '30px', fontFamily: 'Anton' }}
                  >
                    <i className='fa fa-phone-square' aria-hidden='true' />
                    +977-9849867671
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '30px', fontFamily: 'Anton' }}
                  >
                    <i className='fa fa-skype' aria-hidden='true' />
                    Prakash Bokati
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Contact;
