const chalk = require('chalk');

const prefix = '   maius: ';

/**
 * print normal log to the console
 *
 * @param {any} args
 */

exports.log = (...args) => {
  args.unshift('white');
  _log(...args);
};

/**
 * print something with success info to the console
 *
 * @param {any} args
 */

exports.success = (...args) => {
  args.unshift('green');
  _log(...args);
}

/**
 * print something with error info to the console
 *
 * @param {any} args
 */

exports.error = (...args) => {
  args.unshift('red');
  _log(...args);
}

function _log(...args) {
  const color = args.shift();
  console.log.apply(console.log, [
    chalk[color](prefix), ...args
  ]);
}






