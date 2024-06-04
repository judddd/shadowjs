/*
[rewrite_local]

^https:\/\/api\.ai520\.co\/chatapi\/member\/wallet url script-response-body https://raw.githubusercontent.com/judddd/shadowjs/main/chatamz.js

[mitm]

hostname = api.ai520.co
*/

if ($response.body) {
    let responseBody = $response.body;
    responseBody = responseBody.replace(/("availableValue"\s*:\s*)\d+/g, '$112000');
    
    let responseObject = JSON.parse(responseBody);
    responseObject.message = "123445";
     
    $done({ body: JSON.stringify(responseObject) });
} else {
    $done({body: "?"});
}
