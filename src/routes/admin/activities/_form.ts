import * as A from 'index.ts';
export {A}
class CRUD extends A.CRUDBase {
  constructor() {
    super();
    this.title_name = "Activity";
    this.schema = A.yup.object().shape({
      uid: A.yup.string(),
      name: A.yup.string().required(),
      position: A.yup.string().required(),
      is_default: A.yup.bool().required(),
      active: A.yup.bool().required(),
      // project: A.yup.string().required(),
      // created: A.yup.date().required(),
      // updated: A.yup.date().required(),
    });
  }
  newInitialValues() {
    return {
      is_default: false,
      active: false,
    }
  }
  toInitialValues(m) {
    return {
      uid: m.getUid(),
      name: m.getName(),
      position: m.getPosition(),
      is_default: m.getIsDefault(),
      active: m.getActive(),
      // project: m.getProject(),
      // created: m.getCreated(),
      // updated: m.getUpdated(),
    }
  }
  onFetch(p, uids = undefined) {
    A.adminService.getActivity(this.getReq(A.messages.ActivityReq, uids, p), this.getMeta(), this.getCallback(res => {
      this.setData(uids, res.getActivityList(), res);
    }))
  }
  onSubmit({detail: {values, setSubmitting, resetForm}}) {
    const req = new A.messages.ActivityMutationReq();
    const m = new A.messages.Activity();
    m.setUid(values.uid);
    m.setName(values.name);
    m.setPosition(values.position);
    m.setIsDefault(values.is_default);
    m.setActive(values.active);
    // m.setProject(values.project);
    // m.setCreated(values.created);
    // m.setUpdated(values.updated);
    req.setActivity(m);
    A.adminService.mutateActivity(req, this.getMeta(),
      this.muCallback(values.uid, 'Activity', '/', setSubmitting));
  }
  onDelete(m) {
    const req = new A.messages.ActivityDeleteReq();
    const m_ = new A.messages.Activity();
    m_.setUid(m.getUid());
    req.setActivity(m_);
    A.adminService.deleteActivity(req, this.getMeta(), this.delCallback('Activity Deleted Successfully'));
  }
}
export const c = new CRUD();
