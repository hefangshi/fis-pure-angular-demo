pure-angular-demo
===========================

## 说明

基于 https://github.com/rdash/rdash-angular 移植，使用了 https://github.com/fex-team/mod 进行模块化管理与依赖加载，同时通过ng-annotate实现依赖注入注解的自动添加

## 用法

```
# 安装fis-pure
npm i -g fis-pure

# 安装ng-annotate插件
npm install -g fis-preprocessor-annotate

# 下载demo
git clone https://github.com/hefangshi/pure-angular-demo

cd pure-angular-demo

# bower安装依赖
bower install

# 使用FIS编译DEMO
pure release

# 预览效果
pure server start

# 打包
pure release -p

# 打包、压缩
pure release -op

# 打包、压缩、MD5戳
pure release -omp
```
