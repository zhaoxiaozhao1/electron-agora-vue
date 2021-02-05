# electron-vue-template
### 安装依赖
```bash
git clone https://github.com/zhaoxiaozhao1/electron-agora-vue.git
cd electron-agora-vue
npm i agora-electron-sdk    安装electron端声网sdk
npm i npm install agora-rtc-sdk-ng --save 安装web端声网sdk
npm i  electron@5.0.8   (windows: npm install -D --arch=ia32 electron@5.0.8）
cnpm install
```
### 调试客户端
```bash
npm run dev dev
```
npm run dev是客户端调试命令，最后一位是环境参数，表示需要调试的是哪个环境，  
同时devServer会代理到对应的后端服务，不加环境参数则默认未release环境，具体配置在config文件夹下。

### 调试web端
```bash
npm run devweb 
```

### 打包客户端
```bash
npm run build
```  
客户端打包产物除了安装包之外，还包含渲染进程的zip压缩包，用于自动更新小版本使用。  
根目录的update.json是版本更新配置文件。  
updateFiles文件夹中有1.0.0.1小版本文件，可用于模拟自动更新。  
小版本自动更新效果需要打包后才能看到，因为调试环境下，页面访问的始终是本地最新代码。  

### 打包web端
```bash
npm run buildweb
```
