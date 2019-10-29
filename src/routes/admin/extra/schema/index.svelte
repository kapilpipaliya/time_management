<script lang="typescript">
    import {onMount, messages, adminService} from 'index.ts'
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
