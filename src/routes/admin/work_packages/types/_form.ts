import * as A from 'index.ts';
export {A}
class CRUD extends A.CRUDBase {
  constructor() {
    super();
    this.title_name = "Type";
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
  newInitialValues() {
    return {
      is_in_roadmap: false,
      is_milestone: false,
      is_default: false,
      is_standard: false,
    }
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
  onFetch(p, uids = undefined) {
    A.adminService.getType(this.getReq(A.messages.TypeReq, uids, p), this.getMeta(), this.getCallback(res => {
      this.setData(uids, res.getTypeList(), res);
    }))
  }
  onSubmit({detail: {values, setSubmitting, resetForm}}) {
    const req = new A.messages.TypeMutationReq();
    const m = new A.messages.Type();
    m.setUid(values.uid);
    m.setName(values.name);
    m.setPosition(values.position);
    m.setIsInRoadmap(values.is_in_roadmap);
    m.setIsMilestone(values.is_milestone);
    m.setIsDefault(values.is_default);
    m.setIsStandard(values.is_standard);
    m.setColor(values.color);
    m.setAttributeGroups(values.attribute_groups);
    m.setDescription(values.description);
    req.setType(m);
    A.adminService.mutateType(req, this.getMeta(),
      this.muCallback(values.uid, 'Type', '/', setSubmitting));
  }
  onDelete(m) {
    const req = new A.messages.TypeDeleteReq();
    const m_ = new A.messages.Type();
    m_.setUid(m.getUid());
    req.setType(m_);
    A.adminService.deleteType(req, this.getMeta(), this.delCallback('Type Deleted Successfully'));
  }
}
export const c = new CRUD();
