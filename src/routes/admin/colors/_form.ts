import * as A from "index.ts";

export {A}

export class CRUD extends A.CRUDBase {
  constructor() {
    super();
    this.schema = A.yup.object().shape({
      uid: A.yup.string(),
      name: A.yup.string().required(),
      hexcode: A.yup.string().required(),
    });
  }

  toInitialValues(m) {
    return {
      uid: m.getUid(),
      name: m.getName(),
      hexcode: m.getHexcode(),
    }
  }

  onFetch(uids = undefined) {
    A.adminService.getColor(this.getReq(A.messages.ColorReq, uids), this.getMeta(), this.getCallback(res => {
      this.setData(uids, res.getColorsList());
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