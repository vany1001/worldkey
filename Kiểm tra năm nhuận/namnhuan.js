let year = parseInt(prompt("Enter a year"));

if (year % 4 == 0 ){
    if (year % 100 == 0){
        if (year % 400 == 0){
            alert(year + " leap year " );
        } else {
            alert(year + " no leap year " );
        }
     } else {
        alert(year + " leap year " );
        }
     } else {
        alert(year + " no leap year " );
     }
