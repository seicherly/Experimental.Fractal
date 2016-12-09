'use strict';

/*
* Require the path module
*/
const path = require('path');

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create();

/*
 * Give your project a title.
 */
fractal.set('project.title', 'My Pattern Library Project');

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(__dirname, 'components'));

/*
 * Tell Fractal where to look for documentation pages.
 */
// fractal.docs.set('path', path.join(__dirname, 'docs'));
fractal.docs.set('path', path.join(__dirname, 'docs'));

fractal.docs.set('default.status', 'draft');
fractal.docs.set('label', 'Custom Label set in fractal.js');

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, 'public'));

/**
 * Tell Fractal where to build out static site
 */
fractal.web.set('builder.dest', '../build');

/**
 * Tell Fractal to watch for file changes and auto-refresh pages
 */
fractal.web.set('server.sync', true);
fractal.web.set('server.syncOptions', {
    open: true,
    browser: ['google chrome'],
    notify: true
});


/**
 * Theme
 */
const mandelbrot = require('@frctl/mandelbrot');
const myCustomTheme = mandelbrot({
    skin: "orange"
});
fractal.web.theme(myCustomTheme);


/**
 * Components
 */
fractal.components.set('statuses', {
    wip: {
        label: 'wip',
        description: 'Component is still being designed/developed',
        color: "#666"
    },
    prototype: {
        label: "Prototype",
        description: "Component is being tested for functionality",
        color: '#0F0'
    },
    reviewing: {
        label: "Under Review",
        description: "Component is being reviewed by stakeholders",
        color: '#F00'
    },
    ready: {
        label: "Ready",
        description: "Component is ready to be used in projects",
        color: "green"
    }
});


/**
 * Documentation
 */
fractal.docs.set('statuses', {
    draft: {
        label: 'Draft',
        description: 'Work in progress.',
        color: '#FF3333'
    },
    ready: {
        label: 'Ready',
        description: 'Ready for referencing.',
        color: '#29CC29'
    }
});