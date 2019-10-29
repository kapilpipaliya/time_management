<script lang="typescript">
    import * as A from 'index.ts'
    import {onMount, Table, Th, Tr, Pagination, ShowError, Add, TdEdit, TdDelete} from 'index.ts'
    import {CRUD} from './_form.ts'

    let filters = {
        login: {value: '', keys: ['login', 'first_name']}
    };
    let pageSize = 25;
    let totalPages = 1; //Fix this
    let currentPage = 1;
    const c = new CRUD();
    const er = c.er;
    const data = c.data;
    onMount(() => {
        //fetch();
        c.fetch();
    });


</script>
<template src='./_index.pug'></template>
