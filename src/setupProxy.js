const proxy=require('http-proxy-middleware');
module.exports=function(app){
    app.use(proxy('/',{target:"https://cp4i-jumpstart-backend-1.eu-gb.mybluemix.net/api/jumpstat/fetchUserDataJumpstart"}));
    app.use(proxy('/',{target:"https://cp4i-jumpstart-backend-1.eu-gb.mybluemix.net/api/jumpstat/UpdateUserPassword"}));
    app.use(proxy('/tools',{target:"https://cp4i-jumpstart-backend-1.eu-gb.mybluemix.net/api/jumpstat/fetchUserDataJumpstart"}));

}