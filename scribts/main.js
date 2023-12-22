var bookMarkName = document.getElementById("bookMarkName");
var wibsite = document.getElementById("wibsite");
var submit = document.getElementById("submit");
var lightBoxCountainer = document.getElementById("lightBoxCountainer");
var closeBtn = document.getElementById("closeBtn") ;



var productList = [];

if (localStorage.getItem("bookMark") !== null) {
    productList = JSON.parse(localStorage.getItem("bookMark"));
}

submit.addEventListener("click", function () {
if (validationName() && validationURL () == true)
{
    var bookMark = {
        name: bookMarkName.value,
        web: wibsite.value
    };

    productList.push(bookMark);
    localStorage.setItem("bookMark", JSON.stringify(productList));


    localStorage.setItem("lastVisitedURL", wibsite.value);

    showData();
    clearForm();
} else {
    lightBoxCountainer.classList.replace("d-none","d-flex" )
}
});

function clearForm() {
    bookMarkName.value = "";
    wibsite.value = "";
}

function showData() {
    var cartona = "";
    for (var i = 0; i < productList.length; i++) {
        cartona += `<tr>
            <td>${i + 1}</td>
            <td>${productList[i].name}</td>
            <td><button onclick="visit('${productList[i].web}')" class="btn visit"><i class="fa-solid fa-eye pe-2"></i> Visit</button></td>
            <td><button onclick="deleteData(${i})" class="btn delete py-2"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
        </tr>`;
    }
    document.getElementById("tBody").innerHTML = cartona;
}

function deleteData(i) {
    productList.splice(i, 1);
    localStorage.setItem("bookMark", JSON.stringify(productList));
    showData();
}

function visit(url) {
    if (url.includes('http')) {
        window.open(url, "_blank");
    } else {
        window.open(https://${url}, "_blank");
    }

    
    localStorage.setItem("lastVisitedURL", url);
}


window.onload = function () {
    var lastVisitedURL = localStorage.getItem("lastVisitedURL");

};

showData();

function validationName ()
{

    var text = bookMarkName.value
    var regex = /^[A-Za-z]{3,9}$/
    console.log(regex.test(text));
    if (regex.test(text) ==true)
    {
        bookMarkName.classList.add("is-valid")
        bookMarkName.classList.remove("is-invalid")
        return true
    }else {
        bookMarkName.classList.add("is-invalid")
        bookMarkName.classList.remove("is-valid")
        
        close ()
        return false
    }
}