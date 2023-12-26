import JustValidate from 'just-validate';

const formEl = document.getElementById("courier-request-form");

const validateForm = new JustValidate(formEl)

validateForm.addField('#name', [
    {
        rule: 'required',
    },
    {
        rule: 'minLength',
        value: 3,
    },
    {
        rule: 'maxLength',
        value: 20,
    }
],
    {
        errorLabelCssClass: ["form-error"],
    }
);
validateForm.addField('#phoneNumber', [
    {
        rule: 'required',
       
    },
    {
        rule: 'minLength',
        value: 10,
    },
    {
        rule: 'maxLength',
        value:10,
    }
])