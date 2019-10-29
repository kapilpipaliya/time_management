<script>
    import {onMount, onDestroy, messages, adminService, Table, Th, Tr, Pagination, ShowError, TitleBar, uPath, NotificationDisplay} from 'index.js'
    let text = '';
    let er = '';

    onMount(()=>{
        const request = new messages.SchemaReq();

        adminService.getSchema(request, {}, function(err, response) {
            //const response = new messages.SchemaRes;
            if(err){
                er = JSON.stringify(err)
            } else {
                text = response.getText();
            }
        });
    });
</script>

{er}
<pre>{text}</pre>
