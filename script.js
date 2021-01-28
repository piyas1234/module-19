function loginFnc() {
    event.preventDefault();
    const userName = "piyas"
    const password = 1111

    const myname = document.getElementById('username').value;
    const mypass = document.getElementById('password').value;
    console.log(mypass);
    if(userName == myname && password == mypass){
        document.cookie = `login=yes; expires=${new Date()+1000*60*10}  `
        window.location.href='homepage.html'
    }else{
        const msg = 'Wrong username or Password!!!'
        document.getElementsByClassName('msg')[0].innerHTML= `<div class=" mt-3 alert alert-warning alert-dismissible fade show" role="alert"><strong>${msg}</strong><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>`
    }

}
 




