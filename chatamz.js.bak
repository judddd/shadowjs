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
            "expVal": 150,
            "iconUrl": "https://api.ai520.co/upload/2023/09/28/14549763653573.png",
            "id": 13922195697093,
            "privileges": [{
				"aiModels": [10, 29, 31, 12, 13],
				"customAIModels": [],
				"levelPrivilegType": 100,
				"levelPrivilegTypeName": "基础对话模型",
				"value": null
			}, {
				"aiModels": [102, 26, 302],
				"customAIModels": [],
				"levelPrivilegType": 101,
				"levelPrivilegTypeName": "高级对话模型",
				"value": null
			}, {
				"aiModels": [],
				"customAIModels": [],
				"levelPrivilegType": 102,
				"levelPrivilegTypeName": "文档检索",
				"value": null
			}, {
				"aiModels": [],
				"customAIModels": [],
				"levelPrivilegType": 103,
				"levelPrivilegTypeName": "PPT（待上线）",
				"value": null
			}, {
				"aiModels": [],
				"customAIModels": [],
				"levelPrivilegType": 200,
				"levelPrivilegTypeName": "画画Relax模式",
				"value": null
			}, {
				"aiModels": [],
				"customAIModels": [],
				"levelPrivilegType": 201,
				"levelPrivilegTypeName": "画画Fast模式",
				"value": null
			}, {
				"aiModels": [],
				"customAIModels": [],
				"levelPrivilegType": 202,
				"levelPrivilegTypeName": "画画图生文",
				"value": null
			}, {
				"aiModels": [],
				"customAIModels": [],
				"levelPrivilegType": 5,
				"levelPrivilegTypeName": "思维导图",
				"value": null
			}, {
				"aiModels": [],
				"customAIModels": [],
				"levelPrivilegType": 3,
				"levelPrivilegTypeName": "画廊",
				"value": null
			}, {
				"aiModels": [],
				"customAIModels": [],
				"levelPrivilegType": 4,
				"levelPrivilegTypeName": "写作",
				"value": null
			}, {
				"aiModels": [],
				"customAIModels": [],
				"levelPrivilegType": 1,
				"levelPrivilegTypeName": "基础功能",
				"value": null
			}, {
				"aiModels": [],
				"customAIModels": [],
				"levelPrivilegType": 203,
				"levelPrivilegTypeName": "画画图片混合",
				"value": null
			}, {
				"aiModels": [],
				"customAIModels": [],
				"levelPrivilegType": 2,
				"levelPrivilegTypeName": "站内折扣",
				"value": 0.95
			}, {
				"aiModels": [],
				"customAIModels": [],
				"levelPrivilegType": 105,
				"levelPrivilegTypeName": "语音对话",
				"value": null
			}, {
				"aiModels": [],
				"customAIModels": [],
				"levelPrivilegType": 6,
				"levelPrivilegTypeName": "上传文件",
				"value": null
			}, {
				"aiModels": [],
				"customAIModels": [],
				"levelPrivilegType": 106,
				"levelPrivilegTypeName": "聊天插件",
				"value": null
			}, {
				"aiModels": [],
				"customAIModels": ["gpt-4o"],
				"levelPrivilegType": 107,
				"levelPrivilegTypeName": "第三方对话模型",
				"value": null
			}],
            "title": "黄金会员"
        },
        "inviteCode": "GZA88P4RN",
        "isVerify": true,
        "nickName": "M_NVyVmvYW",
        "phone": "130****1796",
        "timeCards": [],
        "wallets": [
            {
                "availableValue": 150,
                "memberWalletType": 1,
                "totalValue": 160
            },
            {
                "availableValue": 150,
                "memberWalletType": 10,
                "totalValue": 160
            },
            {
                "availableValue": 150,
                "memberWalletType": 20,
                "totalValue": 160
            }
        ]
    },
    "type": "success"
}
     
     $done({ body: JSON.stringify(objc) });
 
	}
    responseBody = responseBody.replace(/("availableValue"\s*:\s*)\d+/g, '$1150');
    responseBody = responseBody.replace(/("totalValue"\s*:\s*)\d+/g, '$1160');
    
    let responseObject = JSON.parse(responseBody);
    responseObject.message = "123445";

     
    $done({ body: JSON.stringify(responseObject) });
    
}
