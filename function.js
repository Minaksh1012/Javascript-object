var a={
    Name:"Minakshi",
    lname:"Dhangare",
    age:23,
    email:"minakshi@gmail.com",
    living:{
        city:'Pune',
        country:"India"
    },
    salary:function(){
        return 30000
    },
    fulname:function(){
        return this.Name+" "+this.lname
    }
}
console.log(a.fulname())
console.log(a.living.country)