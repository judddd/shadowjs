#!name=chatamz
#!desc=chatamz

[rewrite_local]
https:\/\/api\.ai520\.co\/chatapi\/\/member\/(\/wallet\/) url script-response-body https://github.com/judddd/shadowjs/blob/main/chatamz.js

[mitm]
hostname = api.ai520.co
*/
if ($response.body) {
    let responseBody = $response.body;
    
    let responseObject = JSON.parse(responseBody);
    responseObject.data.message = "123445";
   
 
    if (responseObject.result && Array.isArray(responseObject.result)) {
        responseObject.result.forEach(item => {
            if (item.hasOwnProperty('availableValue')) {
                item.availableValue = 2000;
            }
        });
    }
    
    $done({ body: JSON.stringify(responseObject) });
} else {
    $done({});
}
