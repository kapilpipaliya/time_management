import BaseService from '../../../baseservice.js'
const LogoutRequest = require('./proto/auth::user::LogoutRequest_pb.js')
const LogoutResponse = require('./proto/auth::user::LogoutResponse_pb.js')
export class Logout extends BaseService {
  constructor() {
    this.LogoutRequest = new LogoutRequest();
    this.LogoutResponse = new LogoutResponse();
  }
  // extend_class
  // extend_class_end
};
