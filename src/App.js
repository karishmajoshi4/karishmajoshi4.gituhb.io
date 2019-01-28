import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Loadable from 'react-loadable';
import Loading from './components/Loading.jsx';
import Navbar from './components/Navbar.jsx';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import "./styles/Custom.scss";

const LoadableHome = Loadable({loader: () => import('./components/Home.jsx'), loading: () => Loading});
const LoadableAbout = Loadable({loader: () => import('./components/About.jsx'), loading: () => Loading});
const LoadableWork = Loadable({loader: () => import('./components/Work.jsx'), loading: () => Loading});
const LoadableSketchpressions = Loadable({loader: () => import('./components/Sketchpressions.jsx'), loading: () => Loading});

library.add(fab, fas);

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Navbar />
        <Switch>
          <Route exact path='/' component={LoadableHome} />
          <Route exact path='/home' component={LoadableHome} />
          <Route exact path='/about' component={LoadableAbout} />
          <Route exact path='/work' component={LoadableWork} />
          <Route exact path='/sketchpressions' component={LoadableSketchpressions} />
          <Route component={LoadableHome} />
        </Switch>
      </div>
    );
  }
}

export default App;