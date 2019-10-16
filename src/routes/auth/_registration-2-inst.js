//import {RegistrationRequest} from '../_js/protos/time/auth/user/registration/proto/auth_user_RegistrationRequest_pb.js'
//import {RegistrationResponse} from '../_js/protos/time/auth/user/registration/proto/auth_user_RegistrationResponse_pb.js'
// manual_script
import {event} from '../_js/events/event.js'

export let username = "";
export let password = "";
export let hello='wrong';
let isSaving = false;
let er = "";  
let usernameDom = null // to focus
if(process.browser){
  S.setupConnection()
}
function save (){
  console.log("saving")
  const registrationRequest = new RegistrationRequest
  registrationRequest.setUsername("kapil");
  registrationRequest.setPassword("password");
  const bytes = registrationRequest.serializeBinary()
  console.log("sending ws event")

  S.trigger(event.auth_user_registration, event.auth_user_logout, bytes)
}





// manual_script_end
