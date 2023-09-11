const database = {
	countries: [],
	cities: [],
	celebrities: [],
	landmarks: [],
	leaders: [],
};

const modifyCountries = () => {
	for (let i = 0; i < database.countries.length; i++) {
		for (let j = 0; j < database.cities.length; j++) {
			if (database.countries[i].name === database.cities[j].country) {
				database.countries[i].cities.push(database.cities[j]);
			}
		}
		for (let k = 0; k < database.landmarks.length; k++) {
			if (database.countries[i].name === database.landmarks[k].country) {
				database.countries[i].landmarks.push(database.landmarks[k]);
			}
		}
		for (let h = 0; h < database.celebrities.length; h++) {
			if (database.countries[i].name === database.celebrities[h].country) {
				database.countries[i].celebrities.push(database.celebrities[h]);
			}
		}
	}
	for (let g = 0; g < database.leaders.length; g++) {
		for (let f = 0; f < database.countries.length; f++) {
			if (database.leaders[g].place === database.countries[f].name) {
				database.countries[f].leader = database.leaders[g];
			}
			for (let t = 0; t < database.cities.length; t++) {
				if (database.leaders[g].place === database.cities[t].name) {
					database.cities[t].leader = database.leaders[g];
				}
			}
		}
	}
};
