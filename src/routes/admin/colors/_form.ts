import * as A from 'index.ts';

export {A}
class CRUD extends A.CRUDBase {
  constructor() {
    super();
    this.title_name = "Color";
    this.schema = A.yup.object().shape({
      uid: A.yup.string(),
      name: A.yup.string().required(),
      hexcode: A.yup.string().required(),
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
      hexcode: m.getHexcode(),
    }
  }
  onFetch(p, uids = undefined) {
    A.adminService.getColor(this.getReq(A.messages.ColorReq, uids, p), this.getMeta(), this.getCallback(res => {
      this.setData(uids, res.getColorList(), res);
    }))
  }
  onSubmit({detail: {values, setSubmitting, resetForm}}) {
    const req = new A.messages.ColorMutationReq();
    const m = new A.messages.Color();
    m.setUid(values.uid);
    m.setName(values.name);
    m.setHexcode(values.hexcode);
    req.setColor(m);
    A.adminService.mutateColor(req, this.getMeta(),
      this.muCallback(values.uid, 'Color', '/', setSubmitting));
  }
  onDelete(m) {
    const req = new A.messages.ColorDeleteReq();
    const m_ = new A.messages.Color();
    m_.setUid(m.getUid());
    req.setColor(m_);
    A.adminService.deleteColor(req, this.getMeta(), this.delCallback('Color Deleted Successfully'));
  }
}
export const c = new CRUD();
