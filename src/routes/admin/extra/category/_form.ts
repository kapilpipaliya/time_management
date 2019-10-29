import * as A from "index.ts";

export {A}

export class CRUD extends A.CRUDBase {
  constructor() {
    super();
    this.schema = A.yup.object().shape({
      uid: A.yup.string(),
      name: A.yup.string().required(),
      project: A.yup.string().required(),
      assigned_to: A.yup.string().required(),
      // created: A.yup.date().required(),
      // updated: A.yup.date().required(),
    });
  }

  toInitialValues(m) {
    return {
      uid: m.getUid(),
      name: m.getName(),
      project: m.getProject(),
      assigned_to: m.getAssignedTo(),
      // created: m.getCreated(),
      // updated: m.getUpdated(),
    }
  }

  onFetch(uids = undefined) {
    A.adminService.getCategory(this.getReq(A.messages.CategoryReq, uids), this.getMeta(), this.getCallback(res => {
      this.setData(uids, res.getCategoriesList());
    }))
  }

  onSubmit({detail: {values, setSubmitting, resetForm}}) {
    const req = new A.messages.UserMutationReq();
    const u = new A.messages.User();
    u.setUid(values.uid);
    u.setLogin(values.login);
    u.setPassword(values.password);
    u.setFirstName(values.first_name);
    u.setLastName(values.last_name);
    u.setMail(values.mail);
    req.setUser(u);

    A.adminService.mutateUser(req, this.getMeta(),
      this.muCallback('New User Created Successfully', '/admin/users', setSubmitting));
  }

  onDelete(m) {
    const req = new A.messages.UserDeleteReq();
    const u = new A.messages.User();
    u.setUid(m.getUid());
    req.setUser(u);
    A.adminService.deleteUser(req, this.getMeta(), this.delCallback('User Deleted Successfully'));
  }
}
