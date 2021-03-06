/* eslint-disable global-require */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './modules/App/App';

// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

/* Workaround for async react routes to work with react-hot-reloader till
  https://github.com/reactjs/react-router/issues/2182 and
  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
 */
if (process.env.NODE_ENV !== 'production') {
  // Require async routes only in development for react-hot-reloader to work.
  require('./modules/Video/pages/VideoListPage/VideoListPage');
  require('./modules/Video/pages/VideoDetailPage/VideoDetailPage');
}

// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
export default (
  <Route path="/" component={App}>
    <IndexRoute
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/App/pages/Login/Index').default);
        });
      }}
    />
    <Route
      path="/home"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/App/pages/Home/Index').default);
        });
      }}
    />
    <Route
      path="/ingresar"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/App/pages/Other/Index').default);
        });
      }}
    />
    <Route
      path="/videos"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Video/pages/VideoListPage/VideoListPage').default);
        });
      }}
    />
    <Route
      path="/videos/:cuid"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Video/pages/VideoDetailPage/VideoDetailPage').default);
        });
      }}
    />
  </Route>
);
