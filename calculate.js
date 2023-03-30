
function calculateMax() {
    const weight = parseInt(document.getElementById("weight").value);
    const rep = parseInt(document.getElementById("rep").value);
    if(rep == 1){
        document.getElementById("result").textContent = weight;
        return result;
    }
    if(rep > 30){
        document.getElementById("result").textContent = "Please enter a rep value 30 or below.";
        return result;
    }
    oneRepMax = weight + ((rep*0.02857)*weight);
    oneRepMax = oneRepMax.toFixed(2);
    if(Number.isNaN(weight) || Number.isNaN(rep)){
        document.getElementById("result").textContent = "Please enter valid numbers."
        return result;
    }
    document.getElementById("result").textContent = oneRepMax;
    return result;
  }


