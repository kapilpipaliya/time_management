import BaseService from '../../../baseservice.js'
const DashboardRequest = require('./proto/admin::DashboardRequest_pb.js')
const DashboardResponse = require('./proto/admin::DashboardResponse_pb.js')
export class Dashboard extends BaseService {
  constructor() {
    this.DashboardRequest = new DashboardRequest();
    this.DashboardResponse = new DashboardResponse();
  }
  // manual_part
  // manual_part_end
};
