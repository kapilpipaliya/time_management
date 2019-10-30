import * as A from 'index.ts';
export {A}
export class CRUD extends A.CRUDBase {
  constructor() {
    super();
    this.title_name = "Category";
    this.schema = A.yup.object().shape({
      uid: A.yup.string(),
      name: A.yup.string().required(),
      project: A.yup.string().required(),
      assigned_to: A.yup.string().required(),
      created: A.yup.date().required(),
      updated: A.yup.date().required(),
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
      project: m.getProject(),
      assigned_to: m.getAssignedTo(),
      created: m.getCreated(),
      updated: m.getUpdated(),
    }
  }
  onFetch(uids = undefined) {
    A.adminService.getCategory(this.getReq(A.messages.CategoryReq, uids), this.getMeta(), this.getCallback(res => {
      this.setData(uids, res.getCategoryList());
    }))
  }
  onSubmit({detail: {values, setSubmitting, resetForm}}) {
    const req = new A.messages.CategoryMutationReq();
    const m = new A.messages.Category();
    m.setUid(values.uid);
    m.setName(values.name);
    m.setProject(values.project);
    m.setAssignedTo(values.assigned_to);
    m.setCreated(values.created);
    m.setUpdated(values.updated);
    req.setCategory(m);
    A.adminService.mutateCategory(req, this.getMeta(),
      this.muCallback(values.uid, 'Category', '/', setSubmitting));
  }
  onDelete(m) {
    const req = new A.messages.CategoryDeleteReq();
    const m_ = new A.messages.Category();
    m_.setUid(m.getUid());
    req.setCategory(m_);
    A.adminService.deleteCategory(req, this.getMeta(), this.delCallback('Category Deleted Successfully'));
  }
}
