import JustValidate from 'just-validate';

const formEl = document.getElementById("courier-request-form");

const validateForm = new JustValidate(formEl, {
    validateBeforeSubmitting: 'true',
})

validateForm.addField('#name', [
    {
        rule: 'required',
        errorMessage: "Type a name"
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
        rule:'number',
    },
    {
        rule: 'minLength',
        value: 10,
    },
    {
        rule: 'maxLength',
        value: 10,
    }
],
    {
        errorLabelCssClass: ["form-error"],
    }
);
validateForm.addField('#date', [{
    rule: 'required',
},
],
    {
        errorLabelCssClass: ["form-error"],
    }
);
validateForm.addField('#pickup-address', [{
    rule: 'required',
},
],
    {
        errorLabelCssClass: ["form-error"],
    }
);

    validateForm.onSuccess(() => {
        const formData = new FormData(formEl);

        // to get values of the form
        const formEntries = Object.fromEntries(formData);
        
        // store it in localStorage

        const excistingData = localStorage.getItem("courierData", formEntries)
        const newcourierData = [];
        newcourierData.push(excistingData);
        
JSON.parse(newcourierData)
console.log(newcourierData);

        localStorage.setItem("courierData", JSON.stringify(formEntries))
    });
