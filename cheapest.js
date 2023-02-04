

function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
        const element = phones[i];
        if(element.price < cheapest.price){
            cheapest = element;
        }
    }
    return cheapest;
}
const phones = [
    {name : 'samsung' ,camera: 12, storage: '32gb', price: 36000,color:'silver' },
    {name : 'walton' ,camera: 15, storage: '64gb', price: 22000,color:'gold' },
    {name : 'symphony' ,camera: 18, storage: '128gb', price: 52000,color:'black' },
    {name : 'oppo' ,camera: 20, storage: '8gb', price: 11000,color:'red' },
    {name : 'nokia' ,camera: 25, storage: '50gb', price: 35000,color:'yellow' }
];
const cheapestPrice = cheapestPhone(phones);
console.log(cheapestPrice);