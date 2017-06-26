import { OpaqueToken } from '@angular/core';

export const APPCONFIG_TOKEN = new OpaqueToken('app.config');

export const APPCONFIG = {
  "WebApiUrl": "http://localhost:8088/api/"
}
