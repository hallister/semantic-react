require('babel-core/polyfill');

const testsContext = require.context('./components/', true, /-test\.js?$/);
testsContext.keys().forEach(testsContext);

const componentsContext = require.context('./components/', true, /\.(jsx|es6)$/);
componentsContext.keys().forEach(componentsContext);
