document.getElementById('info1').value 
document.getElementById('info2').value 


document.getElementById('btn').addEventListener('click', function () {

    const info1Value = document.getElementById('info1').value;
    const info2Value = document.getElementById('info2').value;
    const p1 = document.querySelector('.p1')

    

    const data = {
        info1: info1Value,
        info2: info2Value,
    };
   

       
      if(info1Value,info1Value ==! " " ){
        p1.textContent = "Enter the info"
      } else{
        p1.textContent = "Data saved to LocalStorage " + " " + JSON.stringify(data)
      }

    localStorage.setItem('userData', JSON.stringify(data));
});


