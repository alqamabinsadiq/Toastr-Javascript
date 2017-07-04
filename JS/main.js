// variables
var toasts = [];
var counter = 1;
var Toastertype;

// Methods
function Toaster(title, message, Toastertype) {
    this.title = title,
        this.message = message,
        this.type = Toastertype
}

function myFunction() {
    if (document.getElementById('r1').checked) {
        Toastertype = document.getElementById('r1').value;
    }
    else if (document.getElementById('r2').checked) {
        Toastertype = document.getElementById('r2').value;
    }
    else if (document.getElementById('r3').checked) {
        Toastertype = document.getElementById('r3').value;
    }
    else
        Toastertype = document.getElementById('r1').value;

    var toaster = new Toaster(document.getElementById("title").value, document.getElementById("message").value, Toastertype);
    toasts.push(toaster);
    toasts.map((value) => {
        var x = document.getElementById("snackbar");
        x.innerHTML += "<div id=" + `toaster${counter}` + "><p>" + value.title + " </p> <p>" + value.message + "</p></div>";
        var id = (`toaster${counter}`).toString();
        var y = document.getElementById(id);
        if (value.type === "success") {
            y.className = "show";
        }
        else if (value.type === "warning") {
            y.className = "showWarning";
        }
        else if (value.type === "error") {
            y.className = "showError";
        }
        setTimeout(function () {
            var elem = document.getElementById(id);
            document.getElementById("snackbar").removeChild(elem);
            y.className = y.className.replace("show", "hide");
        }, 3000);
        toasts.pop();
        counter++;
    });

}