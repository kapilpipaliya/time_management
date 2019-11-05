<script lang='ts'>
    import {TitleBar, Form, Input, ShowError} from 'index.ts'
    import {c, A} from './_form.ts'
    const er = c.er;
    const schema = c.schema;
    const initialValues = c.initialValues;
    const title = "New " + c.title_name;
    const breadcrumbs = [A.bc_home, {href: A.uPath(), name: title}];
    const showForm = true;
    $initialValues = c.newInitialValues();
    (TitleBar, Form, Input, ShowError)

</script>
<template src='./_form.pug'></template>
