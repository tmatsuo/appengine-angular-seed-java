/*
 * Copyright 2013 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you
 * may not use this file except in compliance with the License. You may
 * obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
 * implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

basePath = '../';

files = [
    JASMINE,
    JASMINE_ADAPTER,
    'angular-seed/app/lib/angular/angular.js',
    'angular-seed/app/lib/angular/angular-*.js',
    'angular-seed/test/lib/angular/angular-mocks.js',
    'src/main/webapp/js/**/*.js',
    'src/test/js/unit/**/*.js'
];

// web server port
port = 6060;

// cli runner port
runnerPort = 6100;

autoWatch = true;

// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = [
  'Chrome'
];

junitReporter = {
    outputFile: 'test_out/unit.xml',
    suite: 'unit'
};
