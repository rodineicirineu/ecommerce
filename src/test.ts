// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
import { UtilsModule } from './app/presentation/view/shared/modules/utils/utils.module';
import { CurrencyPipe } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import { httpInterceptorProviders } from './app/infra/http_interceptor';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MaterialModule } from './app/presentation/view/shared/modules/material/material.module';
import { AppRoutingModule } from './app/app-routing.module';

declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp): {
    keys(): string[];
    <T>(id: string): T;
  };
};

beforeEach((() => {
  TestBed.configureTestingModule({
    imports: [
      UtilsModule,
      MaterialModule,
      AppRoutingModule,
      TranslateModule.forRoot()
    ],
    providers: [
      CurrencyPipe,
      TranslateService,
      httpInterceptorProviders,
      {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
      }
    ]
  })
  .compileComponents();
}));

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
