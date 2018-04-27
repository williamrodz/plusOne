const monthDisplay = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
					  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

class Connection {
	constructor(name, from, age, nationalities, languages, hobbies, professionalInterests, description) {
		this.name = name
		this.from = from
		this.age = age
		this.hobbies = hobbies
		this.nationalities = nationalities
		this.languages = languages
		this.professionalInterests = professionalInterests
		this.description = description
	}

	getName() {
		return this.name
	}

	getFrom() {
		return this.from
	}

	getHobbies() {
		return this.hobbies
	}

	getNationalities() {
		return this.nationalities
	}

	getLanguages() {
		return this.languages
	}

	getProfessionalInterests() {
		return this.professionalInterests
	}

	getDescription() {
		return this.description
	}
}


class Event {
	constructor(name, date, location, description, categories) {
		this.name = name
		this.location = location
		this.description = description
		this.categories = categories

		this.day = date.getDate()
		this.month = monthDisplay[date.getMonth()]
		this.year = date.getFullYear()// TODO: look into if this is necessary
	}

	getName() {
		return this.name
	}

	getLocation() {
		return this.location
	}

	getDescription() {
		return this.description
	}

	getCategories() {
		return this.categories
	}

	getDay() {
		return this.day
	}

	getMonth() {
		return this.month
	}

	getYear() {
		return this.year
	}
}

class Message {
	constructor(from, content) {
		this.from = from
		this.content = content
	}

	getFrom() {
		return this.from
	}

	getContent() {
		return this.content
	}
}



