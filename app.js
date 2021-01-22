
let selectForm = document.getElementById('storage-select');
selectForm.addEventListener("blur", selectValidator);

function selectValidator(){
    let selectValue = selectForm.value;
    // console.log(selectValue);
    if(selectValue === "Select the Source"){
        alert("please select a provider");
    }
}

function resetForm(){
    document.getElementById('myForm').reset();
}

let regexValidation = /^[a-zA-Z \d]{5,}$/

let inputElements = document.getElementsByClassName('form-element');
for (var i = 0; i < inputElements.length; i++) {
    inputElements[i].addEventListener('blur', formValidator, false);
}
function formValidator(){
     validation = this.value;
     if (regexValidation.test(validation)){
        this.parentElement.getElementsByClassName('show-error')[0].innerHTML = "";
     }else{
         if(this.value) {
            this.parentElement.getElementsByClassName('show-error')[0].innerHTML = (this.value.length > 5) ? '*Special Char not allowed*' : 'Minimum 5 character required*';
         } else {
            if(this.title) {
                this.parentElement.getElementsByClassName('show-error')[0].innerHTML = `${this.title} field is required.*`;   
            }
         }
     }   
}

// function showError(elementRef) {
//     if(elementRef.value) {
//         elementRef.parentElement.getElementsByClassName('show-error')[0].innerHTML = (elementRef.value.length > 5) ? '*Special Char not allowed*' : 'Minimum 5 character required*';
//      } else {
//         if(elementRef.title) {
//             elementRef.parentElement.getElementsByClassName('show-error')[0].innerHTML = `${elementRef.title} field is required*`;   
//         }
//      }
// }

let sumbitBtn = document.getElementById('submit-btn');
sumbitBtn.addEventListener("click" , showFormDetail);

function showFormDetail(e) {

    e.preventDefault();

    let dataSource = document.getElementById('storage-select').value;
    console.log(`Data-Source:${dataSource}`);

    let pipeLineName = document.getElementById('pipelinename').value;
    console.log(`Pipeline Name:${pipeLineName}`);

    let projectid = document.getElementById('project-id').value;
    console.log(`Project-ID:${projectid}`);

    let bucketName = document.getElementById('bucket-name').value;
    console.log(`Data-Source:${bucketName}`);

    let storageFiles = document.getElementById('files-loc').value;
    console.log(`Storage File:${storageFiles}`);

    let credentials = document.getElementById('credential').value;
    console.log(`credentials:${credentials}`);

    let runtime = document.getElementById('run').value;
    console.log(`Runtime:${runtime}`);

}

