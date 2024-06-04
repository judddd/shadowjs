/*
[rewrite_local]

^https:\/\/api\.ai520\.co\/chatapi\/(member\/wallet|auth\/memberinfo) url script-response-body https://raw.githubusercontent.com/judddd/shadowjs/main/chatamz.js

[mitm]

hostname = api.ai520.co
*/

if ($response.body) {
    let responseBody = $response.body;
    response.body = response.body.replace(/("aiModels"\s*:\s*\[10,\s*12,\s*13\])/, '$1, 20, 21');
    responseBody = responseBody.replace(/("availableValue"\s*:\s*)\d+/g, '$112000');
    
    let responseObject = JSON.parse(responseBody);
    responseObject.message = "123445";
    if (responseObject.result.groupInfo.title){
      responseObject.result.groupInfo.title = "黄金会员";
    }
     
    $done({ body: JSON.stringify(responseObject) });
} else {
    $done({body: "?"});
}
