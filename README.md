
# 机研社团介绍网站

## 预览
<img src="./readme/1.png">
<img src="./readme/2.png">
<img src="./readme/3.png">
<img src="./readme/4.png">

### 技术栈

使用 **Next.js** 实现服务端渲染，使用 **Bootstrap** 实现响应式，使用 **next-i18next** 实现国际化，使用 **aos** 实现页面动画

### 网站地址

http://localhost:8541

### 运行源码

```bash
yarn install
yarn dev
```

### docker容器运行
```
docker build -t jiyanweb .

docker run -d -p 8541:8541 jiyanweb /bin/bash
```