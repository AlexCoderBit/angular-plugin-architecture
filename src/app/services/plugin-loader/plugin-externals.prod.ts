import * as core from '@angular/core';
import * as common from '@angular/common';
import * as forms from '@angular/forms';
import * as router from '@angular/router';
import * as rxjs from 'rxjs';
import * as tslib from 'tslib';
import * as shared from 'shared';

// redux
import * as store from '@angular-redux/store';
import * as redux from 'redux';
import * as devtools from 'redux-devtools-extension';
import * as logger from 'redux-logger';

export const PLUGIN_EXTERNALS_MAP = {
  'ng.core': core,
  'ng.common': common,
  'ng.forms': forms,
  'ng.router': router,
  rxjs,
  tslib,
  'ng.store': store,
  redux,
  'redux-devtools-extension': devtools,
  'redux-logger': logger,
  shared: { ...shared, ...require('shared/shared.ngfactory') }
};

declare let require: any;
