import * as A from "index.ts";

export {A}

export class CRUD extends A.CRUDBase {
  constructor() {
    super();
    this.schema = A.yup.object().shape({
      uid: A.yup.string(),
      name: A.yup.string().required(),
      position: A.yup.string().required(),
      is_in_roadmap: A.yup.bool().required(),
      is_milestone: A.yup.bool().required(),
      is_default: A.yup.bool().required(),
      is_standard: A.yup.bool().required(),
      color: A.yup.string().required(),
      attribute_groups: A.yup.string().required(),
      description: A.yup.string().required(),
    });
  }

  toInitialValues(m) {
    return {
      uid: m.getUid(),
      name: m.getName(),
      position: m.getPosition(),
      is_in_roadmap: m.getIsInRoadmap(),
      is_milestone: m.getIsMilestone(),
      is_default: m.getIsDefault(),
      is_standard: m.getIsStandard(),
      color: m.getColor(),
      attribute_groups: m.getAttributeGroups(),
      description: m.getDescription(),
    }
  }

  onFetch(uids = undefined) {
    A.adminService.getType(this.getReq(A.messages.TypeReq, uids), this.getMeta(), this.getCallback(res => {
      this.setData(uids, res.getTypesList());
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
