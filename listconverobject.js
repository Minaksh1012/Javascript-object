// Take two lists and make an object, 1st list elements be as keys, and 2nd lists elements as values.
// Example :-
// Input :-

var list1=['one','two','three','four','five']
var list2=[1,2,3,4,5,]
// Output :-
// {“one”:1,”two”:2,”three”:3,”four”:4,”five”:5}

dic={}
for (i in list2){
    dic[list1[i]]=list2[i]
}
console.log(dic)