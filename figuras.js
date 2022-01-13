//Square
const s_perimeter = (side) => side * 4;
const s_area = (side) => side * side;

//Triangle
const t_perimeter = (s1, s2, b) => s1 + s2 + b;
const t_area = (b,h) => ((b * h)/2);

//Circle
const c_diameter = (radio) => radio*2;
const PI = Math.PI;
const c_perimeter = (radio) => {
    const diameter = c_diameter(radio);
    return diameter * PI;
}
const c_area = (radio) => (radio*radio)*PI;

//Interacción con el HTML
function calcPerimSquare(){
    const input = document.getElementById("InputSquare");
    const value = input.value;

    const perimeter = s_perimeter(value);
    const perimeterValue = document.getElementById("FinalValue");
    perimeterValue.innerText = perimeter;
}

function calcAreaSquare(){
    const input = document.getElementById("InputSquare");
    const value = input.value;
    const area = s_area(value);
    const areaValue = document.getElementById("FinalValue");
    areaValue.innerText = area;
}

function calcPerimTriangle(){
    const input = document.getElementById("InputTriangle");
    const input2 = document.getElementById("InputTriangle2");
    const inputb = document.getElementById("InputTriangleBase");
    const value = parseInt(input.value);
    const value2 = parseInt(input2.value);
    const valueb = parseInt(inputb.value);
    const perimeter = t_perimeter(value,value2,valueb);
    
    const perimeterValue = document.getElementById("FinalValueT");
    perimeterValue.innerText = perimeter;
}

function calcAreaTriangle(){
    const input = document.getElementById("InputTriangleHeight");
    const input2 = document.getElementById("InputTriangleBase");
    const value = input.value;
    const value2 = input2.value;
    const area = t_area(value2,value);
    
    const areaValue = document.getElementById("FinalValueT");
    areaValue.innerText = area;
}

function calcPerimCircle(){
    const input = document.getElementById("InputCircle");
    const value = input.value;
    const perimeter = c_perimeter(value);
    var conDecimal = perimeter.toFixed(1); 
    
    const perimeterValue = document.getElementById("FinalValueC");
    perimeterValue.innerText = conDecimal;
}

function calcAreaCircle(){
    const input = document.getElementById("InputCircle");
    const value = input.value;
    const area = c_area(value);
    var conDecimal = area.toFixed(1); 
    
    const areaValue = document.getElementById("FinalValueC");
    areaValue.innerText = conDecimal;
}

function calcIsoTriangle(){
    const input = document.getElementById("InputTriangle");
    const input2 = document.getElementById("InputTriangle2");
    const inputb = document.getElementById("InputTriangleBase");
    const value = parseInt(input.value);
    const value2 = parseInt(input2.value);
    const valueb = parseInt(inputb.value);
    
    if(value==value2&&value!=valueb){
        let base = valueb/2;
        let height = Math.sqrt((value*value)-(base*base));
        alert("La altura de tu triángulo isósceles es: "+height);
    }else{
        alert("Las medidas no corresponden a un triángulo isósceles");
    }
}

function disableArea(){
    if (document.getElementById("InputTriangleHeight").value == '') {
        document.getElementById("getArea").disabled = true;
      } else {
        document.getElementById("getArea").disabled = false;
      }
}