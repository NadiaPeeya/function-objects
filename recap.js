// variable
var favouriteBook = 'hentai';

// array
var bookList = ['naruto', 'your name', 'deathnote', 'weathering with you']
var weathingWithYou = bookList.indexOf('your name');
console.log(weathingWithYou)
bookList[2] = 'bunny girl senpai';
console.log(bookList);
bookList.push('small giants');
console.log(bookList);
bookList.pop();
console.log(bookList);

// conditionals
if (bookList[1] == 'your name') {
    console.log('kushina uzumaki');
}
else {
    console.log('ghorar dim');
}

// while loop 
var i = 0; //loop variable
while (i < 15) {
    console.log(i);
    console.log('looping looping looping');
    i++;
}

// for loop 
for (var i = 0; i < 15; i++) {
    console.log(i);
}