require('babel-register');

const chai = require('chai');
const sinonChai = require('sinon-chai');
const chaiEnzyMe = require('chai-enzyme');

chai.use(chaiEnzyMe());
chai.use(sinonChai);

// const testsContext = require.context('.', true, /-test\.(js|jsx)$/);
// testsContext.keys().forEach(testsContext);
const jsdom = require("jsdom").jsdom;
const doc = jsdom(`<html><body></body></html>`);
global.window = doc.defaultView;
global.MouseEvent = global.window.MouseEvent;
global.document = doc;
global.navigator = {
    userAgent: 'node.js'
};

global.SVGElement = function () { };
global.getComputedStyle = window.getComputedStyle;

// const componentsContext = require.context('.', true, /\.(jsx|es6)$/);
// componentsContext.keys().forEach(componentsContext);
