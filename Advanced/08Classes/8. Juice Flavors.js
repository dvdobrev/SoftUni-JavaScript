function juice (arr){
    let juicesAmount = new Map ();
    let juicesBottles = new Map ();
   
    for (let index = 0; index < arr.length; index++) {
        let [juiceName, amount] = arr[index].split(' => ');
        amount = Number(amount);

        if (!juicesAmount.has(juiceName)) {
            juicesAmount.set(juiceName, 0);
        }

        let totalAmount = juicesAmount.get(juiceName) + amount;

        if (totalAmount >= 1000) {
            if (!juicesBottles.has(juiceName)) {
                juicesBottles.set(juiceName, 0);
            }

            let newBottles = Math.trunc(totalAmount / 1000);
            let totalBottles = juicesBottles.get(juiceName) + newBottles;
            juicesBottles.set(juiceName, totalBottles);
        }
        

        juicesAmount.set(juiceName, totalAmount % 1000);
    }

    for (const [key, val] of juicesBottles.entries()) {
        console.log(`${key} => ${val}`);
    }
}

juice(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789'])