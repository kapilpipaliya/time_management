import * as A from "index.ts";

export {A}

class CRUD extends A.CRUDBase {
  constructor() {
    super();
    this.title_name = "User";
    this.schema = A.yup.object().shape({
      uid: A.yup.string(),
      login: A.yup.string().required(),
      first_name: A.yup.string().required('First Name is required'),
      last_name: A.yup.string().required('Last Name is required'),
      mail: A.yup.string().required(),
      password: A.yup.string().min(4),
      confirmPassword: A.yup.string().oneOf([A.yup.ref('password'), null], "Passwords don't match").required('Confirm Password is required'),
    });
  }

  newInitialValues() {
    return {}
  }

  toInitialValues(m) {
    return {
      uid: m.getUid(),
      login: m.getLogin(),
      first_name: m.getFirstName(),
      last_name: m.getLastName(),
      mail: m.getMail(),
      password: m.getPassword(),
      confirmPassword: m.getPassword()
    }
  }

  onFetch(p, uids = undefined) {
    A.adminService.getUser(this.getReq(A.messages.UserReq, uids, p), this.getMeta(), this.getCallback(res => {
      this.setData(uids, res.getUserList(), res);
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
      this.muCallback(values.uid, 'User', '/admin/users', setSubmitting));
  }

  onDelete(m) {
    const req = new A.messages.UserDeleteReq();
    const u = new A.messages.User();
    u.setUid(m.getUid());
    req.setUser(u);
    A.adminService.deleteUser(req, this.getMeta(), this.delCallback('User Deleted Successfully'));
  }
}
export const c = new CRUD();
