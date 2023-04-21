"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[236],{25418:function(o,F,u){u.r(F),u.d(F,{default:function(){return s}});var E=u(15715),B=u(35751),A=u(67294),e=u(60004),C=u(72490),t=u(21835),n=u(85893),i=B.Z.Paragraph,r=function(){var a=`
# FlyAPI

## \u6982\u8FF0

\u4E3B\u9875\u83DC\u5355\u4E0B\u53EF\u67E5\u770B\u5F00\u653E\u5E73\u53F0\u4E0B\u6240\u6709\u7684\u63A5\u53E3\uFF0C \u70B9\u51FB\u4EFB\u4E00\u63A5\u53E3\u53EF\u67E5\u770B\u8BE6\u60C5\uFF0C \u652F\u6301\u5728\u7EBF\u8C03\u8BD5\uFF0C \u63A5\u53E3\u8BE6\u60C5\u4E0B\u6709\u5728\u7EBF\u8C03\u8BD5\u793A\u4F8B\uFF08\u53EF\u590D\u5236\u5728\u7EBF\u8C03\u8BD5\uFF09\uFF0C \u7528\u6237\u53EF\u4EE5\u4F7F\u7528json\u683C\u5F0F\u5DE5\u5177\u642D\u914D\u4F7F\u7528



## java SDK \u5FEB\u901F\u5F00\u53D1

### Maven \u5750\u6807

\u5728\u9879\u76EE\u7684pom.xml\u914D\u7F6E\u6587\u4EF6\u4E2D\u5BFC\u5165\u4F9D\u8D56

