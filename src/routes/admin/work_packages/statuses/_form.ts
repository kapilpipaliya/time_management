import * as A from "index.ts";

export {A}

export class CRUD extends A.CRUDBase {
  constructor() {
    super();
    this.schema = A.yup.object().shape({
      uid: A.yup.string(),
      name: A.yup.string().required(),
      position: A.yup.string().required(),
      is_default: A.yup.bool().required(),
      is_closed: A.yup.bool().required(),
      color: A.yup.string().required(),
      default_done_ratio: A.yup.string().required(),
      is_readonly: A.yup.bool().required(),
      // created: A.yup.date().required(),
      // updated: A.yup.date().required(),
    });
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
      // created: m.getCreated(),
      // updated: m.getUpdated(),
    }
  }

  onFetch(uids = undefined) {
    A.adminService.getStatus(this.getReq(A.messages.StatusReq, uids), this.getMeta(), this.getCallback(res => {
      this.setData(uids, res.getStatusesList());
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
