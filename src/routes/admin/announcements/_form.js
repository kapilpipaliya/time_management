import * as A from "index.js";

export {A}

export class CRUD extends A.CRUDBase {
  constructor() {
    super();
    this.schema = A.yup.object().shape({
      uid: A.yup.string(),
      text: A.yup.string().required(),
      show_until: A.yup.date().required(),
      active: A.yup.bool().required(),
      // created: A.yup.date().required(),
      // updated: A.yup.date().required(),
    });
  }

  toInitialValues(m) {
    return {
      uid: m.getUid(),
      text: m.getText(),
      show_until: m.getShowUntil(),
      active: m.getActive(),
      // created: m.getCreated(),
      // updated: m.getUpdated(),
    }
  }

  onFetch(uids = undefined) {
    A.adminService.getAnnouncement(this.getReq(A.messages.AnnouncementReq, uids), this.getMeta(), this.getCallback(res => {
      this.setData(uids, res.getAnnouncementsList());
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
