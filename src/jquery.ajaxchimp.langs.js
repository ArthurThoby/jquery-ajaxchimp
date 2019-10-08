(function ($) {
    'use strict';

    // ISO-693-1 Language codes: http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes

    // Submit Message
    //  submit: 'Submitting...'

    // Success Message
    //  success: 'Please confirm by clicking on the link we just sent to $1.'

    // Note: The actual success message sent by mailchimp is too long
    //  so it has been changed. The actual mesage is this: "Almost finished... We need
    //  to confirm your email address. To complete the subscription process, please
    //  click the link in the email we just sent you."

    // Error Messages
    // errors: {
    //    1: 'Please enter a value',
    //    2: 'An email address must contain a single @',
    //    3: 'The domain portion of the email address is invalid (the portion after the @: $1 )',
    //    4: 'The username portion of the email address is invalid',
    //    5: 'This email address looks fake or invalid. Please enter a real email address',
    //    6: 'Too many subscribe attempts for this email address. Please try again in about 5 minutes.',
    //    7: '$1 is already subscribed to list $2'
    // }

    $.ajaxChimp.translations = {
        fr: {
            submit: 'Traitement en cours...',
            success: 'Nous vous avons envoyé un e-mail de confirmation',
            error: {
                1: 'Merci d\'indiquer une valeur',
                2: 'Une adresse e-mail doit contenir un seul @',
                3: 'Le domaine de votre e-mail n\'est pas valide (la partie après le @: $1)',
                4: 'La première partie de votre email n\'est pas valide (la partie avant le signe @: $1)',
                5: 'Cette adresse e-mail semble fausse ou non valide. Merci de renseigner une adresse email valide',
                6: 'Vous avez fait trop de tentatives, merci de patienter 5 minutes puis réessayez',
                7: '$1 est déjà utilisée, merci de fournir une autre adresse email'
            }
        }
    };
})(jQuery);
