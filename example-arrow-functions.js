var names = ['Andrew', 'Julie', 'Jen'];

/*names.forEach(function(name){
    console.log('forEach', name);
});

names.forEach((name) => {
    console.log('arrowFunc', name);
});

var returnMe = (name) => name + '!';

console.log(returnMe('Tony'));*/

/*var person = {
    name: 'Tony',
    greet: function(){
        names.forEach((name) => {
            console.log(this.name + ' says hi to ' + name);
        });
    }
}

person.greet();*/

var add = (a,b) => a + b;

console.log(add(1,3));
console.log(add(9,0));