\`\`\`xml
<dependencies>
	<dependency>
   	 	<groupId>com.dango</groupId>
    	 	<artifactId>flyapi-client-sdk</artifactId>
   	 	<version>0.0.1</version>
	</dependency>
</dependencies>
\`\`\`

### \u914D\u7F6E\u7BA1\u7406

\u5728\u9879\u76EE\u7684application.yml\u6587\u4EF6\u4E2D\u8BBE\u7F6EAccessKey\u548CSecretKey

\`\`\`yml
flyapi:
  client:
    access-key: <your AccessKey>
    secret-key: <your SecretKey>
\`\`\`



### \u63A5\u53E3\u4FE1\u606F

| \u63A5\u53E3\u540D\u79F0           | \u63A5\u53E3\u8DEF\u5F84          | \u8BF7\u6C42\u4F53          |
| ------------------ | ----------------- | --------------- |
| \u7F51\u6613\u4E91\u83B7\u53D6\u97F3\u4E50\u94FE\u63A5 | /api/wyy/song/url | {"id" : number} |
| ...                | ...               |                 |
| ...                | ...               |                 |



### \u8BF7\u6C42\u793A\u4F8B

\u5728\u4F7F\u7528\u65F6\u521B\u5EFAFlyApiClient\u5BF9\u8C61\uFF0C\u5E76\u8C03\u7528getInterfaceInfo\u65B9\u6CD5\u5373\u53EF

\u793A\u4F8B\uFF1A

\`\`\`java
@RestController
@RequestMapping("/")
public class InterfaceInfoController {

    /**
     *  \u6CE8\u5165FlyApiClient
     */
    @Resource
    private FlyApiClient flyApiClient;

    /**
     * \u8C03\u7528\u63A5\u53E3
     */
    @PostMapping("/invoke")
    public BaseResponse<Object> invokeInterfaceInfo() {
        String requestBody = "{"id":33894312}";  // \u9700\u7B26\u5408json\u8BED\u6CD5
        String path = "/api/wyy/song/url";
        String info = tempClient.getInterfaceInfo(path, requestBody);
        if (StringUtils.isBlank(info)) {
            throw new BusinessException(ErrorCode.SYSTEM_ERROR, "\u63A5\u53E3\u5931\u6548");
        }
        log.debug(info);
        return ResultUtils.success(info);
    }

}
\`\`\`





## \u67E5\u770B\u63A5\u53E3\u5217\u8868

\u70B9\u51FB\u83DC\u5355\u680F\u7684\u4E3B\u9875\uFF0C\u5373\u53EF\u67E5\u770B\u63A5\u53E3\u5217\u8868\u548C\u63A5\u53E3\u7684\u90E8\u5206\u4FE1\u606F



## \u5728\u7EBF\u8C03\u7528\u63A5\u53E3

### \u8C03\u7528\u524D\u987B\u77E5

\u672C\u9879\u76EE\u652F\u6301 POST \u8BF7\u6C42\uFF0C\u8FDB\u5165\u4E3B\u9875\uFF0C\u70B9\u51FB\u63A5\u53E3\u8FDB\u5165\u8C03\u7528\u9875\u9762\u540E\uFF0C\u6839\u636E\u63A5\u53E3\u4FE1\u606F\u7F16\u8F91\u8BF7\u6C42\u4F53\u5373\u53EF\u8F7B\u677E\u8C03\u7528\u63A5\u53E3

> \u6CE8\u610F\uFF1A\u8BF7\u6C42\u4F53\u8BF7\u8F93\u5165json\u683C\u5F0F\uFF0C\u5177\u4F53\u5B57\u6BB5\u6570\u636E\u7C7B\u578B\u53EF\u53C2\u8003\u63A5\u53E3\u4FE1\u606F\u4E2D\u7684\u8BF7\u6C42\u4F53\u3001\u8BF7\u6C42\u793A\u4F8B

### \u7F51\u6613\u4E91\u83B7\u53D6\u97F3\u4E50\u94FE\u63A5

\u8BF4\u660E : \u4F7F\u7528\u6B4C\u5355\u8BE6\u60C5\u63A5\u53E3\u540E , \u80FD\u5F97\u5230\u7684\u97F3\u4E50\u7684 id, \u4F46\u4E0D\u80FD\u5F97\u5230\u7684\u97F3\u4E50 url, \u8C03\u7528\u6B64\u63A5\u53E3 , \u4F20\u5165\u7684\u97F3\u4E50 id, \u53EF\u4EE5\u83B7\u53D6\u5BF9\u5E94\u7684\u97F3\u4E50\u7684 url( \u4E0D\u9700\u8981\u767B\u5F55 )

**\u8BF7\u6C42\u4F53 :** \`id\` : \u97F3\u4E50 id

**\u63A5\u53E3\u5730\u5740 :** \`/song/url\`

**\u8BF7\u6C42\u793A\u4F8B** :

\`\`\`json
 {
     "id":33894312
 }
\`\`\`

### wyy_song

\u8C03\u7528\u6B64\u63A5\u53E3 , \u4F20\u5165\u6B4C\u66F2id, \u53EF\u4EE5\u83B7\u53D6\u6B4C\u66F2\u8BE6\u60C5

### wyy_music

\u8C03\u7528\u6B64\u63A5\u53E3 , \u4F20\u5165\u6B4C\u5355id, \u53EF\u4EE5\u83B7\u53D6\u6B4C\u5355\u8BE6\u60C5





### \u6CE8\u610F\uFF1A

\u53C2\u6570\u683C\u5F0F\u4E3Ajson\uFF0C\u53EF\u5728\u83DC\u5355\u680F\u63D0\u4F9B\u7684json\u7F16\u8F91\u5668\u4E0A\u7F16\u8F91





## \u9000\u51FA\u767B\u5F55

//\u8FD9\u91CC\u6709\u4E00\u4E2A\u95EE\u9898\uFF0C\u6700\u4E0A\u9762\u7684\u6A21\u5757\u592A\u957F\uFF0C\u6321\u4F4F\u4E86\u5934\u50CF\u4F4D\u7F6E

\u70B9\u51FB\u53F3\u4E0A\u89D2\u7684\u5934\u50CF\uFF0C\u5728\u5F39\u51FA\u7684\u4E0B\u62C9\u6846\u4E2D\u70B9\u51FB\u9000\u51FA\u767B\u5F55







## \u67E5\u770B\u5F53\u524D\u53EF\u8C03\u7528\u7684\u63A5\u53E3



\u8BF4\u660E : \u767B\u9646\u540E\u8C03\u7528\u6B64\u63A5\u53E3 , \u4F20\u5165\u7528\u6237 id, \u53EF\u4EE5\u83B7\u53D6\u7528\u6237\u8BE6\u60C5

**\u5FC5\u9009\u53C2\u6570 :** \`uid\` : \u7528\u6237 id

**\u63A5\u53E3\u5730\u5740 :** \`/user/detail\`

**\u8C03\u7528\u4F8B\u5B50 :** \`/user/detail?uid=32953014\`

\u8FD4\u56DE\u6570\u636E\u5982\u4E0B\u56FE :




`;return(0,n.jsx)(E._z,{title:"\u5E2E\u52A9\u6587\u6863",children:(0,n.jsx)(i,{children:(0,n.jsx)(e.D,{className:"table-bordered",children:a,rehypePlugins:[t.Z],remarkPlugins:[C.Z]})})})},s=r}}]);
