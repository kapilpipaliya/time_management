<script lang="typescript">
import {onMount, onDestroy, messages, adminService, Table, Th, Tr, Pagination, ShowError, TitleBar, uPath, NotificationDisplay} from 'index.ts'
export let menu_name="admin_menu";
let menu_data = [];
let er = '';
let breadcrumbs=[{href: "", icon: 'mif-meter'}, {href: uPath(), name: "Overview"}];

onMount(()=>{
  const request = new messages.MenuRequest();
  request.setName(menu_name);

  adminService.getMenu(request, {}, function(err, response) {
    //const response = new messages.MenuResponse;
    if(err){
      er = JSON.stringify(err)
    } else {
      const menu = response.getMenuList();
      // no need to convert to json.
      function getMenu(menu_) {
        return menu_.map(m => {
          return {name: m.getName(), path: m.getPath(), icon: m.getIcon(), children: getMenu(m.getChildrenList())}
        })
      }
      menu_data = getMenu(menu);
    }
  });
});
</script>

<style lang='less'>
a:hover {
  color: #0056b3;
  text-decoration: none;
  outline: rgba(29, 29, 29, 0.1) solid 4px;
}

</style>
<template src='./_index.pug'></template>
