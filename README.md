# OlympicsServer

This is a sample project developed using NodeJs and ExpressJS, it is a simple example of a node server using Mongoose models to supply data in a Restful manner.

It servers the OlympicsClient project also found in my Github repos


## Run server
Run `gulp run` for a dev server. The server will be run on port 4000 unless you supply a port via an environment variable

## Running unit tests

Run `gulp test` to execute the unit tests via Mocha.

## Improvements to be made

* Implement error handling, currently the application doesn't handle errors 
* Improve the build process and include a production build
* Improve the immutability of the app as it contains some impure functions
* Currently is too coupled to Mongoose, improve DB interface so the type of DB used is irrelevant
