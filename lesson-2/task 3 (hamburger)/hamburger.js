

class Hamburger {
    constructor() { 
        this.burgerSize = [];
        this.burgerType = [];
        this.totalPrice = 0;
        this.totalCalories = 0;
    };

    fetchburgerType() {
        this.burgerSize = [
            {size: 'small', price: 50,  calories: 20},
            {size: 'large', price: 100, calories: 40},
        ];

        this.burgerType = [
            {type: 'cheese', price: 10, calories: 20},
            {type: 'salad', price: 20, calories: 5}, 
            {type: 'potato', price: 15, calories: 10},
            {type: 'spices', price: 15, calories: 0},
            {type: 'mayonnaise', price: 20, calories: 5},
        ]
     };


     // Добавить добавку 
    addTopping(topping) {
        let totalPriceTopping = 0;
        let totalCaloriesTopping = 0;
        topping.forEach(top => {
            this.burgerType.forEach(elem =>{
                if (top == elem.type){
                    totalPriceTopping += elem.price;
                    totalCaloriesTopping += elem.calories;
                };
            });
        });
        this.calculatePrice(totalPriceTopping);
        this.calculateCalories(totalCaloriesTopping);
        console.log(totalPriceTopping, totalCaloriesTopping);
    };

    // Получить список добавок 
    getToppings() {
        const toppings = document.querySelectorAll(".checkbox-variant");
         const checkTopping = [];
        toppings.forEach(elem => {
            if (elem.firstElementChild.checked) {
                checkTopping.push(elem.firstElementChild.id);
            }  
            
            });
        console.log(checkTopping);
        this.addTopping(checkTopping);
    };
    // Узнать размер гамбургера 
    getSize() {
        const size = document.querySelectorAll(".radio-variant");
        let checkSize;
        size.forEach(elem => {

        if (elem.firstElementChild.checked) {
            checkSize = elem.firstElementChild.id;
            console.log(checkSize);
        }  
        });
        this.addSizeBurger(checkSize);
    };        
    
    addSizeBurger(sizeBurger) {
        let priceBurger = 0;
        let caloriesBurger = 0;
        this.burgerSize.forEach(elem =>{
                if (sizeBurger == elem.size){
                    priceBurger += elem.price;
                    caloriesBurger += elem.calories;
                };
        });
        console.log(priceBurger, caloriesBurger);
        this.calculatePrice(priceBurger);
        this.calculateCalories(caloriesBurger);
    };

    // Узнать цену 
    calculatePrice(price) {
        this.totalPrice += price;
     

    };    

    // Узнать калорийность
    calculateCalories(calories) {
        this.totalCalories += calories;
    };  
    
    render(){
        const caloriesInfo = document.querySelector(".calories-info");
        caloriesInfo.innerHTML = `Calories: ${this.totalCalories}`;

        const priceInfo = document.querySelector(".price-info");
        priceInfo.innerHTML = `Price of burger: ${this.totalPrice} rub`;
    };
    
  }



    const makeOrder = function(event) {
    event.preventDefault();
     const burger = new Hamburger();
     burger.fetchburgerType();
      burger.getSize();   
      burger.getToppings();
      burger.render()
};

  const init = () => {
    // Создаем объект list класса GoodsList
    const button = document.querySelector(".button");
    button.addEventListener("click", makeOrder);
  };
  
  window.onload = init;
  