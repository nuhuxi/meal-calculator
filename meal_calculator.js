/**
 * Created by mark07 on 5/23/15.
 */
(function(){
  var theBill = [
      {
        name: "Bill",
        items: [{item: ["potatoes", 5.99]}, {item: ["drink", 4.99]}, {item:["Hamburger", 6.99]}], // =
      },
      {
        name: "Mary",
        items: [{item:["foo", 5.22]}, {item: ["water", 4.33]}, {item: ["grease", 6.99]}, {item: ["bok choy", 1.51]},],
      },
      {
        name: "Tim",
        items: [{item: ["brussel sprouts", 5.67]}, {item: ["cauliflower", 4.87]}, {item: ["steak", 6.99]}],
      }
    ],


    theTotal = 0,
    personTotal,
    beforeTipTotal,
    taxRate = 0.07,
    tipRate = .15;


  var round = function(num){
    return Math.ceil(num * 100) / 100;
  };
  showTheBill();

  var showTheBill = function(){
    for (person in theBill){
      personTotal = 0;
      beforeTipTotal = 0;

      for(var i = 0; i < theBill[person].items.length ; i++){
        //console.log(theBill[person].name + " ate " + theBill[person].items[i].item[0] + " that cost " + theBill[person].items[i].item[1]);
        beforeTipTotal += theBill[person].items[i].item[1];
      };
      console.log(theBill[person].name + " had " + theBill[person].items.length + " items.");
      console.log(theBill[person].name + "'s total before tax and tip is " + round(beforeTipTotal));
      personTotal = beforeTipTotal + (beforeTipTotal * tipRate);
      personTotal = personTotal + (beforeTipTotal * taxRate);
      console.log(theBill[person].name + "'s bill is " + round(personTotal));
      theTotal += personTotal;
    };
    console.log("The total bill is $" + round(theTotal) );
  };

})()