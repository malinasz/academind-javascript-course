const task3Element = document.getElementById('task-3');

function babyInfo () {
    alert('My name is Bento.');
}

function babyDad (dad) {
    alert('Hi' + ' ' + dad);
}

function familyInfo (mom, dad, son) {
    let newFamily = `${mom}, ${dad} e ${son}.`;
    return newFamily;
}

babyInfo();

babyDad('Gabriel');

task3Element.addEventListener('click', babyInfo);

familyInfo('Ana', 'Roberto', 'Gabriel');

const familyStatus = familyInfo('Ana', 'Roberto', 'Gabriel')
alert(familyStatus);