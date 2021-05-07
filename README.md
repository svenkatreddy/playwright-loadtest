# playwright-loadtest

[![Build Status](https://travis-ci.org/svenkatreddy/playwright-loadtest.svg?branch=master)](https://travis-ci.org/svenkatreddy/playwright-loadtest)

[![NPM](https://nodei.co/npm/playwright-loadtest.png?stars=true)](https://nodei.co/npm/playwright-loadtest/)

playwright-loadtest provides a simple way to launch multiple playwright instances in parallel to run a simple load test on your site.

## Installation

Install via npm:

    $ npm install -g playwright-loadtest

## Usage

To run a basic load test, just supply the name of a playwright script to run:

    $ playwright-loadtest --file=sample.js

This will run the specified playwright script once in chrome headless instance.

### Parameters

`--s` flag is to mention sample size

`--c` flag is to mention number of concurrent executions per sample

`--silent` boolean to enable or disable logs

`--outputFile` send performance results to output file

    $ playwright-loadtest --s=100 --c=25 --file=sample.js
    
This will run a total of 100 runs through the specified playwright script across 25 concurrent chrome headless instances.


### Examples

    $ playwright-loadtest --file=sample.js
    
    $ playwright-loadtest --file=./test/sample.js  --s=100 --c=25
    
    $ playwright-loadtest --file=./test/sample.js  --s=100 --c=25 --silent=true
    
    $ playwright-loadtest --file=./test/sample.js  -s 100 -c 25

    $ playwright-loadtest --file=./test/sample.js  -s 100 -c 25 --outputFile=performance.json


### use as node module 

    const startPlaywrightLoadTest = require('playwright-loadtest');
    const results = await startPlaywrightLoadTest({
        file, // path to file
        samplesRequested: 2, // number of samples requested
        concurrencyRequested: 2, // number of concurrency requested
    });
    console.log(results);
    
   
## Feedback   

please provide feedback or feature requests using issues link

