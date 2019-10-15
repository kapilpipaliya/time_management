import {ServerEventsDispatcher} from './ws_events_dispatcher.js'

const dev_conf = { 
  domain: 'localhost',
  port: 8500,
  http_proto: 'http',
  ws_proto: 'ws',
  redirect: 'time'
}
const prod_conf = {
  domain: 'mbamusiclogin.com',
  port: 8501,
  http_proto: 'https',
  ws_proto: 'wss',
  redirect: 'time'
}
export const server = process.env.NODE_ENV === 'development' ? dev_conf : prod_conf;

export const ws_todo = `${server.ws_proto}://${server.domain}:${server.port}/todo`
export const product_img_url = `${server.http_proto}://${server.domain}:${server.port}/http/v1/user/download_id`
export const thumb_url = `${server.http_proto}://${server.domain}:${server.port}/http/v1/user/thumb_id`

let e;
if (process.browser) { 
  e = new ServerEventsDispatcher(ws_todo)
 } else {
   e = ServerEventsDispatcher;
 }
export const Server = e