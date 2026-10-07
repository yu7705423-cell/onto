// 把 vendor/jszip.min.js 内联进 src/app.html，生成可离线使用的单文件 index.html
const fs = require('fs');
const path = require('path');
const tpl = fs.readFileSync(path.join(__dirname, 'src/app.html'), 'utf8');
const jszip = fs.readFileSync(path.join(__dirname, 'vendor/jszip.min.js'), 'utf8');
if (!tpl.includes('/*__JSZIP__*/')) throw new Error('placeholder missing');
fs.writeFileSync(path.join(__dirname, 'index.html'), tpl.replace('/*__JSZIP__*/', () => jszip));
console.log('built index.html');
