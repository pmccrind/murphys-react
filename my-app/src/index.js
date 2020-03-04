import React from 'react';
import ReactDOM from 'react-dom';
import { Menu, Image, Icon, Dropdown, Grid, List } from 'semantic-ui-react';
import './stlye.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header } from 'semantic-ui-react';

class Top extends React.Component {
  render() {
    const top = {
      boxShadow: 'none',
      border: 'none',

    };
    return (
        <Menu style={top} borderless className='topmenu'>
          <Container>
            <Menu.Item> <Image src='http://murphyshawaii.com/media/2014/04/murphyshawaii.png'/> </Menu.Item>
            <Menu.Item position={'right'}> <a>Home</a></Menu.Item>
            <Dropdown item text="About Us">
              <Dropdown.Menu>
                <Dropdown.Item>New</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item> <a>Saint Patricks Day</a></Menu.Item>
            <Dropdown item text="Menus">
              <Dropdown.Menu>
                <Dropdown.Item>New</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item> <a>Bar</a></Menu.Item>
            <Menu.Item> <Icon name='search'/> </Menu.Item>
          </Container>
        </Menu>
    );
  }

}

class Middle extends React.Component {
  render() {
    return (
        <div  id='middle'>
          <Grid container verticalAlign={'middle'} stlye = {{paddingTop: '50px',}}>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Image src='http://murphyshawaii.com/media/2014/04/murphyshawaiilogo.png'/>
              </Grid.Column>
              <Grid.Column>
                <Header as = 'h3' inverted>
                  A traditional downtown saloon and eatery...
                </Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>

    );
  }
}

class Footer extends React.Component {
  render() {
    return (
        <div id = 'footer'>
          <Grid container>
            <Grid.Row columns={3}>
              <Grid.Column>
                <List>
                  <li>Lunch <hr/> </li>
                  <li>Monday - Friday 11:00 AM - 2:30 PM</li>
                  <li>Sat -Sun 4:00PM</li>
                </List>
              </Grid.Column>
              <Grid.Column>
                <List>
                  <li>Bar <hr/> </li>
                  <li>Monday - Friday 11:00 AM - 2:30 PM</li>
                  <li>Sat -Sun 4:00PM</li>
                </List>
              </Grid.Column>
              <Grid.Column>
                <List>
                  <li>Dinner <hr/> </li>
                  <li>Monday - Friday 11:00 AM - 2:30 PM</li>
                  <li>Sat -Sun Not open</li>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>

    );
  }
}

class Murphys extends React.Component {

  render() {
    return (
        <div>
          <Top/>
          <Middle/>
          <Footer/>
        </div>
    );
  }
}

ReactDOM.render(<Murphys/>, document.getElementById('root'));