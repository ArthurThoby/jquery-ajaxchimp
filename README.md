# ajaxChimp

AjaxChimp is a jQuery plugin that lets you ajaxify your mailchimp form.

Use this if you hate the jarring transition to the mailchimp website upon submitting an email address to mailchimp.

**Note**: This relies on an undocumented feature at mailchimp that uses JSONP to allow cross-domain ajax to work. You have been warned. (It has however, been around for at least 4 years that I know of, and probably more.)


## Install

Just add the script to your webpage (along with jQuery ofcourse). Get it here:

```
curl -O https://raw.githubusercontent.com/scdoshi/jquery-ajaxchimp/master/jquery.ajaxchimp.js
```

##### or via bower

```
bower install ajaxchimp
```

## Requirements

* jQuery

**Note**: Developed with 2.1.4, but it should work with earlier versions. If it does or does not work with a particular version, please open an issue on github.


## Use

#### On the mailchimp form element

```js
$('form-selector').ajaxChimp();
```

## Error / Success messages

If a label element is included in the form for the email input, then the success or error message will be displayed in it. A `valid` or `error` class will also be added accordingly.

#### Example Form
Roughly the embedded signup form no styles markup with a couple additions.

```html
<form action="https://YOUR-LIST.us20.list-manage.com/subscribe/post?u=SOME-ADDRESS&amp;id=ID" autocomplete="off" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank"> <!-- leave form action in markup to act as no js fallback -->
            <div id="mc_embed_signup_scroll">
              <div class="mc-field-group">
                  <label for="mce-EMAIL"><span class="screen-reader-text">Email Address</span></label>
                <input type="email" value="" placeholder="" name="EMAIL" class="email text-field-input" id="mce-EMAIL" minLenght="7" maxLength="100">
              </div>
              <div id="mce-responses">
                <div class="response hide-feedback" id="mce-sending-notification"></div>
                <div class="response hide-feedback" id="mce-error-response"></div>
                <div class="response hide-feedback" id="mce-success-response"></div>
              </div>
              <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
              <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="SOME-NAME-GIVEN-BY-MC" tabindex="-1" value=""></div>
              <div class="clear submit-button"><button type="submit" name="subscribe" id="mc-embedded-subscribe" class="button"><span class="screen-reader-text">Valider</span></button></div>
            </div>
          </form>
```

```js
$('#mc-embedded-subscribe-form').ajaxChimp();
```


## Options

### Callbacks

Optionally, you can specify a callback with either method to run after the ajax query to mailchimp succeeds or fails.

The form element that triggered the ajax call is also passed in to the callbacks as the last argument.

```js
var formAjaxChimp = $('form-selector').ajaxChimp({
    callback: callbackFunction
});

formAjaxChimp.done(function (data, textStatus, jqXHR, form) {
    // success callback code here
});

formAjaxChimp.fail(function (jqXHR, textStatus, errorThrown, form) {
    // failure callback code here
});

formAjaxChimp.always(function () {
    var form = arguments[3];
    // always callback code here
});

```

### URL

You can specify the mailchimp URL to post to (or override the url provided on the form element)

```js
$('form-selector').ajaxChimp({
    url: 'mailchimp-post-url'
});
```

The mailchimp post url will look like this:

```
http://blahblah.us1.list-manage.com/subscribe/post?u=5afsdhfuhdsiufdba6f8802&id=4djhfdsh99f
```

### Custom messages

To display custom messages, override the default english translations.

Notice the use of `$1`, `$2` etc. These are regular expression groups from the original messages for the parts that are dynamic, such as the email address. You can omit them if you want to use a constant message.

For e.g., to change the success message:

```js
$.ajaxChimp.translations.en = {
    success: 'Why not say this instead, for the email address $1',
}

```

### Multiple language support

- Specify the language as an option.
- Include `jquery.ajaxchimp.langs.js` in the html file.
- Only French for now.

```js
$('form-selector').ajaxChimp({
    language: 'fr'
});
```

