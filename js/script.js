let aside = document.querySelector('aside');
let icon = aside.querySelector('.menu-icon');
let li = aside.getElementsByClassName('nav-item');

// sidebar hide
icon.onclick = ()=> {
    aside.classList.toggle('expand');
}


// submenu active

for(let i of li){
    i.onclick = activeSubmenu;
}

function activeSubmenu(){
    const list = Array.from(li);
    list.forEach(e=>e.classList.remove('active'));
    this.classList.add('active');
}