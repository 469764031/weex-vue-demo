let utilFunc = {
    initIconFont(){
        var platform = new String(weex.config.env.platform);
        var url = "";
        if(platform.toLowerCase() == "web") {
            try{
                if (/android/i.test(navigator.userAgent)) {
                    url = "url('font_492305_6z7qmjd2lbvmfgvi.ttf') format('truetype')";
                }else{
                    url = "url('https://at.alicdn.com/t/font_492305_6z7qmjd2lbvmfgvi.ttf') format('truetype')";
                }
            }catch (e){
                url = "url('https://at.alicdn.com/t/font_492305_6z7qmjd2lbvmfgvi.ttf') format('truetype')";
            }
        }
        let domModule = weex.requireModule('dom');
        domModule.addRule('fontFace', {
            'fontFamily': "iconfont",
            'src': url
        });
    }
}
export default utilFunc;