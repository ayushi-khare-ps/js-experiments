let lunch = [
    {item: "Chicken Fajitas", price: 19.95},
    {item: "Chips and Guacamole", price: 5.25},
    {item: "Sweet Tea", price: 2.79}
  ];


function calulateBill(lunch){
    itemCount = lunch.length;

    totalFoodCost = 0;

    for(let i=0; i< itemCount; i++){
        totalFoodCost += lunch[i].price;
    }

    tax = totalFoodCost * 0.08;
    tip = totalFoodCost * 0.18;
    console.log(`Food cost ${totalFoodCost}`);
    console.log(`Taxes ${tax}`);
    console.log(`Tip ${tip}`);
}


calulateBill(lunch);