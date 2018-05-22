
(($) => {
    "use strict";


    /*==================================================================
    [ Validate ]*/
    const name = $('.validate-input input[name="name"]');
    const email = $('.validate-input input[name="mail"]');
    const subject = $('.validate-input input[name="subject"]');
    const message = $('.validate-input textarea[name="message"]');

    const showValidate = (input) => {
        const thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    };

    const hideValidate = (input) => {
        const thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }

    $('.validate-form').on('submit', (e) => {
        let check = true;

        if ($(name) && $(name).val() && $(name).val().trim() == '') {
            showValidate(name);
            check = false;
        }

        if ($(subject) && $(subject).val() && $(subject).val().trim() == '') {
            showValidate(subject);
            check = false;
        }

        if ($(email) && $(email).val() &&
            $(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            showValidate(email);
            check = false;
        }

        if ($(message) && $(message).val() && $(message).val().trim() == '') {
            showValidate(message);
            check = false;
        }

        e.preventDefault();

        if (check) {
            const url = 'https://webhook.site/042d5c5d-2d54-4646-a26f-7a103ca71163';

            const data = {
                name: $(name).val(),
                email: $(email).val(),
                subject: $(subject).val(),
                message: $(message).val()
            };

            const responseCallback = () => {
                alert('Obrigado pela mensagem! Entraremos em contato via E-mail.');
            }

            $.ajax({
                type: 'POST',
                url,
                crossDomain: true,
                data: JSON.stringify(data),
                complete: responseCallback,
            });
        }

        return check;
    });


    $('.validate-form .input1').each(() => {
        $(this).focus(() => {
            hideValidate(this);
        });
    });

})(jQuery);