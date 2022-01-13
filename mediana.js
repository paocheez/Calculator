
/*const list1 = [100,200,500,400000000];*/

function calcMediana(){
    const listf = document.getElementById("InputValues");
    const list1 = listf.value;
    const list = list1.split(",");

    let orderList = list.sort( (a, b) => a - b );
    let mediana; 
    const middleList = parseInt(orderList.length/2);

        
    function calcMedia(list){
        const sumList = list.reduce(
            function (valueAcum = 0, newElement){
                return parseInt(valueAcum) + parseInt(newElement);
            }
        );

        const promedList = sumList / list.length;
        return promedList;
    }

    function esPar(number){
        if(number % 2 == 0){
            return true;
        }else{
            return false;
        }
    }

    if(esPar(orderList.length)){
        const elem1 = orderList[middleList-1];
        const elem2 = orderList[middleList];

        const promElem1y2 = calcMedia([elem1,elem2]);
        
        mediana = promElem1y2;

        const medianaValue = document.getElementById("FinalValueMMM");
        medianaValue.innerText = "El valor de la mediana es: "+mediana;
    }else{
        mediana = orderList[middleList];

        const medianaValue = document.getElementById("FinalValueMMM");
        medianaValue.innerText = "El valor de la mediana es: "+mediana;
    }
    return mediana;
}



function calcMedia(){
    const listf = document.getElementById("InputValues");
    const list1 = listf.value;
    const list = list1.split(",");
    
    const sumList = list.reduce(
        function (valueAcum = 0, newElement){
            return  parseInt(valueAcum) + parseInt(newElement);
        }
    );

    const promedList = sumList / list.length;
    
    const promedioValue = document.getElementById("FinalValueMMM");
    promedioValue.innerText = "El valor del promedio es: "+promedList.toFixed(1);

    return promedList;
}


function calcModa(){
    const listf = document.getElementById("InputValues");
    const list1 = listf.value;
    const list = list1.split(",");  

    const list1Count = {};

    list.map(
        function(element){
            if (list1Count[element]){
                list1Count [element] += 1;
            }else{
                list1Count[element] = 1;
            }
        }
    );

    const list1Array = Object.entries(list1Count).sort(
        (elemA,elemB) => {
            return elemA[1]-elemB[1];
        }
    );
    
    console.log(list1Array);
    const moda = list1Array[list1Array.length-1][0];

    const modaValue = document.getElementById("FinalValueMMM");
    modaValue.innerText = "El valor de la moda es: "+ moda;

}

function deletecontent(){
    document.getElementById("InputValues").value = "";
}