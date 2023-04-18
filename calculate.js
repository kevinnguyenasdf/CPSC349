
function calculateMax() {
    const weight = parseInt(document.getElementById("weight").value);
    const rep = parseInt(document.getElementById("rep").value);
    if(rep == 1){
        document.getElementById("result").textContent = "Your one rep max is: " + weight;
        return result;
    }
    if(rep > 30){
        document.getElementById("result").textContent = "Please enter a rep value 30 or below.";
        return result;
    }
    oneRepMax = weight + ((rep*0.02857)*weight);
    oneRepMax = oneRepMax.toFixed(2);
    if(Number.isNaN(weight) || Number.isNaN(rep) || weight <= 0 || rep <= 0){
        document.getElementById("result").textContent = "Please enter valid numbers."
        return result;
    }
    document.getElementById("result").textContent = "Your one rep max is: " + oneRepMax;
    return result;
  }

  
  function selectedWorkouts(){
    for(var i = 1; i <= 3; i++){
        document.getElementById("first" + i).textContent = document.getElementById("ube#1").value;
    }
    for(var i = 1; i <= 3; i++){
    document.getElementById("second"+ i).textContent = document.getElementById("ube#2").value;
    }
    for(var i = 1; i <= 3; i++){
    document.getElementById("shoulder" + i).textContent = document.getElementById("shoulder").value;
    }
  }
  function squatting(){
    
    let squatMax = parseInt(document.getElementById("squat").value);
    let prev = Math.ceil(squatMax*.8/10)*10;
    for(let i = 1; i <= 4; i++){
        document.getElementById("squatset" + i).textContent = prev;
        document.getElementById("squatset" + i).textContent += " x6";
    }

    prev = Math.ceil(squatMax*.7/10)*10;
    for(let i = 5; i <= 8; i++){
        document.getElementById("squatset" + i).textContent = prev;
        document.getElementById("squatset" + i).textContent += " x6";
    }
  }

  function deadlifting(){ 
    let deadliftMax = parseInt(document.getElementById("deadlift").value);
    let prev = Math.ceil(deadliftMax*.8/10)*10;
    for(let i = 1; i <= 2; i++){
        document.getElementById("deadliftset"+i).textContent = prev;
        document.getElementById("deadliftset"+i).textContent += " x6";
    }

    prev = Math.ceil(deadliftMax*.8/10)*10;
    for(let i = 3; i <= 4; i++){
        document.getElementById("deadliftset"+i).textContent = prev;
        document.getElementById("deadliftset"+i).textContent += " x6";
    }
   }

  function benching(){
    let benchMax = parseInt(document.getElementById("bench").value);
    benchMax = Math.ceil(benchMax/10)*10
    document.getElementById("bench1").textContent = benchMax * 0.5;
    document.getElementById("bench1").textContent += " x10";

    document.getElementById("bench2").textContent = benchMax * 0.675;
    document.getElementById("bench2").textContent += " x10";

    document.getElementById("bench3").textContent = benchMax * 0.75;
    document.getElementById("bench3").textContent += " x8";

    document.getElementById("bench4").textContent = benchMax * 0.775;
    document.getElementById("bench4").textContent += " x6";

    document.getElementById("bench5").textContent = benchMax * 0.5;
    document.getElementById("bench5").textContent += " x10";

    document.getElementById("bench6").textContent = benchMax * 0.675;
    document.getElementById("bench6").textContent += " x10";

    document.getElementById("bench7").textContent = benchMax * 0.75;
    document.getElementById("bench7").textContent += " x8";

    document.getElementById("bench8").textContent = benchMax * 0.8;
    document.getElementById("bench8").textContent += " x6";

    document.getElementById("bench9").textContent = benchMax * 0.8;
    document.getElementById("bench9").textContent += " xMR";
  }

  function showHidden() {
    let benchMax = parseInt(document.getElementById("bench").value);
    let deadliftMax = parseInt(document.getElementById("deadlift").value);
    let squatMax = parseInt(document.getElementById("squat").value);

    if(Number.isNaN(benchMax)||Number.isNaN(deadliftMax)||Number.isNaN(squatMax)){
        var hiddenTag = document.getElementById("invalid");
        hiddenTag.style.display = "block";
        var gridTag = document.getElementById("grid");
        gridTag.style.display = "none";
        return false;
    }
    if(benchMax <= 0 || deadliftMax <= 0 || squatMax <= 0){
        var hiddenTag = document.getElementById("invalid");
        hiddenTag.style.display = "block";
        var gridTag = document.getElementById("grid");
        gridTag.style.display = "none";
        return false;
    }

    var hiddenTagInvalid = document.getElementById("invalid");
    var hiddenTag = document.getElementById("grid");
    hiddenTag.style.display = "block";
    hiddenTagInvalid.style.display = "none";
    return false;
  }

