function total (){
    let english = document.getElementById('english').value;
    let maths  = document.getElementById('maths').value;
    let science = document.getElementById('science').value;
    let nepali = document.getElementById('nepali').value;
    let computer = document.getElementById('computer').value;
    grades ="";

    let totalmarks = parseFloat(english) + parseFloat(maths) + parseFloat(science) +parseFloat(nepali) + parseFloat(computer);
    

    let percentage = (totalmarks/500)*100;

    
    

    if (percentage >= 80 && percentage <= 100){
        grades = 'A';
    }
    else if(percentage >= 60 && percentage <= 79){
        grades = 'B';
    }
    else if(percentage >= 40 && percentage <= 59){
        grades = 'C';
    }
    else{
        grades = 'F';
    }
    
    
    document.getElementById('total').innerHTML = totalmarks;
    document.getElementById('percentage').innerHTML = percentage;
    document.getElementById('remark').innerHTML = grades;
}