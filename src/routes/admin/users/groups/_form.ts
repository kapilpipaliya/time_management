import * as A from 'index.ts';
export {A}
export class CRUD extends A.CRUDBase {
  constructor() {
    super();
    this.title_name = "Group";
    this.schema = A.yup.object().shape({
      uid: A.yup.string(),
      name: A.yup.string().required(),
      //users_count: A.yup.string(),
    });
  }
  newInitialValues() {
    return {
    }
  }
  toInitialValues(m) {
    return {
      uid: m.getUid(),
      name: m.getName(),
      //users_count: m.getUsersCount(),
    }
  }
  onFetch(uids = undefined) {
    A.adminService.getGroup(this.getReq(A.messages.GroupReq, uids), this.getMeta(), this.getCallback(res => {
      this.setData(uids, res.getGroupList());
    }))
  }
  onSubmit({detail: {values, setSubmitting, resetForm}}) {
    const req = new A.messages.GroupMutationReq();
    const m = new A.messages.Group();
    m.setUid(values.uid);
    m.setName(values.name);
    //m.setUsersCount(values.users_count);
    req.setGroup(m);
    A.adminService.mutateGroup(req, this.getMeta(),
      this.muCallback(values.uid, 'Group', '/', setSubmitting));
  }
  onDelete(m) {
    const req = new A.messages.GroupDeleteReq();
    const m_ = new A.messages.Group();
    m_.setUid(m.getUid());
    req.setGroup(m_);
    A.adminService.deleteGroup(req, this.getMeta(), this.delCallback('Group Deleted Successfully'));
  }
}
