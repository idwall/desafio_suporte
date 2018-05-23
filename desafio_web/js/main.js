
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

        if ($('.validate-input input[name="name"]').val().trim() == '') {
            showValidate($('.validate-input input[name="name"]'));
            check = false;
        } else {
            hideValidate($('.validate-input input[name="name"]'))
        }

        if ($('.validate-input input[name="email"]').val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            showValidate($('.validate-input input[name="email"]'));
            check = false;
        } else {
            hideValidate($('.validate-input input[name="email"]'))
        }

        if ($('.validate-input input[name="subject"]').val().trim() == '') {
            showValidate($('.validate-input input[name="subject"]'));
            check = false;
        } else {
            hideValidate($('.validate-input input[name="subject"]'))
        }
        
        if ($('.validate-input textarea[name="message"]').val().trim() == '') {
            showValidate($('.validate-input textarea[name="message"]'));
            check = false;
        } else {
            hideValidate($('.validate-input textarea[name="message"]'))
        }

        e.preventDefault();

        if (check) {
            const url = 'https://webhook.site/d9288eaf-9f5a-4df6-8ace-44fd06e66b12';

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