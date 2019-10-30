import * as A from 'index.ts';
export {A}
class CRUD extends A.CRUDBase {
  constructor() {
    super();
    this.title_name = "Announcement";
    this.schema = A.yup.object().shape({
      uid: A.yup.string(),
      text: A.yup.string().required(),
      show_until: A.yup.date().required(),
      active: A.yup.bool().required(),
      // created: A.yup.date().required(),
      // updated: A.yup.date().required(),
    });
  }
  newInitialValues() {
    return {
      active: false,
    }
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
  onFetch(p, uids = undefined) {
    A.adminService.getAnnouncement(this.getReq(A.messages.AnnouncementReq, uids, p), this.getMeta(), this.getCallback(res => {
      this.setData(uids, res.getAnnouncementList(), res);
    }))
  }
  onSubmit({detail: {values, setSubmitting, resetForm}}) {
    const req = new A.messages.AnnouncementMutationReq();
    const m = new A.messages.Announcement();
    m.setUid(values.uid);
    m.setText(values.text);
    m.setShowUntil(values.show_until.toISOString());
    m.setActive(values.active);
    // m.setCreated(values.created);
    // m.setUpdated(values.updated);
    req.setAnnouncement(m);
    A.adminService.mutateAnnouncement(req, this.getMeta(),
      this.muCallback(values.uid, 'Announcement', '/', setSubmitting));
  }
  onDelete(m) {
    const req = new A.messages.AnnouncementDeleteReq();
    const m_ = new A.messages.Announcement();
    m_.setUid(m.getUid());
    req.setAnnouncement(m_);
    A.adminService.deleteAnnouncement(req, this.getMeta(), this.delCallback('Announcement Deleted Successfully'));
  }
}
export const c = new CRUD();
