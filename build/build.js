'use strict';
require('./check-versions')();

process.env.NODE_ENV = 'production';

const ora = require('ora');
const rm = require('rimraf');
const path = require('path');
const chalk = require('chalk');
const webpack = require('webpack');
const config = require('../config');
const webpackConfig = require('./webpack.prod.conf');
const fs = require('fs');
const fixStaticPath = require('./fix-static-path');

var archiver = require('archiver');

const spinner = ora('building for production...');
spinner.start();

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err;
  webpack(webpackConfig, (err, stats) => {
    spinner.stop();
    if (err) throw err;
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
        chunks: false,
        chunkModules: false
      }) + '\n\n');

    fixStaticPath();

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'));
      process.exit(1)
    }

    /*
     var projectPath = path.resolve(__dirname, '../www/project.zip');
     var output = fs.createWriteStream(projectPath);
     var archive = archiver('zip', {
     zlib: { level: 9 } // Sets the compression level.
     });
     output.on('close', function() {
     console.log(archive.pointer() + ' total bytes');
     console.log('archiver has been finalized and the output file descriptor has closed.');
     });
     output.on('end', function() {
     console.log('Data has been drained');
     });
     archive.pipe(output);

     archive.glob(projectPath + '/!*');

     fs.readdir(projectPath, (err, files) => {
     files.forEach(file => {
     console.log(file);
     });
     })

     archive.append('string cheese!', { name: 'file2.txt' });
     archive.finalize()
     */

    console.log(chalk.cyan('  Build complete.\n'));
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
});
