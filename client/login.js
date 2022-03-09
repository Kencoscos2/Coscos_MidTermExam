var el = document.getElementById('login')

if(el){
el.addEventListener('click', function(){
    login()


    messages = document.getElementById('message')
    username = document.getElementById('username').value

    message.innerHTML = username + 'has logged In';
    console.log(messages)
    
})
   
}