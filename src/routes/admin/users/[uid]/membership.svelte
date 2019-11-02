<script context='module'>
    export async function preload(page, session) {
        return {uid_param: page.params.uid}
    }
</script>
<script lang='ts'>
    import {TitleBar, Form, Input, ShowError} from 'index.ts';
    import {c, A} from '../_form.ts'
    import {t} from './_tab.ts'

    export let uid_param = "";
    const er = c.er;
    const schema = c.schema;
    const initialValues = c.initialValues;
    const title = "Edit " + c.title_name;
    const breadcrumbs = [A.bc_home, {href: A.uPath(), name: title}];

    let i = t.tabIndex;
    $i = 1;
    const lt = t.title;
    $: $lt = ($initialValues.first_name || '') + ' ' + ($initialValues.last_name || '');

    $: showForm = (uid_param && Object.keys($initialValues).length);
    if (uid_param && !Object.keys($initialValues).length) {
        c.fetch(undefined, [uid_param])
    }
    (TitleBar, Form, Input, ShowError)
</script>
<template src='./_membership.pug'></template>

