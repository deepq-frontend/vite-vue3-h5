#!/usr/bin/env ts-node
/* eslint-disable @typescript-eslint/no-var-requires */

const route = require('../../route.config');

const command = require('./command');

const program = require('commander');

program
  .command('gen')
  .description('创建权限路由文件')
  .option('-c, --create', '是否同步创建views')
  .option('-t, --tree', '是否创建树形目录')
  .action((options: any) => {
    command.createRouteFile(route, options.create, options.tree);
  });

program
  .command('publish')
  .description('发布路由文件')
  .argument('<username>', '用户账号')
  .argument('<password>', '用户密码')
  .argument('[host]', 'api 域名', 'https://it-flow-sit.deepq.tech')
  .action((username: string, password: string, host: string) => {
    console.log('host =====>', host);
    console.log('username =====>', username);
    console.log('password =====>', password);
    process.env._ROUTE_HOST = host;
    command.publishRoute(route, {
      username,
      password
    });
  });

program.parse(process.argv);
