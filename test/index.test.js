var isMongodbRunning = require('../');
var isMongodbRunningPromises = require('../promise');
var assert = require('assert');

describe('is-mongodb-running', function() {
  before(require('mongodb-runner/mocha/before'));
  after(require('mongodb-runner/mocha/after'));
  it('should exist', function() {
    assert(isMongodbRunning);
  });

  it('should work', function() {
    // TODO: Won't be able to make this work until I can consistently get mongodb-runner to start/stop the server
    // appropriately
    // isMongodbRunning(args, function(err, res) {
    //   // test with json and no-json
    //   // test with port, pid, and none

    //   // assert
    //   // assert no err
    //   // assert that it is running
    //   if (err) {
    //     if (args.json) {
    //       err = JSON.stringify(err, null, 2);
    //     }
    //     console.error(chalk.red(figures.cross), err.message); // eslint-disable-line no-console
    //     console.error(chalk.gray(err.stack)); // eslint-disable-line no-console
    //     process.exit(1);
    //     return;
    //   }

    //   if (args.json) {
    //     err = JSON.stringify(err, null, 2);
    //   }
    //   console.error(chalk.red(figures.cross), err.message); // eslint-disable-line no-console
    //   console.error(chalk.gray(err.stack)); // eslint-disable-line no-console
    //   process.exit(1);

    // // assert(isMongodbRunningPromises);
  });
});

describe('is-mongodb-running-with-promises', function() {
  before(require('mongodb-runner/mocha/before'));
  after(require('mongodb-runner/mocha/after'));
  it('should exist', function() {
    assert(isMongodbRunningPromises);
  });
});
