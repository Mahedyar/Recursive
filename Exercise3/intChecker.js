let intCounter = 0

const intChecker =(array) => {

    if (array.toString().substring(1,array.toString().length).length === 5){
        return 2
    }

    console.log(array.toString().substring(1,array.toString().length))


    if(Number.isInteger(parseInt(array.toString()[0]))) {
        intCounter++
    }

    intChecker(array.toString().substring(1,array.toString().length))

    // return array.toString().substring(1,array.toString().length)
    // return array.toString()

}

console.log(intChecker([[[5], 3], 0, 2, ['foo'], [], [4, [5.1, 6]]]))