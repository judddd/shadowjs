/*
[rewrite_local]

^https:\/\/api\.ai520\.co\/chatapi\/(member\/wallet|auth\/memberInfo) url script-response-body https://raw.githubusercontent.com/judddd/shadowjs/main/chatamz.js

[mitm]

hostname = api.ai520.co
*/

var url = $request.url;
var responseBody = $response.body;

if ($response.body) {
    responseBody = responseBody.replace(/("availableValue"\s*:\s*)\d+/g, '$16666');
    
    let responseObject = JSON.parse(responseBody);
    responseObject.message = "123445";

     
    $done({ body: JSON.stringify(responseObject) });
    
}
