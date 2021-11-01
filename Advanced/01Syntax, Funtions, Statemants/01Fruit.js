function fruit(fruit, grams, pricePerKg) {
    let gramsInKg = grams / 1000
    let money = pricePerKg * gramsInKg
 
    console.log(`I need $${money.toFixed(2)} to buy ${gramsInKg.toFixed(2)} kilograms ${fruit}.`)
}

fruit('orange', 2500, 1.80)