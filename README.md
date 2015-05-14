pure-angular-demo
===========================

基于 https://github.com/rdash/rdash-angular 移植，使用了 https://github.com/fex-team/mod 进行模块化管理与依赖加载，同时通过ng-annotate实现依赖注入注解的自动添加

## Usage

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

## Why

1. 用gulp做的angular方案很少集成按需加载，一般是采用目录全量加载方式去加载资源，这个DEMO中，所有的controller, directives则是按需加载。
2. 模板也不需要异步加载，或者用类似html2js的插件去处理，直接__inline就可以使用。
3. 如果看看配置文件就会发现，在FIS的环境下开发angular应用基本不需要任何配置，也是给大家展现一些FIS的使用思路
4. 这个方案的目录组织结构也是按照模块进行功能拆分，给出了一个在angular应用下，模块拆分的指引
5. 无缝结合FIS的打包、压缩、MD5戳等功能
6. 最后，这个方案还稍微结合了一下bower，给了一个在FIS下使用bower时，加速编译的一个手段；）
