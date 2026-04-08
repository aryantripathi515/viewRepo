let userName = document.querySelector('#idname');
let repoName = document.querySelector('#reponame');
let submit = document.querySelector('#sub');
let cont = document.querySelector('#link_container');






submit.addEventListener('click',(e)=>{
    e.preventDefault();
    cont.innerHTML = `<a href=https://${userName.value}.github.io/${repoName.value}/ target="_blank"' ><span id='icon' class="material-symbols-outlined">
right_click
</span>Click_to_View<a/>`


    document.querySelector('#idname').value = '';
    document.querySelector('#reponame').value = '';
})

