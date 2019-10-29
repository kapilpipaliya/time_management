#include "./dgraphormstartup.h"

#include "../../dgraph/dgraphclientmanger.h"
#include "../../dgraph/orm/dgraphorm.h"
#include "../../dgraph/orm/model.h"
#include "../../dgraph/orm/schema.h"
#include "../service/time/menu/menubase.h"
using namespace dgraph::orm;
namespace timeservice {
namespace seed {
DGraphOrmStartup::DGraphOrmStartup() {
  auto dgraphorm = dgraph::DGraphClientManger::getDGraphOrm("1");
  // clang-format off
  auto user = dgraphorm->model(dgraph::orm::Schema{"user", {
            FieldProps::builder{}.name("login").type(TypesType::STRING).index(true).unique(true).token(Token::builder{}.exact(true).build()).build()
           ,FieldProps::builder{}.name("password").type(TypesType::PASSWORD).build()
           ,FieldProps::builder{}.name("first_name").type(TypesType::STRING).index(true).token(Token::builder{}.term(true).trigram(true).fulltext(true).build()).build()
           ,FieldProps::builder{}.name("last_name").type(TypesType::STRING).index(true).token(Token::builder{}.exact(true).build()).build()
           ,FieldProps::builder{}.name("mail").type(TypesType::STRING).index(true).unique(true).token(Token::builder{}.exact(true).build()).build()
           ,FieldProps::builder{}.name("admin").type(TypesType::BOOL).build()
           ,FieldProps::builder{}.name("status").type(TypesType::INT).build()
           ,FieldProps::builder{}.name("last_login_on").type(TypesType::DATETIME).build()
           ,FieldProps::builder{}.name("language").type(TypesType::STRING).build()
           ,FieldProps::builder{}.name("auth_source_id").type(TypesType::INT).build()
           ,FieldProps::builder{}.name("type").type(TypesType::STRING).build()
           ,FieldProps::builder{}.name("identity_url").type(TypesType::STRING).build()
           ,FieldProps::builder{}.name("mail_notification").type(TypesType::STRING).build()
           ,FieldProps::builder{}.name("first_login").type(TypesType::BOOL).build()
           ,FieldProps::builder{}.name("force_password_change").type(TypesType::BOOL).build()
           ,FieldProps::builder{}.name("filed_login_count").type(TypesType::INT).build()
           ,FieldProps::builder{}.name("last_failed_login_on").type(TypesType::DATETIME).build()
           ,FieldProps::builder{}.name("consented_at").type(TypesType::DATETIME).build()
           ,FieldProps::builder{}.name("created").type(TypesType::DATETIME).build()
           ,FieldProps::builder{}.name("updated").type(TypesType::DATETIME).build()
    }});

  /*auto user1 = dgraphorm->model(Schema{
      "user",
      {FieldProps::builder{} .name("name").type(TypesType::STRING).index(true).lang(true).token(Token::builder{}.term(true).trigram(true).fulltext(true).build()).build(),
       FieldProps::builder{} .name("email").type(TypesType::STRING).index(true).unique(true).token(Token::builder{}.exact(true).build()).build(),
       FieldProps::builder{}.name("password").type(TypesType::PASSWORD).build(),
       FieldProps::builder{} .name("friend").type(TypesType::UID).model("user").count(true).reverse(true).build(),
       FieldProps::builder{} .name("avatar").type(TypesType::UID).model("media").replace(true).build()}});*/
  auto session = dgraphorm->model(Schema{"session",
        {FieldProps::builder{} .name("user").type(TypesType::UID).model("user").reverse(true).replace(true).build()}});

  auto post = dgraphorm->model(Schema{
      "post",
      {FieldProps::builder{}.name("title").type(TypesType::STRING).build(),
       FieldProps::builder{}.name("content").type(TypesType::STRING).build(),
       FieldProps::builder{}.name("author").type(TypesType::UID).model("user").replace(true).build(),
       FieldProps::builder{}.name("banner").type(TypesType::UID).model("media").replace(true).build()}});
  auto media = dgraphorm->model(Schema{
      "media",
      {FieldProps::builder{}.name("type").type(TypesType::STRING).build(),
       FieldProps::builder{}.name("src").type(TypesType::STRING).build()}});

  auto setting = dgraphorm->model(Schema{
      "setting",
      {FieldProps::builder{}.name("emum").type(TypesType::INT).index(true).build(),
       FieldProps::builder{}.name("name").type(TypesType::STRING).build(),
       FieldProps::builder{}.name("value").type(TypesType::STRING).build(),
       FieldProps::builder{}.name("updated").type(TypesType::DATETIME).build()}});
  auto user_setting = dgraphorm->model(dgraph::orm::Schema{
      "user_setting",
      {FieldProps::builder{}.name("user").type(TypesType::UID).model("user").build(),
       FieldProps::builder{}.name("enum").type(TypesType::INT).index(true).build(),
       FieldProps::builder{}.name("value").type(TypesType::STRING).build()}});

  auto color = dgraphorm->model(dgraph::orm::Schema{
      "color",
      {FieldProps::builder{}.name("name").type(TypesType::STRING).index(true).token(Token::builder{}.hash(true).build()).build(),
       FieldProps::builder{}.name("hexcode").type(TypesType::STRING).build()}});

  auto type = dgraphorm->model(dgraph::orm::Schema{
      "type",
      {FieldProps::builder{}.name("name").type(TypesType::STRING).build(),
       FieldProps::builder{}.name("position").type(TypesType::INT).build(),
       FieldProps::builder{}.name("is_in_roadmap").type(TypesType::BOOL).build(),
       FieldProps::builder{}.name("is_milestone").type(TypesType::BOOL).build(),
       FieldProps::builder{}.name("is_default").type(TypesType::BOOL).build(),
       FieldProps::builder{}.name("is_standard").type(TypesType::BOOL).build(),
       FieldProps::builder{}.name("color").type(TypesType::UID).model("color").build(),
       FieldProps::builder{}.name("attribute_groups").type(TypesType::STRING).build(),
       FieldProps::builder{}.name("description").type(TypesType::STRING).build()}});

  auto project = dgraphorm->model(dgraph::orm::Schema{
      "project",
      {FieldProps::builder{}.name("name").type(TypesType::STRING).build(),
       FieldProps::builder{}.name("identifier").type(TypesType::STRING).index(true).token(Token::builder{}.hash(true).build()).build(),
       FieldProps::builder{}.name("description").type(TypesType::STRING).build(),
       FieldProps::builder{}.name("is_public").type(TypesType::BOOL).build(),
       FieldProps::builder{}.name("status").type(TypesType::INT).build(),
       FieldProps::builder{}.name("parent_project").type(TypesType::UID).model("project").build(),
       FieldProps::builder{}.name("type").type(TypesType::UID).model("type").list(true).build(),
       FieldProps::builder{}.name("created").type(TypesType::DATETIME).build(),
       FieldProps::builder{}.name("updated").type(TypesType::DATETIME).build()}});

  auto wiki = dgraphorm->model(dgraph::orm::Schema{
      "wiki",
      {FieldProps::builder{}.name("project").type(TypesType::UID).model("project").build(),
       FieldProps::builder{}.name("start_page").type(TypesType::STRING).build(),
       FieldProps::builder{}.name("status").type(TypesType::INT).build(),
       FieldProps::builder{}.name("created").type(TypesType::DATETIME).build(),
       FieldProps::builder{}.name("updated").type(TypesType::DATETIME).build()}});
  auto forum = dgraphorm->model(dgraph::orm::Schema{
      "forum",
      {FieldProps::builder{}.name("project").type(TypesType::UID).model("project").build(),
       FieldProps::builder{}.name("name").type(TypesType::STRING).build(),
       FieldProps::builder{}.name("description").type(TypesType::STRING).build(),
       FieldProps::builder{}.name("position").type(TypesType::INT).build(),
       FieldProps::builder{}.name("topics_count").type(TypesType::INT).build(),
       FieldProps::builder{}.name("messages_count").type(TypesType::INT).build(),
       FieldProps::builder{}.name("last_message").type(TypesType::UID).model("message").build()}});
  // queries table
  auto status = dgraphorm->model(dgraph::orm::Schema{
      "status",
      {FieldProps::builder{}.name("name").type(TypesType::STRING).build(),
       FieldProps::builder{}.name("is_closed").type(TypesType::BOOL).build(),
       FieldProps::builder{}.name("is_default").type(TypesType::BOOL).build(),
       FieldProps::builder{}.name("position").type(TypesType::INT).build(),
       FieldProps::builder{}.name("default_done_ration").type(TypesType::INT).build(),
       FieldProps::builder{}.name("color").type(TypesType::UID).model("color").build(),
       FieldProps::builder{}.name("is_readonly").type(TypesType::BOOL).build(),
       FieldProps::builder{}.name("created").type(TypesType::DATETIME).build(),
       FieldProps::builder{}.name("updated").type(TypesType::DATETIME).build()}});
  auto priority = dgraphorm->model(dgraph::orm::Schema{
      "priority",
      {FieldProps::builder{}.name("name").type(TypesType::STRING).build(),
       FieldProps::builder{}.name("position").type(TypesType::INT).build(),
       FieldProps::builder{}.name("is_default").type(TypesType::BOOL).build(),
       FieldProps::builder{}.name("active").type(TypesType::BOOL).build(),
       FieldProps::builder{}.name("color").type(TypesType::UID).model("color").build(),
       FieldProps::builder{}.name("project").type(TypesType::UID).model("project").build(),
       FieldProps::builder{}.name("created").type(TypesType::DATETIME).build(),
       FieldProps::builder{}.name("updated").type(TypesType::DATETIME).build()}});
  auto work_package = dgraphorm->model(dgraph::orm::Schema{
      "work_package",
      {FieldProps::builder{}.name("type").type(TypesType::UID).model("type").build(),
       FieldProps::builder{}.name("project").type(TypesType::UID).model("project").build(),
       FieldProps::builder{}.name("subject").type(TypesType::STRING).build(),
       FieldProps::builder{}.name("description").type(TypesType::STRING).build(),
       FieldProps::builder{}.name("position").type(TypesType::INT).build(),
       FieldProps::builder{}.name("due_date").type(TypesType::DATETIME).build(),
       FieldProps::builder{}.name("category").type(TypesType::UID).model("category").build(),
       FieldProps::builder{}.name("status").type(TypesType::UID).model("status").build(),
       FieldProps::builder{}.name("assigned_to").type(TypesType::UID).model("user").build(),
       FieldProps::builder{}.name("priority").type(TypesType::UID).model("priority").build(),
       FieldProps::builder{}.name("fixed_version").type(TypesType::INT).build(),
       FieldProps::builder{}.name("author").type(TypesType::UID).model("user").build(),
       FieldProps::builder{}.name("lock_version").type(TypesType::INT).build(),
       FieldProps::builder{}.name("done_ration").type(TypesType::INT).build(),
       FieldProps::builder{}.name("estimated_hours").type(TypesType::FLOAT).build(),
       FieldProps::builder{}.name("start_date").type(TypesType::DATETIME).build(),
       FieldProps::builder{}.name("responsible").type(TypesType::UID).model("user").build(),
       FieldProps::builder{}.name("cost_project").type(TypesType::UID).model("project").build(),
       FieldProps::builder{}.name("story_points").type(TypesType::INT).build(),
       FieldProps::builder{}.name("remaining_hours").type(TypesType::FLOAT).build(),
       FieldProps::builder{}.name("derived_estimated_hours").type(TypesType::FLOAT).build(),
       FieldProps::builder{}.name("created").type(TypesType::DATETIME).build(),
       FieldProps::builder{}.name("updated").type(TypesType::DATETIME).build()}});
  auto role = dgraphorm->model(dgraph::orm::Schema{
      "role",
      {FieldProps::builder{}.name("name").type(TypesType::STRING).build(),
       FieldProps::builder{}.name("position").type(TypesType::INT).build(),
       FieldProps::builder{}.name("assignable").type(TypesType::BOOL).build()}});
  auto role_permission = dgraphorm->model(dgraph::orm::Schema{
      "role_permission",
      {FieldProps::builder{}.name("name").type(TypesType::STRING).build(),
       FieldProps::builder{}.name("role").type(TypesType::UID).model("role").build(),
       FieldProps::builder{}.name("permission").type(TypesType::INT).build(),
       FieldProps::builder{}.name("created").type(TypesType::DATETIME).build(),
       FieldProps::builder{}.name("updated").type(TypesType::DATETIME).build()}});
  auto category = dgraphorm->model(dgraph::orm::Schema{
      "category",
      {FieldProps::builder{}.name("name").type(TypesType::STRING).build(),
       FieldProps::builder{}.name("project").type(TypesType::UID).model("project").build(),
       FieldProps::builder{}.name("assigned_to").type(TypesType::UID).model("user").build(),
       FieldProps::builder{}.name("created").type(TypesType::DATETIME).build(),
       FieldProps::builder{}.name("updated").type(TypesType::DATETIME).build()}});

  auto announcement = dgraphorm->model(dgraph::orm::Schema{
      "announcement",
      {FieldProps::builder{}.name("text").type(TypesType::STRING).build(),
       FieldProps::builder{}.name("show_until").type(TypesType::DATETIME).build(),
       FieldProps::builder{}.name("active").type(TypesType::BOOL).build(),
       FieldProps::builder{}.name("created").type(TypesType::DATETIME).build(),
       FieldProps::builder{}.name("updated").type(TypesType::DATETIME).build()}});
  auto news = dgraphorm->model(dgraph::orm::Schema{
      "news",
      {FieldProps::builder{}.name("project").type(TypesType::UID).model("project").build(),
       FieldProps::builder{}.name("title").type(TypesType::STRING).build(),
       FieldProps::builder{}.name("summery").type(TypesType::STRING).build(),
       FieldProps::builder{}.name("description").type(TypesType::STRING).build(),
       FieldProps::builder{}.name("author").type(TypesType::UID).model("auhor").build(),
       FieldProps::builder{}.name("comments_count").type(TypesType::INT).build(),
       FieldProps::builder{}.name("created").type(TypesType::DATETIME).build(),
       FieldProps::builder{}.name("updated").type(TypesType::DATETIME).build()}});
  auto grid = dgraphorm->model(dgraph::orm::Schema{
      "grid",
      {FieldProps::builder{}.name("project").type(TypesType::UID).model("project").build(),
       FieldProps::builder{}.name("user").type(TypesType::UID).model("user").build(),
       FieldProps::builder{}.name("row_count").type(TypesType::INT).build(),
       FieldProps::builder{}.name("column_count").type(TypesType::INT).build(),
       FieldProps::builder{}.name("type").type(TypesType::STRING).build(),
       FieldProps::builder{}.name("name").type(TypesType::STRING).build(),
       FieldProps::builder{}.name("options").type(TypesType::STRING).build(),
       FieldProps::builder{}.name("created").type(TypesType::DATETIME).build(),
       FieldProps::builder{}.name("updated").type(TypesType::DATETIME).build()}});
  auto grid_widget = dgraphorm->model(dgraph::orm::Schema{
      "grid_widget",
      {FieldProps::builder{}.name("grid").type(TypesType::UID).model("grid").build(),
       FieldProps::builder{}.name("start_now").type(TypesType::INT).build(),
       FieldProps::builder{}.name("end_now").type(TypesType::INT).build(),
       FieldProps::builder{}.name("start_column").type(TypesType::INT).build(),
       FieldProps::builder{}.name("end_column").type(TypesType::INT).build(),
       FieldProps::builder{}.name("identifier").type(TypesType::STRING).build(),
       FieldProps::builder{}.name("options").type(TypesType::STRING).build()}});
  auto menu = dgraphorm->model(dgraph::orm::Schema{
      "menu",
      {FieldProps::builder{}.name("menu_name").type(TypesType::STRING).index(true).token(Token::builder{}.exact(true).build()).build(),
       FieldProps::builder{}.name("name").type(TypesType::STRING).index(true).token(Token::builder{}.hash(true).build()).build(),
       FieldProps::builder{}.name("path").type(TypesType::STRING).build(),
       FieldProps::builder{}.name("caption").type(TypesType::STRING).build(),
       FieldProps::builder{}.name("icon").type(TypesType::STRING).build(),
       FieldProps::builder{}.name("param").type(TypesType::STRING).build(),
       FieldProps::builder{}.name("position").type(TypesType::INT).build(),
       FieldProps::builder{}.name("help").type(TypesType::STRING).build(),
       FieldProps::builder{}.name("level").type(TypesType::INT).index(true).build(),
       // FieldProps::builder{}.name("parent").type(TypesType::UID).model("menu").reverse(true).build(),
       FieldProps::builder{}.name("children").type(TypesType::UID).model("menu").list(true).build(),
       FieldProps::builder{}.name("html").type(TypesType::UID).model("html").build()}});
  auto html = dgraphorm->model(dgraph::orm::Schema{
      "html",
      {FieldProps::builder{}.name("id").type(TypesType::STRING).build(),
       FieldProps::builder{}.name("title").type(TypesType::STRING).build(),
       FieldProps::builder{}.name("class").type(TypesType::STRING).build(),
       FieldProps::builder{}.name("target").type(TypesType::STRING).build()}});
  // clang-format on
  {
    timeservice::MenuBase m;
    m.seed_init_data();
  }
}
}  // namespace seed
}  // namespace timeservice
