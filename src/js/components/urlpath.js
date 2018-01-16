var modal = weex.requireModule('modal');
/*modal.toast({
    message: 'I am a toast.' + JSON.stringify(weex.config),
    duration: 3
});
*/
var bundleUrl = function (getConfig) {
    var platform = new String(weex.config.env.platform);
    var bundleUrl = new String(weex.config.bundleUrl.toString());
    var nativeBase = "";
    console.log("platform.toLowerCase()", platform.toLowerCase());
    if(platform.toLowerCase() == "android"){
        bundleUrl = bundleUrl.substring(0, bundleUrl.lastIndexOf('dist'));
        nativeBase = bundleUrl + "dist";
        //nativeBase = "http://172.19.6.35:8081/dist/"
    }else if(platform.toLowerCase() == "ios"){
        //nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
        bundleUrl = bundleUrl.substring(0, bundleUrl.lastIndexOf('bundlejs'));
        nativeBase = bundleUrl + "bundlejs"
        //nativeBase = "http://172.19.6.35:8081/dist/"
    }else if(platform.toLowerCase() == "web"){
        if(bundleUrl.startsWith("http")){
            var bundleUrls = bundleUrl.split('\/');
            if(bundleUrls.length >= 3){
                bundleUrl = bundleUrls[0]+ "//" + bundleUrls[2] + "/"
            }
            nativeBase =bundleUrl + 'web/index.html?page=../dist' ;
        }else{
            bundleUrl = bundleUrl.substring(0,bundleUrl.lastIndexOf('index.html'));
            //nativeBase =bundleUrl + 'index.html?page=../dist' ;
            nativeBase = 'index.html?page=../dist' ;
        }

    }else{
        modal.toast({
            message: '设备无法识别',
            duration: 3
        })
    }
    console.log("nativeBase" + nativeBase);
    return nativeBase;

};
export default bundleUrl;