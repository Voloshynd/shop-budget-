const shoppingMallData = {
  shops: [
    {
      width: 10,
      length: 5,
    },
    {
      width: 15,
      length: 7,
    },
    {
      width: 20,
      length: 5,
    },
    {
      width: 8,
      length: 10,
    },
  ],
  height: 5,
  moneyPer1m3: 30,
  budget: 50000,
};

function isBudgetEnough(data) {
  let entireAreaOfShops = 0;
  let entireVolumeOfShops = 0;
  data.shops.forEach((shopsDimensions) => {
    entireAreaOfShops += shopsDimensions.width * shopsDimensions.length;
  });
  entireVolumeOfShops = entireAreaOfShops * data.height;

  if (data.budget - entireVolumeOfShops * data.moneyPer1m3 >= 0) {
    return "Enough budget";
  } else {
    return "Budget is not enough";
  }
}

isBudgetEnough(shoppingMallData);
