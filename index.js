const Koa 		= require('koa');
const serve 	= require('koa-static');
const path 		= require('path');
const history 	= require('koa-history-api-fallback');

const app 		= new Koa();

app.use(history());

const main 		= serve(path.join(__dirname, './www'));

app.use(main);

app.listen(6868); 