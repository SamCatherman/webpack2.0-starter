I wanted to learn to configure a webpack environment from scratch. Following a tutorial from Indrek Lasn (https://codeburst.io/easy-guide-for-webpack-2-0-from-scratch-fe508a3ce44e).

notes and thoughts:

At its most basic level, aside from installing a few dependencies webpack seems incredibly simple to get started. I plan on exploring more of the features like hot reloading and SCSS compilation.

11/16: Adding functionality through the webpack.config file seems to be a useful pattern. So far I've added watch, babel, and loaders for es6 and scss.

11/18: Added an organizational structure for the growing codebase in my webpack starter project. I extracted my SCSS to a dedicated file, added a dev-server to run on localhost, and refactored the hot-reloading to work with it. Added plugins to minify js and css files for production. I'm going to stop here and switch to a new branch so I can add in some features from react. 
