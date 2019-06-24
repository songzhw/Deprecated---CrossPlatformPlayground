// @ts-ignore
console.log(`szw fulfill `);

const cwd = process.cwd(); //current working dict
console.log(`cwd = ${cwd}`);
//=> /Users/zsong/code/mine/CrossPlatformPlayground/ReactNative/rn101

console.log(process.argv);
/*
1). 结果比较复杂
比如说:  $ yarn run fulfill hello 20 true
[ '/usr/local/bin/node',
  '/Users/zsong/code/mine/CrossPlatformPlayground/ReactNative/rn101/scripts/fulfill.ts',
  'hello',
  '20',
  'true' ]

2). 不能带k-v对 (带k-v对使用这script的人更友好, 因为不用去记住顺序与每个参数值代表name还是descrption)
又比如说: $ yarn run fulfill -action hello -id 20
[ '/usr/local/bin/node',
  '/Users/zsong/code/mine/CrossPlatformPlayground/ReactNative/rn101/scripts/fulfill.ts',
  '-action',
  'hello',
  '-id',
  '20' ]
 */

