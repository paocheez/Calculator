//helpers/utils
function isPair(number){
    return (number%2===0);
}

function calcMedia(list){
    const sumList = list.reduce(
        function (valueAcum = 0, newElement){
            return valueAcum + newElement;
        }
    );

    const promedList = sumList / list.length;
    console.log(promedList)
    return promedList;
}

//Mediana calculator
function medianaSalary(list){
    const middle = parseInt (list.length/2);

    if(isPair(list.length)){
        const middlePerson1 = list[middle-1];
        const middlePerson2 = list[middle];

        const mediana = calcMedia([middlePerson1,middlePerson2]);
        return mediana;
    }else{
        const middlePerson = list[middle];
        return middlePerson;
    }
}

//General mediana
const salaryMex = mexico.map(
    (person) => person.salary
);

const salMexSorted = salaryMex.sort(
    (salaryA, salaryB) => salaryA-salaryB
)

const medianaGeneralMex = medianaSalary(salMexSorted);


//Mediana del top 10%
const spliceStart = (salMexSorted.length * 90) / 100;
const spliceCount = salMexSorted.length - spliceStart;

const topSalary = salMexSorted.splice(
    spliceStart,
    spliceCount
);

const medianaTop10Mex = medianaSalary(topSalary);



console.log(
    medianaGeneralMex,
    medianaTop10Mex
);