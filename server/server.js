import Express from 'express';
import compression from 'compression';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';
import IntlWrapper from '../client/modules/Intl/IntlWrapper';

// Webpack Requirements
import webpack from 'webpack';
import config from '../webpack.config.dev';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

// Initialize the Express App
const app = new Express();

// Run Webpack dev server in development mode
if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
}

// React And Redux Setup
import { configureStore } from '../client/store';
import { Provider } from 'react-redux';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import Helmet from 'react-helmet';

// Import required modules
import routes from '../client/routes';
import { fetchComponentData } from './util/fetchData';
import posts from './routes/post.routes';
import dummyData from './dummyData';
import serverConfig from './config';

// Set native promises as mongoose promise
mongoose.Promise = global.Promise;

// MongoDB Connection
mongoose.connect(serverConfig.mongoURL, (error) => {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
    throw error;
  }

  // feed some dummy data in DB.
  dummyData();
});

// Apply body Parser and server public assets and routes
app.use(compression());
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
app.use(Express.static(path.resolve(__dirname, '../dist')));
app.use('/api/v1', posts);

// Render Initial HTML
const renderFullPage = (html, initialState) => {
  const head = Helmet.rewind();

  // Import Manifests
  const assetsManifest = process.env.webpackAssets && JSON.parse(process.env.webpackAssets);
  const chunkManifest = process.env.webpackChunkAssets && JSON.parse(process.env.webpackChunkAssets);

  return `
    <!doctype html>
    <html>
      <head>
        ${head.base.toString()}
        ${head.title.toString()}
        ${head.meta.toString()}
        ${head.link.toString()}
        ${head.script.toString()}

        ${process.env.NODE_ENV === 'production' ? `<link rel='stylesheet' href='${assetsManifest['/app.css']}' />` : ''}
        <link href='https://fonts.googleapis.com/css?family=Lato:400,300,700' rel='stylesheet' type='text/css'/>
        <!--https://github.com/nguyenbathanh/react-loading-screen-->
        <style type="text/css">
          body,html{height:100%;margin:0;padding:0;width:100%}body{font-family:Roboto,sans-serif;font-size:13px;-webkit-font-smoothing:antialiased}.ipl-progress-indicator.available{opacity:0}.ipl-progress-indicator{background-color:#f5f5f5;width:100%;height:100%;position:fixed;opacity:1;pointer-events:none;-webkit-transition:opacity cubic-bezier(.4,0,.2,1) 436ms;-moz-transition:opacity cubic-bezier(.4,0,.2,1) 436ms;transition:opacity cubic-bezier(.4,0,.2,1) 436ms;z-index:9999}.insp-logo-frame{display:-webkit-flex;display:-moz-flex;display:flex;-webkit-flex-direction:column;-moz-flex-direction:column;flex-direction:column;-webkit-justify-content:center;-moz-justify-content:center;justify-content:center;-webkit-animation:fadein 436ms;-moz-animation:fadein 436ms;animation:fadein 436ms;height:98%}.insp-logo-frame-img{width:112px;height:112px;-webkit-align-self:center;-moz-align-self:center;align-self:center;border-radius:50%}.ipl-progress-indicator-head{background-color:#c6dafc;height:4px;overflow:hidden;position:relative}.ipl-progress-indicator .first-indicator,.ipl-progress-indicator .second-indicator{background-color:#056D8B;bottom:0;left:0;right:0;top:0;position:absolute;-webkit-transform-origin:left center;-moz-transform-origin:left center;transform-origin:left center;-webkit-transform:scaleX(0);-moz-transform:scaleX(0);transform:scaleX(0)}.ipl-progress-indicator .first-indicator{-webkit-animation:first-indicator 2s linear infinite;-moz-animation:first-indicator 2s linear infinite;animation:first-indicator 2s linear infinite}.ipl-progress-indicator .second-indicator{-webkit-animation:second-indicator 2s linear infinite;-moz-animation:second-indicator 2s linear infinite;animation:second-indicator 2s linear infinite}.ipl-progress-indicator .insp-logo{animation:App-logo-spin infinite 20s linear;border-radius:50%;-webkit-align-self:center;-moz-align-self:center;align-self:center}@keyframes App-logo-spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}@-moz-keyframes fadein{from{opacity:0}to{opacity:1}}@keyframes fadein{from{opacity:0}to{opacity:1}}@keyframes first-indicator{0%{transform:translate(0) scaleX(0)}25%{transform:translate(0) scaleX(.5)}50%{transform:translate(25%) scaleX(.75)}100%,75%{transform:translate(100%) scaleX(0)}}@keyframes second-indicator{0%,60%{transform:translate(0) scaleX(0)}80%{transform:translate(0) scaleX(.6)}100%{transform:translate(100%) scaleX(.1)}}
        </style>
      </head>
      <body>
        <noscript>
         You need to enable JavaScript to run this app.
        </noscript>
        <div class="ipl-progress-indicator" id="ipl-progress-indicator">
          <div class="ipl-progress-indicator-head">
            <div class="first-indicator"></div>
            <div class="second-indicator"></div>
          </div>
          <div class="insp-logo-frame">
            <svg width="112" class="insp-logo-frame-img" height="112" xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 60.014069 60.782681">
              <defs id="defs4275"/>
              <sodipodi:namedview id="base" pagecolor="#ffffff" bordercolor="#666666" borderopacity="1.0" inkscape:pageopacity="0.0" inkscape:pageshadow="2" inkscape:zoom="11.2" inkscape:cx="22.126405" inkscape:cy="23.998865" inkscape:document-units="px" inkscape:current-layer="layer1"
                showgrid="false" fit-margin-top="0" fit-margin-left="0" fit-margin-right="0" fit-margin-bottom="0" inkscape:window-width="1920" inkscape:window-height="1010" inkscape:window-x="0" inkscape:window-y="33" inkscape:window-maximized="1"/>
              <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1" transform="translate(473.57846,-246.47086)">
                <path
                  style="fill:#f49a00;fill-opacity:0.88235294;stroke:none;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:2, 1;stroke-dashoffset:0;stroke-opacity:1"
                  d="m -440.48431,246.47086 c -5.28998,0.008 -10.27182,2.51193 -13.46484,6.76758 0.99008,-0.14019 1.98836,-0.21457 2.98828,-0.22265 12.4052,0.005 22.49122,10.0016 22.60742,22.40625 3.06558,-3.18124 4.78324,-7.44178 4.78906,-11.87891 -1.2e-4,-9.42874 -7.57537,-17.07219 -16.91992,-17.07227 z"
                  id="path4165"
                  inkscape:connector-curvature="0"
                  sodipodi:nodetypes="cccccc"/>
                <path
                  style="fill:#f42500;fill-opacity:0.88235294;stroke:none;stroke-width:0.97562164;stroke-miterlimit:4;stroke-dasharray:1.95124325, 0.97562163;stroke-dashoffset:0;stroke-opacity:1"
                  d="m -450.96078,253.01637 a 22.618118,22.618118 0 0 0 -22.61768,22.61949 22.618118,22.618118 0 0 0 22.61768,22.61768 22.618118,22.618118 0 0 0 22.61769,-22.61768 22.618118,22.618118 0 0 0 -22.61769,-22.61949 z m 0,9.04888 a 13.570871,13.570871 0 0 1 13.57061,13.57061 13.570871,13.570871 0 0 1 -13.57061,13.5706 13.570871,13.570871 0 0 1 -13.5706,-13.5706 13.570871,13.570871 0 0 1 13.5706,-13.57061 z"
                  id="path4147-6"
                  inkscape:connector-curvature="0"/>
              </g>
            </svg>
          </div>
        </div>
        <div id="root">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
          ${process.env.NODE_ENV === 'production' ?
          `//<![CDATA[
          window.webpackManifest = ${JSON.stringify(chunkManifest)};
          //]]>` : ''}
        </script>
        <script src='${process.env.NODE_ENV === 'production' ? assetsManifest['/vendor.js'] : '/vendor.js'}'></script>
        <script src='${process.env.NODE_ENV === 'production' ? assetsManifest['/app.js'] : '/app.js'}'></script>
      </body>
    </html>
  `;
};

const renderError = err => {
  const softTab = '&#32;&#32;&#32;&#32;';
  const errTrace = process.env.NODE_ENV !== 'production' ?
    `:<br><br><pre style="color:red">${softTab}${err.stack.replace(/\n/g, `<br>${softTab}`)}</pre>` : '';
  return renderFullPage(`Server Error${errTrace}`, {});
};

// Server Side Rendering based on routes matched by React-router.
app.use((req, res, next) => {
  // https://enable-cors.org/server_expressjs.html
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
    if (err) {
      return res.status(500).end(renderError(err));
    }

    if (redirectLocation) {
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    }

    if (!renderProps) {
      return next();
    }

    const store = configureStore();

    return fetchComponentData(store, renderProps.components, renderProps.params)
      .then(() => {
        const initialView = renderToString(
          <Provider store={store}>
            <IntlWrapper>
              <RouterContext {...renderProps} />
            </IntlWrapper>
          </Provider>
        );
        const finalState = store.getState();

        res
          .set('Content-Type', 'text/html')
          .status(200)
          .end(renderFullPage(initialView, finalState));
      })
      .catch((error) => next(error));
  });
});

// start app
app.listen(serverConfig.port, serverConfig.host, (error) => {
  if (!error) {
    console.log(`MERN is running on port: ${serverConfig.port}! Build something amazing!`); // eslint-disable-line
  }
});

export default app;
