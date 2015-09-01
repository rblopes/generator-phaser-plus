/*
 * Browserify entry point.
 * ============================================================================
 *
 * This file is required by Browserify as your application bundle entry
 * point. It's responsible for bootstraping the Babel runtime environment
 * (the polyfill) and exposing your main application module to the browser.
 */


// Import Babel runtime module.
import 'babelify/polyfill';

// Expose the application main routine.
export { default } from './app';
