/**
 * © 2017 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: MIT
 */

'use strict';

var gulp = require('gulp');
var del = require('del');
const fs = require('fs');
var liferayThemeTasks = require('liferay-theme-tasks');
const build = require('liferay-theme-tasks/theme/tasks/build');

var DEPLOYDIR="/liferay/docker/lr-dxp-7.3-sandbox/liferay/deploy";

liferayThemeTasks.registerTasks({
	gulp,
});

gulp.task('custom:clean', function() {
	return del([
		//'dist/report.csv',
		// here we use a globbing pattern to match everything inside the `mobile` folder
		//'dist/mobile/**/*',
		// we don't want to clean this file though so we negate the pattern
		//'!dist/mobile/deploy.json'
		'./dist/*'
	  ]);
});	

gulp.task('custom:deploy', function() {
	return gulp.src('./dist/*.war')
	  .pipe(gulp.dest(DEPLOYDIR));
});

gulp.task('custom', function() {
	return gulp.series("build:clean","custom:clean","build","custom:deploy")();
});	



async function asyncAwaitTask() {
  const { version } = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  console.log(version);
  await Promise.resolve('some result');
}

exports.default = asyncAwaitTask;