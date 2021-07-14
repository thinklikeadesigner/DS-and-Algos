# DS-and-Algos

Hello, this is my personal repo where I'm posting data structures, algorithms, and notes related to data structures or algorithms. I also have practice problems from various coding sites on here, as well as some various implementations that I've come up on across the world wide web. Feel free to explorer and mark issues where you see them.


## repo structure

I really don't have a way to organize content yet, since this is a personal wiki. Though, I'm trying to link relevant sections to eachother. There are leetcode/hackerrank solutions on here but I don't have the problem statements. Although, I plan on adding those later so you can do the problems yourselves.

## more resources
I will also post a link to the post i used to help convert the java implementation to the javascript implementation at the top of each file, as well as other articles I find useful

## Easter Egg
To visualize trees or graphs, I've included a pretty neat package called treeify. It will create a tree in the console so you have a visual representation of what you created. Very useful to see if your data structure is correct and for solving coding challenges

``` javascript
const treeify = require('treeify');
```

and then in your code specify what tree you want to visualize

``` javascript
console.log(treeify.asTree(<your tree name here>, true))
```


## a word on tests
I have tests for some of the coding challenges. You'll find all of them in the folder marked **tests**.
First install the relevant packages
``` bash
npm i
```
To run the tests just type jest in the console, it will run all the tests by default
``` bash
jest
```
My favorite is to have all the tests run on file save, you can do this with the following command
``` bash
jest --watch --collect-coverage  
```

## one more thing, i'm lazy so i don't like using console.log
at the top of each javascript file, i have a custom function that allows me to use print instead of console.log
feel free to use it, or just use console.log

``` javascript
function print(x) {
    console.log(x);
}

```
