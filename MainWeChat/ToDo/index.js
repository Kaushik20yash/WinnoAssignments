let ul = document.getElementById('ul');
let btn = document.getElementById('btn');
btn.addEventListener('click', function() {
    let input = document.getElementById('input');
    let li = document.createElement('li');
    let div = document.createElement('div');
    let p = document.createElement('p');
    let edit = document.createElement('button');
    edit.textContent = 'Edit';
    edit.id = "editbtn";
    let deletebtn = document.createElement('button');
    deletebtn.textContent = 'Delete';
    deletebtn.id = "deletebtn";
    div.style.display = 'flex';
    div.style.width = '100%';
    div.style.gap = '0.5em';
    div.style.boxSizing = 'border-box';
    p.style.width = '70%';
    edit.style.width = '15%';
    deletebtn.style.width = '15%';
    p.textContent = input.value;
    div.appendChild(p);
    div.appendChild(edit);
    div.appendChild(deletebtn);
    li.appendChild(div);
    ul.appendChild(li);

    edit.addEventListener('click', function() {
        ul.style.display = 'none';
        document.getElementById('edit-task').style.display = 'flex';
    });
    let save = document.getElementsByClassName('edit-details')[0];
    save.addEventListener('click', function() {
        li.textContent = document.getElementById('task-input').value;
        document.getElementById('task-input').value = '';
        document.getElementById('edit-task').style.display = 'none';
        ul.style.display = 'flex';
    });
    input.value = "";
});
