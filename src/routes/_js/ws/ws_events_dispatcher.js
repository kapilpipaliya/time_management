/* Ismael Celis 2010
Simplified WebSocket events dispatcher
*/
import IsomorphicWs from "isomorphic-ws";
//import  S from 'sanctuary'
// import * as cookie from 'cookie';

export class ServerEventsDispatcher {
  constructor(path) {
    this.bind = this.bind.bind(this);
    this.unbind = this.unbind.bind(this);
    this.trigger = this.trigger.bind(this);
    
    this.onmessage = this.onmessage.bind(this);
    this.onclose = this.onclose.bind(this);
    this.onopen = this.onopen.bind(this);
    this.onerror = this.onerror.bind(this);
    this.dispatch = this.dispatch.bind(this);
    
    this.path = path
    this.callbacks = {};
  }

  bind (event1, event2, handleMultiple=0, callback, ) {
    if(!Number.isInteger(event1)){
      throw "event1 must be a number but its value is: " + event1
    }
    if(!Number.isInteger(event2)){
      throw "event2 must be a number but its value is: " + event2
    }
    const event = event1 + '_' + event2
    this.callbacks[event] = this.callbacks[event] || [];
    this.callbacks[event].push([handleMultiple, callback]); // 0 means bindonce.
    return this;// chainable
  };

  unbind (event1, event2) {
    this.callbacks[event1 + '_' + event2] = [];
  }
  trigger (event1, event2, data) {
    const f = this.trigger
    switch (this.conn.readyState) {
      case 0: // CONNECTING
        // code block
        //This will added to onopen list, take care
        this.conn.addEventListener("open", function() {
          f(event1, event2, data)
        })
        return this;
      case 1: // OPEN
        this.conn.send(new Uint8Array([event1, event2, ...data])); // <= send data to socket server
        return this;
      case 2: // CLOSING
      case 3: //CLOSED
        // try to reconnect/logout
        this.setupConnection(this.req, this.res)
        this.conn.addEventListener("open", function() {
          f(event1, event2, data)
        })
        return this;
      default:
        return this;
      // code block
    }
  };

  // private functions: 
  setupConnection(req, res) {
    this.req = req
    this.res = res
    if (!process.browser) { 
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    }
    if(!this.conn || this.conn.CLOSED || this.conn.CLOSING){
      const c = process.browser ? undefined : { 'headers': { 'Cookie': this.req.headers.cookie || null } };
      this.conn = new IsomorphicWs(this.path, [], c);
      this.conn.binaryType = "arraybuffer"
      // dispatch to the right handlers
      this.conn.onmessage = this.onmessage;

      this.conn.onclose = this.onclose;
      //this.conn.onopen = this.onopen;
      this.conn.addEventListener("open", this.onopen);
    }
  }

  onmessage (evt) {
    if(typeof evt.data === "string" ) {
    }
    // if(evt.data instanceof ArrayBuffer ){
      else {
      const buffer = evt.data;
      this.dispatch(buffer)
    }
    // if(evt.data instanceof Blob ){
    //   const buffer = event.data;
    //   console.log("Received arraybuffer");
    //   this.dispatch(this.event_name, buffer)
    // }
  };

  onclose () { 
    //this.dispatch(0, 1, null) 
  }
  onopen () { 
    //this.dispatch(0, 0, null)
   }
  onerror (error) { 
    console.log(`[error] ${error.message}`);
    //todo depend on error try to reconnect
    //this.dispatch(0, 3, null) 
  }

  dispatch (arraybuffer) {
    const data = new Uint8Array(arraybuffer)
    const event0 = data[0]
    const event1 = data[1]
    const event = event0 + '_' + event1

    const chain = this.callbacks[event];
    if (typeof chain == 'undefined') return; // no callbacks for this event
    const bytes = Array.prototype.slice.call(data, 2)
    for (let i = 0; i < chain.length; i++) {
      chain[i][1](bytes)
      if(chain[i][0] == 0) {
        this.callbacks[event] = []
      }
    }
  }

};