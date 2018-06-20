# KNITTER-UI

使用Web组件标准的、不依赖任何框架的交互式UI库

A framework-less interactive UI library built on standard Web Components

## 文档和样例 / Docs & Demos

[访问文档和样例](https://twincle.github.io/knitter-ui/)

[Visit Docs & Demos](https://twincle.github.io/knitter-ui/)

## 支持的组件 / Components

1. kn-button
2. kn-code
3. kn-select/kn-option

一大波组件即将袭来... / Lots of components are coming soon...

## 如何使用 / How to use

```
npm i knitter-ui
```

在需要使用UI组件的html文件中引用`node_modules/knitter-ui/dist/knitter.js`即可。

Link the `node_modules/knitter-ui/dist/knitter.js` file in the html file which need to use a UI component.

``` html
<script src="node_modules/knitter-ui/dist/knitter.js"></script>
```

## 如何编译 / How to build

```
git clone https://github.com/twincle/knitter-ui.git knitter-ui
cd knitter-ui
npm i
npm run build
```

编译后的文件位于`/dist`，将编译后的全部文件复制到你的网站的任意目录下，并在需要使用UI组件的html文件中引用`knitter.js`即可。

All the files are in `/dist`, copy all the files to any folder in your website, and link the `knitter.js` file in the html file which need to use a UI component.

``` html
<!-- 假设你将全部文件复制到 /dist 目录下 -->
<!-- Let's assume you copy the all files in /dist -->
<script src="/dist/knitter.js"></script>
```

## LICENSE

MIT