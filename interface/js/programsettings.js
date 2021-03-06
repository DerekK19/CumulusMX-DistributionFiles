$(document).ready(function () {

    $("#form").alpaca({
        "dataSource": "./api/settings/programdata.json",
        "optionsSource": "./api/settings/programoptions.json",
        "schemaSource": "./api/settings/programschema.json",
        //"view": "bootstrap-edit",
        "ui": "bootstrap",
        "postRender": function (form) {
            $("#save-button").click(function () {
                if (form.isValid(true)) {
                    var json = form.getValue();
                    $.ajax({
                        type: "POST",
                        url: "../api/setsettings/updateprogramconfig.json",
                        data: {json: JSON.stringify(json)},
                        dataType: "text",
                        success: function (msg) {
                            alert("Settings updated");
                        },
                        error: function (error) {
                            alert("error " + error);
                        }
                    });
                }
            });
        }
    });

});
