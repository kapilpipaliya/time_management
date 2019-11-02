<script  lang="typescript">
    import {messages, accountService, goto, yup, Form, Input, Select, Choice, ShowError } from 'index.ts'
    (Form, ShowError, Input)
    let isSubmitting;
    let er = '';

    function handleSubmit ({ detail: { values, setSubmitting, resetForm } }) {
        isSubmitting = true;
        er = "";

        const request = new messages.LoginRequest();
        request.setUsername(values.username);
        request.setPassword(values.password);

        accountService.login(request, {}, function(err, response){
            isSubmitting = false;
            //const response = new messages.LoginResponse();
            if(!err){
                switch (response.getStatus()) {
                    case messages.LoginResponse.ErrorStatus.OK:
                        const token = response.getToken();
                        document.cookie = `time=${token}; path=/`;
                        // Todo: save cookie on context (and indexdb).
                        goto('/admin/dashboard');
                        break;
                    case messages.LoginResponse.ErrorStatus.USER_OR_PASS_NOT_MATCH:
                    default:
                        er = response.getErrorMsg();
                        break;
                }
            } else {
                er = JSON.stringify(err);
            }
        })
    }

    function handleReset() {
        console.log('form has been reset');
    }

    const schema = yup.object().shape({
        username: yup .string().required(),
        password: yup.string().min(4),
    });
</script>

<template src='./_login.pug'></template>
