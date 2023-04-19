# 使用 Node.js 10 镜像作为基础镜像
FROM node:10

# 设置容器的工作目录
WORKDIR /app

# 创建 app 文件夹
RUN mkdir -p /app/jiyan

# 复制当前目录下的所有文件到容器的 app/jiyan 目录中
COPY . /app/jiyan

# 在容器中执行 yarn install 安装依赖
RUN cd /app/jiyan && yarn install

# 声明容器需要映射的端口
EXPOSE 8541

# 运行项目 yarn dev
CMD ["sh", "-c", "cd /app/jiyan && yarn dev"]
