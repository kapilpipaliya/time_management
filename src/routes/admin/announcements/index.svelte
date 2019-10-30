<script lang='ts'>
    import * as A from 'index.ts'
    import {c} from './_form.ts'
    import {onMount, Table, Th, Tr, Pagination, ShowError, Add, TdEdit, TdDelete} from 'index.ts'
    import { createBrowserHistory } from 'history';
    const history = createBrowserHistory();
    let filters = {};
    let firstRun = true;

    const pageSize = c.pageSize;
    const totalPages = c.totalPages;
    const currentPage = c.currentPage;
    const er = c.er;
    const data = c.data;
    const count = c.count
    onMount(()=> {
        c.setPaginate(history)
        c.refetch(history)($pageSize, $currentPage);
        firstRun = false
    });
    (ShowError, Add, Table, Th, Tr, TdEdit, TdDelete, Pagination);
</script>
<template src='./_index.pug'></template>
