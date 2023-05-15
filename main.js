// calc function
const calcFun = (num1,num2, ...args) =>{
    const sum = num1 + num2
    let restmult = 1;
    for(const i of args){
        restmult *= i
    }
    const result = [sum,restmult]

    return result
}

console.log(calcFun(5,3,3,2,4,5))


// findcity function
const user = {
    bank: {
        address:{
            city: 'tbilisi'
        }
    }
}

const findCity = ({bank:{address:{city}= {} }}) => `the city is: ${city}`

console.log(findCity(user))
