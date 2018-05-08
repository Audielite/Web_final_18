document.getElementById('Home').click();

document.getElementById('AudiHome').style.display = 'block';

function openPage (pageName) {
  console.log(pageName)
  var i, tabcontent, tablinks;


  // hide all the panels
  tabcontent = document.getElementsByClassName('tabcontent');
  console.log(tabcontent)
  for (i = 0; i < tabcontent.length; i++) {
    console.log(tabcontent[i])
    tabcontent[i].style.display = 'none';
  }

  var showThisPanel = document.getElementById(pageName);
  console.log('show this panel: ', showThisPanel)
  showThisPanel.style.display = 'block'

  // ??
  tablinks = document.getElementsByClassName('tablink');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
}
//   //open specific tab section
//   function openPage(pageName) {
//     var i, Auditabcontent, Auditablinks;
//     Auditabcontent = document.getElementsByClassName("Auditabcontent");
//     for (i = 0; i < Auditabcontent.length; i++) {
//         Auditabcontent[i].style.display = "none";
//     }
//     Auditablinks = document.getElementsByClassName("Auditablink");
//     for (i = 0; i < Auditablinks.length; i++) {
//         Auditablinks[i].style.backgroundColor = "";
//     }
//     // Show desired tab
//     document.getElementById(pageName).style.display = "block";
// }
//
//   function openPage(pageName) {
//     var i, BMWtabcontent, BMWtablinks;
//     BMWtabcontent = document.getElementsByClassName("BMWtabcontent");
//     for (i = 0; i < BMWtabcontent.length; i++) {
//         BMWtabcontent[i].style.display = "none";
// }
//     document.getElementById(pageName).style.display = "block";
// }
//
//   function openPage(pageName) {
//     var i, Merctabcontent, Merctablinks;
//     Merctabcontent = document.getElementsByClassName("Merctabcontent");
//     for (i = 0; i < Merctabcontent.length; i++) {
//         Merctabcontent[i].style.display = "none";
// }
//     document.getElementById(pageName).style.display = "block";
// }

function usersEdits () {
  // get the element being edited
  var editText = document.getElementById('edit');
  // get edited content
  var usersEdited = editText.innerHTML;
  // save edited content
  localStorage.changedText = usersEdited;
  // display saved message
  document.getElementById('update').innerHTML = 'Your changes have been saved!';
}

function BMWuserEdits () {
  var BMWeditText = document.getElementById('BMWedit');
  var BMWuserEdited = BMWeditText.innerHTML;
  localStorage.changedText = BMWuserEdited;
  document.getElementById('updates').innerHTML = 'Your changes have been saved!';
}

function AudiuserEdits () {
  var AudieditText = document.getElementById('Audiedit');
  var AudiuserEdited = AudieditText.innerHTML;
  localStorage.changedText = AudiuserEdited;
  document.getElementById('updated').innerHTML = 'Your changes have been saved!';
}
// search for local saves per tab
function usersChange () {
  if (localStorage.changedText != null)
    document.getElementById('edit').innerHTML = localStorage.changedText;
}

function AudiuserChange () {
  if (localStorage.changedText != null)
    document.getElementById('Audiedit').innerHTML = localStorage.changedText;
}

function BMWuserChanges () {
  if (localStorage.changedText != null)
    document.getElementById('BMWedit').innerHTML = localStorage.changedText;
}

document.getElementById('getval').addEventListener('change', readURL, true);
function readURL () {
  var file = document.getElementById('getval').files[0];
  var reader = new FileReader();
  reader.onloadend = function () {
    document.getElementById('clock').style.backgroundImage = 'url(' + reader.result + ')';
  }
  if (file) {
    reader.readAsDataURL(file);
  } else {
  }
}

function myFunction() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var email = document.getElementById('email').value;

  if (username.length === 0) {
    alert('Please input a username');
  } else if (password.length === 0) {
    alert('Please input a password');
  } else if (email.length === 0) {
    alert('Please input an email');
  }
};

function miFunction() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if (username.length === 0) {
    alert('Please input a username');
  } else if (password.length === 0) {
    alert('Please input a password');
  }
};
