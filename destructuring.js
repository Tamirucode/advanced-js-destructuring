/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [18, 37, 47]

//let nesi =ages[0]
//let degu =ages[1]
//let tam=ages[2]
//console.log(nesi, degu, tam)

let [nesi, degu, tam]=ages
console.log(nesi, degu, tam)


// Destructuring objects

Jobs = {
    amaleda: 'student',
    helen: 'teacher', 
    tamu: 'developer' ,
};

let{amaleda, helen, tamu}=Jobs
console.log(amaleda, helen, tamu)

// Destructuring subsets, using comma for jumping b/n arry
languages = ['english', 'spanish', 'amharic', 'oromo']
 let[hymanotenative, hymanotesecondery]=languages

 console.log(hymanotenative, hymanotesecondery)

 let[,,almenative, almesecondery] = languages

 console.log(almenative, almesecondery)

 languages2= {

    firstlanguage: 'amhric',
    secondlanguage:'english',
    thirdlanguage:'swedish',
 }
 let{firstlanguage,secondlanguage}=languages2
 console.log(firstlanguage,secondlanguage )
// Using rest parameter syntax

let fruits= ['apple', 'orange', 'banana','grape', 'lemon']

let[favourite, secondfavourite, ...others]=fruits

console.log(favourite, secondfavourite)
console.log(others)

let favouriteFood={

    hilena:'injera',
    tamru:'spagetti',
    atnafe:'stek',
    wendemenehi:'pizza'
}

let{hilena, tamru, ...rest}=favouriteFood

console.log(hilena)
console.log(tamru)
console.log(rest)