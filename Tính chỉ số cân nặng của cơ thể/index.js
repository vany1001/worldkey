function kiemtra() {
    let cannang = document.getElementById("cannang").value;
    let chieucao = document.getElementById("chieucao").value;
    
    let bmi = cannang / ( Math.pow(chieucao, 2) );
    let result = "";
    if (bmi >= 18.5 && bmi < 25) {
        result = "Underweight";
    } else if ( bmi >= 25 &&  bmi < 30) {
        result = "Normal";
    } else if ( bmi >= 30) {
        result = "Overweight";
    } else {
        result = "Obese" 
    }
    document.getElementById("result").innerHTML = "Chỉ số BMI là: " + bmi + ". Bạn " + result;
}