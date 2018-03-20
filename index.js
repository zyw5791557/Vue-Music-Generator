const Koa 		= require('koa');
const serve 	= require('koa-static');
const path 		= require('path');
const logger 	= require('koa-logger');

const app 		= new Koa();

app.use(logger());

const main 		= serve(path.join(__dirname, './www'));

app.use(main);

app.listen(6868); 