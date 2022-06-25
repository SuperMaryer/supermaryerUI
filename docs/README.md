# 快速开始

#### 安装组件库
```bash
npm i supermaryer-ui
```

#### 引用组件库
> 在 main.js 中引用组件库

```javascript
// 全部引入
import 'supermaryer-ui/dist/css/index.css';
import MUI from 'supermaryer-ui';
Vue.use(MUI);


// 按需引入
import 'supermaryer-ui/dist/css/demo.css';
import { Demo } from 'supermaryer-ui';
Vue.use(Demo);
```

