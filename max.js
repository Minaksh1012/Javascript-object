// Write a programme to find the 3 maximum values of an object and print them.
// Input :-

var my_dict = {
'a':50,
'b':58,
'c':56,
'd':40,
'e':100,
'f':20
}

// a=[]
// for i in my_dict.values():
//     a.append(i)
// p=sorted(a)
// u=[]
// y=1
// while y<=3:
//     u.append(p[-y])
//     y+=1
// print(u)

a=[]
for (i in my_dict){
    a.push(my_dict[i])
}
// console.log(a)
// a.sort()

console.log(a.sort())
