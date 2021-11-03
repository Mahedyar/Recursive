const tavan = (num , power) => {

    if (typeof num !== "number" || typeof power !== "number"){
        return "both inputs should be numbers"
    }
    if (power === 0){
        return 1
    }
    if (power === 1 ){
        return num
    }

    return  num * tavan( num , power-1)
}
