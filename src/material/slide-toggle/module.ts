/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {NgModule} from '@angular/core';
import {MatCommonModule, MatRippleModule} from '@angular/material/core';
import {MatSlideToggle} from './slide-toggle';
import {MatSlideToggleRequiredValidator} from './slide-toggle-required-validator';

/** This module is used by both original and MDC-based slide-toggle implementations. */
@NgModule({
  imports: [MatSlideToggleRequiredValidator],
  exports: [MatSlideToggleRequiredValidator],
})
export class _MatSlideToggleRequiredValidatorModule {}

@NgModule({
  imports: [
    _MatSlideToggleRequiredValidatorModule,
    MatCommonModule,
    MatRippleModule,
    MatSlideToggle,
  ],
  exports: [_MatSlideToggleRequiredValidatorModule, MatSlideToggle, MatCommonModule],
})
export class MatSlideToggleModule {}
