  //видаляє через термін файлів cookie
document.cookie = "username=John Doe; expires=Thru, 18 Dec 2013 12:00:00 UTC; path=/";

document.cookie = encodeURIComponent("nazwa użytkownika") + "="
+ encodeURIComponent("karol nowak");
console,log(document.cookie)
let x = document.cookie;

//встановлює файли cookie
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime( )+ (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString(); 
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//отримує файли cookie
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++){
    let c = ca[i];
    while (c.charAt(0) == ' ')  {
    c = c.substring(1);
    }
    if (c.indexOf(name) == 0 ) {
      return c.substring(name.length,c.length);
    }
  }
  return "";
   
}

// перевірка файлів cookie
function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again" + user);

  }else{
   user = prompt("Please enter your name:", "");
   if (user != " " && user != null) {
    setCookie("username ", user , 30);
   } 

  }
}
