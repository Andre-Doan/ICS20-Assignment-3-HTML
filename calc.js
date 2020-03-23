     let diameter;
     let circumference;
     let areaCircle;
     let radius;
     function myfunction() {
      diameter = document.getElementById("diameter").value
      areaCircle = Math.PI *diameter;
      alert(' The areaCircle is: ' +areaCircle);
     }
     function myfunction0(){
       radius = document.getElementById("radius").value;
       circumference = 2 * Math.PI * radius;
       alert('The circumference is: ' + circumference);
     }
      document.getElementById("circumference").addEventListener("click", myfunction0);
      document.getElementById("circleArea").addEventListener("click", myfunction);