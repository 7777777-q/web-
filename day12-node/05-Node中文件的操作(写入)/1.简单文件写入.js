/*
 *  Node中的文件系统：
 *     1.在NodeJS中有一个文件系统，所谓的文件系统，就是让你通过Modejs代码操作本地的文件。（增删改查）
 *     2.在NodeJS中，给我们提供了一个模块，专门用于操作文件
 *     3.该模块的名字叫做fs模块，fs模块是Node的核心模块，无需下载，需要引入。
 *
 *   fs.writeFile(file, data[, options], callback)
 *           --file:要写入的文件路径+文件名+文件后缀
 *           --data：要写入的数据
 *           --options：配置对象
 *                 --flag：打开文件要进行的操作，默认值：'w'
 *                     'w' : 写入
 *                     'r' ：读取
 *                     'a' ：追加
 *                 --mode ：文件的权限控制，默认值是0o666
 *                     0o111 : 文件可被执行的权限
 *                     0o222 ：文件被写入的权限
 *                     0o444 ：文件被读取的权限
 *                 --encoding ：编码，默认是：'utf-8'
 *
 *           --callback：回调函数
 *
 *   在Node中有一个原则：错误优先
 *
 *   对于简单文件写入来说，是将要写入的数据一次性的全部加载到内存中（水一次性全部承装到盆子里）
 *
 * */

const fs = require('fs')
fs.writeFile(
  './test.txt',
  'hahahahaha ',
  {
    flag: 'r',
  },
  (err) => {
    console.log(err)
  }
)
