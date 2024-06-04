#!name=chatamz
#!desc=chatamz

[rewrite_local]
chatamz = type=http-response, pattern=https:\/\/api\.ai520\.co\/chatapi\/\/member\/(\/wallet\/), script-path=https://raw.githubusercontent.com/judddd/shadownjs/main/chatamz.js, requires-body=true, max-size=-1, timeout=60

[mitm]
hostname = api.ai520.co
*/
if ($response.body) {
    let responseBody = $response.body;
    
    let responseObject = JSON.parse(responseBody);
    
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
