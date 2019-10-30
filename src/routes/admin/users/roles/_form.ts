import * as A from 'index.ts';

export {A}

class CRUD extends A.CRUDBase {
  constructor() {
    super();
    this.title_name = "Role";
    this.schema = A.yup.object().shape({
      uid: A.yup.string(),
      name: A.yup.string().required(),
      // position: A.yup.string().required(),
      assignable: A.yup.bool(),
      // permissions:{permissions}, // fix
    });
  }

  newInitialValues() {
    return {
      assignable: false,
    }
  }

  toInitialValues(m) {
    return {
      uid: m.getUid(),
      name: m.getName(),
      // position: m.getPosition(),
      assignable: m.getAssignable(),
      // permissions: m.getPermissions(), //fix
    }
  }

  onFetch(p, uids = undefined) {
    A.adminService.getRole(this.getReq(A.messages.RoleReq, uids, p), this.getMeta(), this.getCallback(res => {
      this.setData(uids, res.getRoleList(), res);
    }))
  }

  onSubmit({detail: {values, setSubmitting, resetForm}}) {
    const req = new A.messages.RoleMutationReq();
    const m = new A.messages.Role();
    m.setUid(values.uid);
    m.setName(values.name);
    // m.setPosition(values.position);
    m.setAssignable(values.assignable);
    // m.setPermissions(values.permissions);
    req.setRole(m);
    A.adminService.mutateRole(req, this.getMeta(),
      this.muCallback(values.uid, 'Role', '/', setSubmitting));
  }

  onDelete(m) {
    const req = new A.messages.RoleDeleteReq();
    const m_ = new A.messages.Role();
    m_.setUid(m.getUid());
    req.setRole(m_);
    A.adminService.deleteRole(req, this.getMeta(), this.delCallback('Role Deleted Successfully'));
  }
}
export const c = new CRUD();
