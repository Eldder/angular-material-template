创建一个新组建(component)
~~~
    ng generate component 组件名称
    // 或
    ng g comonent 组件名称

    --module=app 告诉 CLI 把它注册到 AppModule 的 imports 数组中。

    ng g component nameComponent --module=app.module.ts
    npm run ng generate component fixed/table/ltable --module=fixed/fixed.module.ts
~~~

创建新服务(service)
~~~
    ng generate service 服务名称
    // 也可以
    ng g service 服务名称
~~~

创建一个简易的模型类(class)
~~~
    ng generate class 类名称
~~~

生成一个新路由(route)
~~~
    ng generate route 路由名称
~~~

生成一个新指令(directive)
~~~
    ng generate directive 指令名称
~~~

生成一个新管道(pipe)
~~~
    ng generate pipe 管道名称
~~~

使用angular cli创建一个路由
~~~
    npm run ng generate module app-routing --flat --module=app
    --flat 把这个文件放进了 src/app 中，而不是单独的目录中。
    --module=app 告诉 CLI 把它注册到 AppModule 的 imports 数组中。
~~~

添加图标
[参考](https://github.com/coreui/coreui-icons-angular)

~~~
    在 src\app\icons\icon-subset.ts 中
    import 选择 node_modules\@coreui\icons\js\free\index.d.ts 文件中包含的图标定义
    export const iconSubset 添加引入的类
    export enum IconSubset 添加引入的类并设置 icon name
~~~

template fixed
~~~

npm run ng generate module fixed-routing --flat --module=app

npm run ng generate component fixed/grid --module=fixed/fixed.module.ts

npm run ng generate component fixed/forms --module=fixed/fixed.module.ts

npm run ng generate component fixed/empty --module=fixed/fixed.module.ts

~~~
