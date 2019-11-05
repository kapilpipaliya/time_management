import * as A from "../../../node_modules/index.ts";
export {A}
class CRUD extends A.CRUDBase {
  constructor() {
    super();
    this.title_name = "Document Category";
    this.schema = A.yup.object().shape({
      uid: A.yup.string(),
      name: A.yup.string().required(),
      position: A.yup.string().required(),
      is_default: A.yup.bool().required(),
      active: A.yup.bool().required(),
      project: A.yup.string().required(),
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
  toInitialValues(m: A.messages.DocumentCategory) {
    return {
      uid: m.getUid(),
      name: m.getName(),
      position: m.getPosition(),
      is_default: m.getIsDefault(),
      active: m.getActive(),
      project: m.getProject(),
      // created: m.getCreated(),
      // updated: m.getUpdated(),
    }
  }
  onFetch(p, uids = undefined) {
    A.adminService.getDocumentCategory(this.getReq(A.messages.DocumentCategoryReq, uids, p), this.getMeta(), this.getCallback(res => {
      this.setData(uids, res.getDocumentCategoryList(), res);
    }))
  }
  onSubmit({detail: {values, setSubmitting, resetForm}}) {
    const req = new A.messages.DocumentCategoryMutationReq();
    const m = new A.messages.DocumentCategory();
    m.setUid(values.uid);
    m.setName(values.name);
    m.setPosition(values.position);
    m.setIsDefault(values.is_default);
    m.setActive(values.active);
    m.setProject(values.project);
    // m.setCreated(values.created);
    // m.setUpdated(values.updated);
    req.setDocumentCategory(m);
    A.adminService.mutateDocumentCategory(req, this.getMeta(),
      this.muCallback(values.uid, 'DocumentCategory', '/', setSubmitting));
  }
  onDelete(m) {
    const req = new A.messages.DocumentCategoryDeleteReq();
    const m_ = new A.messages.DocumentCategory();
    m_.setUid(m.getUid());
    req.setDocumentCategory(m_);
    A.adminService.deleteDocumentCategory(req, this.getMeta(), this.delCallback('DocumentCategory Deleted Successfully'));
  }
}
export const c = new CRUD();