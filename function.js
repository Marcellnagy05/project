function getFirstElement (arr){
    //ide írd kódod
    if (arr.length != 0) {
        return arr[0];
    }else{
        return "Error, no element found!"
    }
    }
    const numbers = [1, 2, 3];
    const words = ["apple", "banana", "cherry"];
    console.log(`First number: ${getFirstElement(numbers)}`);
    console.log(`First word: ${getFirstElement(words)}`);

