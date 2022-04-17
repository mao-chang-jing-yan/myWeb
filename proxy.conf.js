/**
 * For more configuration, please refer to https://angular.io/guide/build#proxying-to-a-backend-server
 *
 * 更多配置描述请参考 https://angular.cn/guide/build#proxying-to-a-backend-server
 *
 * Note: The proxy is only valid for real requests, Mock does not actually generate requests, so the priority of Mock will be higher than the proxy
 */
module.exports = {
  /**
   * The following means that all requests are directed to the backend `https://localhost:9000/`
   */
  // '/api/v1': {
  //   // target: 'http://47.100.82.173:8002/api/v1',
  //   target: 'http://127.0.0.1:8002',
  //   secure: false, // Ignore invalid SSL certificates
  //   changeOrigin: true
  // }
};
