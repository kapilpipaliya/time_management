import BaseService from '../../../baseservice.js'
const NotFoundRequest = require('./proto/NotFoundRequest_pb.js')
const NotFoundResponse = require('./proto/NotFoundResponse_pb.js')
export class NotFound extends BaseService {
  constructor() {
    this.NotFoundRequest = new NotFoundRequest();
    this.NotFoundResponse = new NotFoundResponse();
  }
  // manual_part
  // manual_part_end
};