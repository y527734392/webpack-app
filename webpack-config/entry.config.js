/**
 * Created by Muyi on 17/9/12.
 */

var path = require('path');
var dirVars = require('./base/dir-vars.config.js');
var pageArr = require('./base/page-entries.config.js');
var configEntry = {};

pageArr.forEach((page) => {
    configEntry[page] = path.resolve(dirVars.pagesDir, page + '/index');
});

module.exports = configEntry;
