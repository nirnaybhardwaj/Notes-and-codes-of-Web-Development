//OBJECTS - It is a collection of data in key value pair 

let obj = {} // declaration of object
obj = {
    Name: 'Nirnay',
    Age: 22, 
    Gender: 'Male'
}
console.log(obj)

let car = {
    model:'BMW',
    color: 'Black',
    topspeed: '300 KM/hr',
    price: '24000000 Rs'
}
console.log(car)



let captionAmerica = {
    name : 'Steve Rogers',
    age : 102,
    friends : ['Bucky', 'banner', 'Thor', 'Tony'],
    address : {
        country : 'USA',
        state : 'New York',
        city : {
            cityName : 'Manhatton',
            pincode : 12735637
        }
    },

    isAvenger : true

}
console.log(captionAmerica)



// Accessing properties of an object


// dot notation (.)

let ageOfCaption = captionAmerica.age
console.log(ageOfCaption) // 102

let friendsOfCaption = captionAmerica.friends
console.log(friendsOfCaption)


// access the array index

let friendsOfCaptionn = captionAmerica.friends[2]
console.log(friendsOfCaptionn)


// object in object access

let cityname = captionAmerica.address.city.cityName
console.log(cityname)


//change the value 

captionAmerica.isAvenger= false
console.log(captionAmerica)


// add the key and value

captionAmerica.movies = ['first avenger', 'civil war', 'endgame']
console.log(captionAmerica)


// delete the key of ana object

delete captionAmerica.age
console.log(captionAmerica)