function woodCalculate(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 5;
    const perBedWood = 20;


    const chairWood = perChairWood * chairQuantity;
    const tableWood = perTableWood * tableQuantity;
    const bedWood = perBedWood * bedQuantity;

    const totalWood = chairWood + tableWood + bedWood;
    return totalWood ;
}

const totalWood = woodCalculate(5, 4, 2);
console.log(totalWood);