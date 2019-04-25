/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global/Window object- used outside of any function
* 2. Implicit- using dot notation-object mentioned before the dot. Create object & refer to contents with "this"
* 3. New- creates a 'template' object using "this" for each item. Use .new to create a variable that uses these items. 
* 4. Explicit- using apply/call/bind. Assign an object to "this" function.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

function globalforest (tree) {
    console.log(this);
    return `I am made of ${tree}`;
}

// Principle 2
// code example for Implicit Binding

const tree= {
    leaf color= 'green';
    height: 20;
    grow: function(rate) {
        return 'I grow ${rate} per year.';
    }

    console.log(tree.grow('1ft'));
}

// Principle 3
// code example for New Binding

function Greeter(person) {
    this.greeting= 'Hello!'
    this.person= person;
    this.speak= function() {
        console.log(this.greeting + this.person + '!');
    }
}

// Principle 4
// code example for Explicit Binding

const skills = [cook, sleep, adventure];
function intro(skill1, skill2, skill3){
    return `Hi, I'm Kelsy and I like to ${skill1}, ${skill2}, and ${skill3}.`;
}
console.log(intro.apply(skills));