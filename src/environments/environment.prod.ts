import { Environment } from '@delon/theme';
import * as apis from "./apis";

export const environment = {
  production: true,
  useHash: true,
  api: {
    baseUrl: './',
    refreshTokenEnabled: true,
    refreshTokenType: 're-request'
  },
  apis: {...apis},
} as Environment;
