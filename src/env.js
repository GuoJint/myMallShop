let baseURL;
switch(process.env.NODE_ENV){
    case "dev":
        baseURL = "http://dev-mall-pre.springboot.cn"
        break;
    case "test":
        baseURL = "http://test-mall-pre.springboot.cn"
        break;
    case "pro":
        baseURL = "http://mall-pre.springboot.cn"
        break;
    default:
        baseURL = "http://mall-pre.springboot.cn"
        break;
}
export default baseURL