<script  lang="typescript">
import {messages, accountService, goto, yup, Form, Input, Select, Choice, ShowError } from 'index.ts'
(Form, ShowError, Input)
let isSubmitting;
let er = '';

function handleSubmit ({ detail: { values, setSubmitting, resetForm } }) {
  isSubmitting = true;
  er = "";
  
  const request = new messages.RegisterRequest();
  request.setName(values.name);
  request.setUsername(values.username);
  request.setPassword(values.password);

  accountService.register(request, {}, function(err, response){
    isSubmitting = false;
    if(!err){
        switch (response.getStatus()) {
        case messages.RegisterResponse.ErrorStatus.OK:
          const token = response.getToken();
          document.cookie = `time=${token}; path=/`;
          // Todo: save cookie on context (and indexdb).
          goto('/admin/dashboard');
          break;
        case messages.RegisterResponse.ErrorStatus.INVALID_USERNAME:
          er = response.getErrorMsg();
          break;
        case messages.RegisterResponse.ErrorStatus.WEAK_PASSWORD:
          er = response.getErrorMsg();
          break;
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

//https://github.com/jquense/yup/issues/97#issuecomment-450151975
//https://github.com/jquense/yup/issues/570
const schema = yup.object().shape({
  name: yup .string().required() ,
  username: yup .string().required(),
  password: yup.string().min(4),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], "Passwords don't match").required('Confirm Password is required'),
});
</script>

<template src='./_register.pug'></template>

