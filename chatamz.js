/*

[rewrite_local]

^https:\/\/api\.ai520\.co\/chatapi\/member\/wallet url script-response-body https://github.com/judddd/shadowjs/blob/main/chatamz.js

[mitm]

hostname = api.ai520.co
*/

if ($response.body) {
    let responseBody = $response.body;
    responseBody = responseBody.replace(/("availableValue"\s*:\s*)0/g, '$12000')
    
    let responseObject = JSON.parse(responseBody);
    responseObject.message = "123445";
     
    $done({ body: JSON.stringify(responseObject) });
} else {
    $done({body: "?"});
}
