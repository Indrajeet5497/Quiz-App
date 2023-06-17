function alertRequire(){
    let ss = document.querySelector('input[name="category"]:check');
    if (ss == null){
        alert("Please Select Cateory First");
        localStorage.removeItem("score");
        localStorage.removeItem("unAttemped");
        localStorage.removeItem("time");
    }
}