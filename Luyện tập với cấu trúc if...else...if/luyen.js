let user =prompt('Who is there?');
if (user == 'Admin') {
    let pass =prompt('Password');
    if (pass == 'TheMaster') {
        alert('Welcome');
    } else if (pass == null){
        alert('Canceled');
    } else {
        alert('Wrong password');
    }
} else if (user == 'null') {
    alert('canceld');
} else {
    alert('I don’t know you')
}


