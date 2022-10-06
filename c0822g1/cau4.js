class Staff {
    constructor(fullName, email) {
        this.fullName = fullName;
        this.email = email
    }
    setfullName(fullName) {
        this.fullName = fullName;
    }
    getfullName() {
        return this.fullName;
    }
    setEmail(email) {
        this.email = email;
    }
    getEmail() {
        return this.email;
    }
    toString() {
        return `Tôi Tên là: ${this.fullName}, và email của tôi là: ${this.email} <br>`;
    }
}
//2.Tạo đối tuownhj và gọi
let david = new Staff("David", "david@gmail.com");
console.log(david.toString());
david.setfullName("David Do");
david.setEmail("david.do@gmail.com");
console.log(david.toString());

let Staffs = [
    david,
    new Staff("vany", "vany@gmail.com"),
    new Staff("trany", "trany@gmail.com")

];

for (let i = 0; i < Staffs.length; i++) {
    document.write(`${Staffs[i].toString()} <br>`);
}
