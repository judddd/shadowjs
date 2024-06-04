/*
[rewrite_local]

^https:\/\/api\.ai520\.co\/chatapi\/(member\/wallet|auth\/memberInfo) url script-response-body https://raw.githubusercontent.com/judddd/shadowjs/main/chatamz.js

[mitm]

hostname = api.ai520.co
*/

var url = $request.url;
var responseBody = $response.body;
var objc = JSON.parse($response.body);

if ($response.body) {
	if (url.includes("https://api.ai520.co/chatapi/auth/memberInfo")) {
		
	 objc ={
    "code": 200,
    "extras": null,
    "message": "",
    "result": {
        "account": "130****1796",
        "authorizes": [],
        "avatar": null,
        "contact": "<p>遇到问题需要协助？扫码可联系客服寻求帮助！</p><p><img src=\"https://s2.loli.net/2023/05/05/YsXa32Lo7w6fOWQ.jpg\" alt=\"\" width=\"150\" height=\"149\" /></p>",
        "email": "123",
        "groupInfo": {
            "expVal": 10,
            "iconUrl": "https://api.ai520.co/upload/2023/09/28/14549763653573.png",
            "id": 13922195697093,
            "privileges": [
                {
                    "aiModels": null,
                    "customAIModels": null,
                    "levelPrivilegType": 2,
                    "levelPrivilegTypeName": "基础功能",
                    "value": null
                },
                {
                    "aiModels": [
                        10,
                        12,
                        13,
					    20,
					    21
                    ],
                    "customAIModels": null,
                    "levelPrivilegType": 200,
                    "levelPrivilegTypeName": "基础对话模型",
                    "value": -0.7
                },
                {
                    "aiModels": null,
                    "customAIModels": null,
                    "levelPrivilegType": 200,
                    "levelPrivilegTypeName": "画画Relax模式",
                    "value": null
                },
                {
                    "aiModels": null,
                    "customAIModels": null,
                    "levelPrivilegType": 3,
                    "levelPrivilegTypeName": "画廊",
                    "value": null
                },
                {
                    "aiModels": null,
                    "customAIModels": null,
                    "levelPrivilegType": 4,
                    "levelPrivilegTypeName": "写作",
                    "value": null
                },
                {
                    "aiModels": null,
                    "customAIModels": null,
                    "levelPrivilegType": 5,
                    "levelPrivilegTypeName": "思维导图",
                    "value": null
                },
                {
                    "aiModels": null,
                    "customAIModels": null,
                    "levelPrivilegType": 202,
                    "levelPrivilegTypeName": "画画图生文",
                    "value": null
                }
            ],
            "title": "黄金会员"
        },
        "inviteCode": "GZA88P4RN",
        "isVerify": true,
        "nickName": "M_NVyVmvYW",
        "phone": "130****1796",
        "timeCards": [],
        "wallets": [
            {
                "availableValue": 11,
                "memberWalletType": 1,
                "totalValue": 11
            },
            {
                "availableValue": 261,
                "memberWalletType": 10,
                "totalValue": 5500
            },
            {
                "availableValue": 28,
                "memberWalletType": 20,
                "totalValue": 28
            }
        ]
    },
    "type": "success"
}
     
     $done({ body: JSON.stringify(objc) });
 
	}
    responseBody = responseBody.replace(/("availableValue"\s*:\s*)\d+/g, '$16666');
    
    let responseObject = JSON.parse(responseBody);
    responseObject.message = "123445";

     
    $done({ body: JSON.stringify(responseObject) });
    
}
