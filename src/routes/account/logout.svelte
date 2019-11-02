<script lang="typescript">
    import {
        onMount,
        messages,
        accountService,
        goto,
        ShowError,
        getCookieValue
    } from 'index.ts'

    (ShowError);
    let isSubmitting;
    let er = '';

    onMount(() => {
        isSubmitting = true;
        er = "";

        const request = new messages.LogoutRequest();
        request.setToken(getCookieValue('time'));

        accountService.logout(request, {}, function (err, response) {
            isSubmitting = false;
            //const response = new messages.LoginResponse();
            if (!err) {
                switch (response.getStatus()) {
                    case messages.LoginResponse.ErrorStatus.OK:
                        document.cookie = `time=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
                        goto('/account/login');
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
    });

</script>
<template src='./_logout.pug'></template>
