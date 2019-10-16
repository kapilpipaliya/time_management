import BaseService from '../../../baseservice.js'
const RegistrationRequest = require('./proto/auth::user::RegistrationRequest_pb.js')
const RegistrationResponse = require('./proto/auth::user::RegistrationResponse_pb.js')
export class Registration extends BaseService {
  constructor() {
    this.RegistrationRequest = new RegistrationRequest();
    this.RegistrationResponse = new RegistrationResponse();
  }
  // extend_class
  // extend_class_end
};
