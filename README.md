Ajax Submit
=========
jQuery plugin that ajaxfies form submissions.


## Example
    // ajaxify all forms
    $("form").ajaxSubmit();

    // ajaxify login form
    $("#loginForm").ajaxSubmit();


## Options

### method
Overwrite form submission method to be used for the ajax request.

    $("#myForm").ajaxSubmit({ method: "POST" });

### action
Overwrite the URL that the form is submitted to, to be used for the ajax request.

    $("#myForm").ajaxSubmit({ action: "/myForm_ajax_parse.php" });

### data
Object used to add additional parameters to the form submission or overwrite the ones from the form.

_**Html**_   

    <form method="post" action="myForm_parse.php" id="myForm">
        <input type="text" name="myField" />
        <input type="submit" />
    </form>

_**Js**_   

    $("#myForm").ajaxSubmit({ data: { myField: "new value", additionalField: "some value" } });

### success
Callback to be called on ajax success.

    $("#myForm").ajaxSubmit({ success: function(data) { alert("Submission successful! Data received: " + data); } });

## License
All code is released under the MIT License (open source, no warranty).