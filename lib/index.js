const updateNotifier = require('update-notifier');
const chalk = require('chalk');
const pkg = require('../package.json');

module.exports = util = {};

util.checkVersion = function () {

  const notifier = updateNotifier({
    // pkg,
  });

  if(notifier.update) {
    console.log();
    console.log(chalk.yellow('  A newer version of maius-cli is available. Run cmd to update'));
    console.log();;
    // console.log('    $ ' + chalk.green('npm install -g maius-cli'));
    console.log('      latest:    ' + chalk.green(notifier.update.latest));
    console.log('      installed: ' + chalk.red(notifier.update.current));
    console.log();
  }
};
