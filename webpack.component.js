const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')
console.log('VueLoaderPlugin', VueLoaderPlugin);



const glob = require('glob');

const list = {}
// const list = {
//     card: './component/lig/card/index.js',
//     demo: './component/lig/demo/index.js',
// }

async function makeList(dirPath, list) {
    const files = glob.sync(`${dirPath}/**/index.js`);
    console.log('files----------',files);

    for (const file of files) {
        const component = file.split(/[/.]/)[2];
        console.log('component------------',component);
        list[component] = `./${file}`;
    }
}

makeList('components/lib', list);

module.exports = {
    entry: list,
    mode: 'development',
    output: {
        filename: '[name].umd.js', // card.umd.js  // 文件名称，可指定目录
        path: path.resolve(__dirname, 'dist'),  // 输出文件目录，将来所有资源输出的公共目录，所有资源都在此文件夹下  必须是绝对路径
        library: 'mui', // 整个库向外暴露的变量名[一般结合DLL使用，将某个库全局暴露出去]
        libraryTarget: 'umd', // 变量名添加到哪个上面（brower/node/commonjs）

    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader'
                    }
                ]
            }
        ]
    },
}