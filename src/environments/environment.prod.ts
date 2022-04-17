import { Environment } from '@delon/theme';
import * as apis from "./apis";

export const environment = {
  production: true,
  useHash: true,
  api: {
    baseUrl: './',
    refreshTokenEnabled: true,
    refreshTokenType: 'auth-refresh'
  },
  apis: {...apis},
} as Environment;
