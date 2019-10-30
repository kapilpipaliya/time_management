import * as A from 'index.ts';
export {A}
export class CRUD extends A.CRUDBase {
  constructor() {
    super();
    this.title_name = "News";
    this.schema = A.yup.object().shape({
      uid: A.yup.string(),
      project: A.yup.string().required(),
      title: A.yup.string().required(),
      summery: A.yup.string().required(),
      description: A.yup.string().required(),
      author: A.yup.string().required(),
      comments_count: A.yup.string().required(),
      created: A.yup.date().required(),
      updated: A.yup.date().required(),
    });
  }
  newInitialValues() {
    return {
    }
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
      created: m.getCreated(),
      updated: m.getUpdated(),
    }
  }
  onFetch(uids = undefined) {
    A.adminService.getNews(this.getReq(A.messages.NewsReq, uids), this.getMeta(), this.getCallback(res => {
      this.setData(uids, res.getNewsList());
    }))
  }
  onSubmit({detail: {values, setSubmitting, resetForm}}) {
    const req = new A.messages.NewsMutationReq();
    const m = new A.messages.News();
    m.setUid(values.uid);
    m.setProject(values.project);
    m.setTitle(values.title);
    m.setSummery(values.summery);
    m.setDescription(values.description);
    m.setAuthor(values.author);
    m.setCommentsCount(values.comments_count);
    m.setCreated(values.created);
    m.setUpdated(values.updated);
    req.setNews(m);
    A.adminService.mutateNews(req, this.getMeta(),
      this.muCallback(values.uid, 'News', '/', setSubmitting));
  }
  onDelete(m) {
    const req = new A.messages.NewsDeleteReq();
    const m_ = new A.messages.News();
    m_.setUid(m.getUid());
    req.setNews(m_);
    A.adminService.deleteNews(req, this.getMeta(), this.delCallback('News Deleted Successfully'));
  }
}
