import * as A from "index.ts";

export {A}

class CRUD extends A.CRUDBase {
  constructor() {
    super();
    this.title_name = "Profile";
    this.schema = A.yup.object().shape({
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
      login: m.getLogin(),
      first_name: m.getFirstName(),
      last_name: m.getLastName(),
      mail: m.getMail(),
      password: m.getPassword(),
      confirmPassword: m.getPassword()
    }
  }

  onFetch() {
    const req = new A.messages.ProfileReq();
    A.adminService.getProfile(req, this.getMeta(), this.getCallback(res => {
      //const res  = new messages.ProfileRes();
      this.initialValues.set(this.toInitialValues(res));
      console.log(res.getLogin())
    }));
  }

  onSubmit({detail: {values, setSubmitting, resetForm}}) {
    const req = new A.messages.ProfileMutationReq();
    req.setLogin(values.login);
    req.setPassword(values.password);
    req.setFirstName(values.first_name);
    req.setLastName(values.last_name);
    req.setMail(values.mail);

    A.adminService.mutateProfile(req, this.getMeta(),
      this.muCallbackInform('Profile updated successfully', setSubmitting));
  }

  onDelete(m) {
    /*const req = new A.messages.UserDeleteReq();
    const u = new A.messages.User();
    u.setUid(m.getUid());
    req.setUser(u);
    A.adminService.deleteUser(req, this.getMeta(), this.delCallback('User Deleted Successfully'));
  */
  }
}

export const c = new CRUD();
