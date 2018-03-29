# electron-demo bilibili-live-helper
(未完工)待补
哔哩哔哩直播提醒助手:
可以通过输入房间号来建立主播的通知



## Install:
需要先全局安装electron(已安装请跳过跳过)  

`sudo npm install -g electron  --unsafe-perm=true --allow-root`  

安装依赖:  
`npm install`

## Run
`electron .`  

### 演示:
添加列表:(目前采用浏览器刷新的方法,看起来不怎么样,将会更改)
![](https://raw.githubusercontent.com/shadowors/electron-demo-bilibili-live-helper/master/addList.gif)  

添加列表之后会自动一段时间(30s)进行检测直播状态:
![](https://raw.githubusercontent.com/shadowors/electron-demo-bilibili-live-helper/master/AlertMsg.gif)




