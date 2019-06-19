

class Author {
    constructor(id, name, username, email, address, phone, company) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.phone = phone;
        this.street = address.street;
        this.city = address.city;
        this.zipCode = address.zipcode;
        this.company = company.name;
        this.slogan = company.catchPhrase;

    }
}


export { Author }

