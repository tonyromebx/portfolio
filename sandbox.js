export default class User {
	construstor(name, age){
		this.name = name
		this.age = age
	}
}

export function printName(user) {
	console.log(`User's name is ${user.name}`)
}
 export function printAge(user) {
 	console.log(`User is ${user.age} years old`)
 }

