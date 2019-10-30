import * as A from 'index.ts';
export {A}
class CRUD extends A.CRUDBase {
  constructor() {
    super();
    this.title_name = "Priority";
    this.schema = A.yup.object().shape({
      uid: A.yup.string(),
      name: A.yup.string().required(),
      position: A.yup.string().required(),
      is_default: A.yup.bool().required(),
      active: A.yup.bool().required(),
      // color: A.yup.string().required(),
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
      // color: m.getColor(),
      // project: m.getProject(),
      // created: m.getCreated(),
      // updated: m.getUpdated(),
    }
  }
  onFetch(p, uids = undefined) {
    A.adminService.getPriority(this.getReq(A.messages.PriorityReq, uids, p), this.getMeta(), this.getCallback(res => {
      this.setData(uids, res.getPriorityList(), res);
    }))
  }
  onSubmit({detail: {values, setSubmitting, resetForm}}) {
    const req = new A.messages.PriorityMutationReq();
    const m = new A.messages.Priority();
    m.setUid(values.uid);
    m.setName(values.name);
    m.setPosition(values.position);
    m.setIsDefault(values.is_default);
    m.setActive(values.active);
    // m.setColor(values.color);
    // m.setProject(values.project);
    // m.setCreated(values.created);
    // m.setUpdated(values.updated);
    req.setPriority(m);
    A.adminService.mutatePriority(req, this.getMeta(),
      this.muCallback(values.uid, 'Priority', '/', setSubmitting));
  }
  onDelete(m) {
    const req = new A.messages.PriorityDeleteReq();
    const m_ = new A.messages.Priority();
    m_.setUid(m.getUid());
    req.setPriority(m_);
    A.adminService.deletePriority(req, this.getMeta(), this.delCallback('Priority Deleted Successfully'));
  }
}
export const c = new CRUD();
