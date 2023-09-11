export const makeCountry = (
	image,
	name,
	independenceDay,
	latitude,
	longitude,
	population,
	food,
	...languages
) => {
	let country = {
		celebrities: [],
		landmarks: [],
		cities: [],
		leader,
		image: image,
		name: name,
		leader: leader,
		independenceDay: independenceDay,
		latitude: latitude,
		longitude: longitude,
		population: population,
		food: food,
		languages: languages,
	};
	database.countries.push(country);
};

export const makeCity = (
	country,
	image,
	name,
	population,
	latitude,
	longitude,
	...knownFor
) => {
	let city = {
		country: country,
		image: image,
		name: name,
		population: population,
		latitude: latitude,
		longitude: longitude,
		/*
	mayor: {
		image: ,
		name: ,
		party: ,
        */
		knownFor: knownFor,
	};

	database.cities.push(city);
};

export const makeCelebrity = (
	country,
	image,
	name,
	type,
	birthday,
	death,
	...knownFor
) => {
	let celebrity = {
		country: country,
		image: image,
		name: name,
		type: type,
		birthday: birthday,
		death: death, //(can be “date” or “”)
		knownFor: knownFor,
	};
	/*
const findAge = (birthday, death) =>{
	let today = new Date();
	let age;
	If (death !== "") {
	age = death - birthday;
} else {
    age = today - birthday
}
celebrity.age = whateverFunctionWeNeedToGetToDisplayInYears(age)
}
findAge()
*/
	database.celebrites.push(celebrity);
};
export const makeLeader = (
	place,
	image,
	name,
	type,
	birthday,
	death,
	party,
	...knownFor
) => {
	let leader = {
		place: place,
		image: image,
		name: name,
		type: type,
		birthday: birthday,
		death: death, //(can be “date” or “”)
		party: party,
		knownFor: knownFor,
	};
	/*
const findAge = (birthday, death) =>{
	let today = new Date();
	let age;
	If (death !== "") {
	age = death - birthday;
} else {
    age = today - birthday
}
celebrity.age = whateverFunctionWeNeedToGetToDisplayInYears(age)
}
findAge()
*/
	database.leaders.push(leader);
};
export const makeLandmark = (
	country,
	image,
	name,
	type,
	latitude,
	longitude,
	...knownFor
) => {
	let landmark = {
		country: country,
		image: image,
		name: name,
		type: type,
		latitude: latitude,
		longitude: longitude,
		knownFor: knownFor,
	};
	database.landmarks.push(landmark);
};
