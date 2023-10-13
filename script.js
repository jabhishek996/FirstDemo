
var close_sign_up=document.querySelector("#close_sign_up");
var close_login_btn=document.querySelector("#close_login_btn");
var signup_page=document.querySelector("#signup_page");
var overlay=document.querySelector("#overlay");
var create_account=document.querySelector("#create_account");
var join_group=document.querySelector("#join_group");
var login_page=document.querySelector("#login_page");
var Already_sign_in=document.querySelector("#Already_sign_in");
var create_new_acc=document.querySelector("#create_new_acc");
var mobile_join_btn=document.querySelector("#mobile_join_btn");

mobile_join_btn.addEventListener('click',function(){
    login_page.classList.remove('hidden');
    overlay.classList.add('overlay');
})

close_sign_up.addEventListener('click',function(){
    signup_page.classList.add('hidden');
    overlay.classList.remove('overlay');
})

create_account.addEventListener('click',function(){
    signup_page.classList.remove('hidden');
    overlay.classList.add('overlay');
})


join_group.addEventListener('click',function(){

    login_page.classList.remove('hidden');
    overlay.classList.add('overlay');
})

close_login_btn.addEventListener('click',function(){
    login_page.classList.add('hidden');
    overlay.classList.remove('overlay');
})

Already_sign_in.addEventListener('click',function(){
    signup_page.classList.add('hidden');
    // overlay.classList.add('overlay');
    login_page.classList.remove('hidden');
    overlay.classList.add('overlay');
})

create_new_acc.addEventListener('click',function(){
    login_page.classList.add('hidden');
    signup_page.classList.remove('hidden');
    overlay.classList.add('overlay');
})