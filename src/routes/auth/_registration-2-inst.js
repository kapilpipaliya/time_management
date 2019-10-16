//import {RegistrationRequest} from '../_js/protos/time/auth/user/registration/proto/auth_user_RegistrationRequest_pb.js'
//import {RegistrationResponse} from '../_js/protos/time/auth/user/registration/proto/auth_user_RegistrationResponse_pb.js'
import {event} from '../_js/events/event.js'
if(process.browser){ S.setupConnection() }
// instance_script

export let name = "";
export let username = "";
export let password = "";
export let password_2 = "";
let isSaving = false;
let er = "";  
let usernameDom = null // to focus

function save (){
  console.log("saving")
  const registrationRequest = new RegistrationRequest
  registrationRequest.setName(name)
  registrationRequest.setUsername(username);
  registrationRequest.setPassword(password);
  const bytes = registrationRequest.serializeBinary()

  S.trigger(event.auth_user_registration, event.auth_user_logout, bytes)
}

// instance_script_end
