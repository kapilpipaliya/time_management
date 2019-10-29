import * as A from "index.js";

export {A}

export class CRUD extends A.CRUDBase {
  constructor() {
    super();
    this.schema = A.yup.object().shape({
      uid: A.yup.string(),
      project: A.yup.string().required(),
      title: A.yup.string().required(),
      summery: A.yup.string().required(),
      description: A.yup.string().required(),
      author: A.yup.string().required(),
      comments_count: A.yup.string().required(),
      // created: A.yup.date().required(),
      // updated: A.yup.date().required(),
    });
  }

  toInitialValues(m) {
    return {
      uid: m.getUid(),
      project: m.getProject(),
      title: m.getTitle(),
      summery: m.getSummery(),
      description: m.getDescription(),
      author: m.getAuthor(),
      comments_count: m.getCommentsCount(),
      // created: m.getCreated(),
      // updated: m.getUpdated(),
    }
  }

  onFetch(uids = undefined) {
    A.adminService.getNews(this.getReq(A.messages.NewsReq, uids), this.getMeta(), this.getCallback(res => {
      this.setData(uids, res.getNewsList());
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
