import * as A from 'index.ts';
export {A}
export class CRUD extends A.CRUDBase {
  constructor() {
    super();
    this.title_name = "Status";
    this.schema = A.yup.object().shape({
      uid: A.yup.string(),
      name: A.yup.string().required(),
      position: A.yup.string().required(),
      is_default: A.yup.bool().required(),
      is_closed: A.yup.bool().required(),
      color: A.yup.string().required(),
      default_done_ratio: A.yup.string().required(),
      is_readonly: A.yup.bool().required(),
      created: A.yup.date().required(),
      updated: A.yup.date().required(),
    });
  }
  newInitialValues() {
    return {
      is_default: false,
      is_closed: false,
      is_readonly: false,
    }
  }
  toInitialValues(m) {
    return {
      uid: m.getUid(),
      name: m.getName(),
      position: m.getPosition(),
      is_default: m.getIsDefault(),
      is_closed: m.getIsClosed(),
      color: m.getColor(),
      default_done_ratio: m.getDefaultDoneRatio(),
      is_readonly: m.getIsReadonly(),
      created: m.getCreated(),
      updated: m.getUpdated(),
    }
  }
  onFetch(uids = undefined) {
    A.adminService.getStatus(this.getReq(A.messages.StatusReq, uids), this.getMeta(), this.getCallback(res => {
      this.setData(uids, res.getStatusList());
    }))
  }
  onSubmit({detail: {values, setSubmitting, resetForm}}) {
    const req = new A.messages.StatusMutationReq();
    const m = new A.messages.Status();
    m.setUid(values.uid);
    m.setName(values.name);
    m.setPosition(values.position);
    m.setIsDefault(values.is_default);
    m.setIsClosed(values.is_closed);
    m.setColor(values.color);
    m.setDefaultDoneRatio(values.default_done_ratio);
    m.setIsReadonly(values.is_readonly);
    m.setCreated(values.created);
    m.setUpdated(values.updated);
    req.setStatus(m);
    A.adminService.mutateStatus(req, this.getMeta(),
      this.muCallback(values.uid, 'Status', '/', setSubmitting));
  }
  onDelete(m) {
    const req = new A.messages.StatusDeleteReq();
    const m_ = new A.messages.Status();
    m_.setUid(m.getUid());
    req.setStatus(m_);
    A.adminService.deleteStatus(req, this.getMeta(), this.delCallback('Status Deleted Successfully'));
  }
}
