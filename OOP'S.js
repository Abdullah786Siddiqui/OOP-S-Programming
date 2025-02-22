
  
  
  class Person {
    constructor(name,age){
        this.name = name
        this.age = age

    }

    getdetail(){
        return `My Name is ${this.name} and My Age is ${this.age}`
    }
  }
  let Person1 = new Person ("Abdullah",21)
  let Person2= new Person ("Mohsin",20)
  let Person3 = new Person ("Fabiha",18)


  let outputVal = document.querySelector(".Output").innerHTML =`
  ${Person1.getdetail()}<br>
  ${Person2.getdetail()}<br>
  ${Person3.getdetail()}

  `