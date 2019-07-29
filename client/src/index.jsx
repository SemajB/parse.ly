import React from 'react';
import ReactDOM from 'react-dom';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';
import App from './app.jsx';
import Landing from './Landing.jsx';
import TopTen from './topten.jsx';
import Playlist from './Playlist.jsx';

const routing = (
  <Router>
    <Switch>
      <React.Fragment>
        <Route exact path="/" component={Landing} />
        <Route path="/music" component={App} />
        <Route path="/topten" component={TopTen} />
        <Route path="/playlist" component={Playlist} />
      </React.Fragment>
    </Switch>
  </Router>
);

ReactDOM.render(
  routing, document.getElementById('root'),
);
