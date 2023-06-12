/*

OOP Principles: Inheritance

Inheritance is one of the foundations of object-oriented programming.

In essence, it's a very simple concept. It works like this: 

There is a base class of a "thing".
There is one or more sub-classes of "things" that inherit the properties of the base class 
(sometimes also referred to as the "super-class")
There might be some other sub-sub-classes of "things" that inherit from those classes in point 2.
Note that each sub-class inherits from its super-class. In turn, a sub-class might also be a super-class, 
if there are classes inheriting from that sub-class.

All of this might sound a bit "computer-sciency", so here's a more practical example:

There is a base class of "Animal".
There is another class, a sub-class inheriting from "Animal", and the name of this class is "Bird".
Next, there is another class, inheriting from "Bird", and this class is "Eagle".
Thus, in the above example, I'm modelling objects from the real world by constructing relationships between 
Animal, Bird, and Eagle. Each of them are separate classes, meaning, each of them are separate blueprints for 
specific object instances that can be constructed as needed.

*/

/*

OOP Principles: Encapsulation

In the simplest terms, encapsulation has to do with making a code implementation "hidden" from other users, 
in the sense that they don't have to know how my code works in order to "consume" the code.

I don't really need to worry or even waste time thinking about how the toUpperCase() method works. 
All I want is to use it, since I know it's available to me. Even if the underlying syntax - that is, the implementation 
of the toUpperCase() method changes - as long as it doesn't break my code, I don't have to worry about what it does 
in the background, or even how it does it.

*/


/*

OOP Principles: Abstraction

Abstraction is all about writing code in a way that will make it more generalized.

The concepts of encapsulation and abstraction are often misunderstood because their differences can feel blurry.

It helps to think of it in the following terms: 

An abstraction is about extracting the concept of what you're trying to do, rather than dealing with a 
specific manifestation of that concept. 
Encapsulation is about you not having access to, or not being concerned with, how some implementation works internally.
While both the encapsulation and abstraction are important concepts in OOP, it requires more experience 
with programming in general to really delve into this topic.

For now, it's enough to be aware of their existence in OOP.

*/

/*
OOP Principles: Polymorphism

Polymorphism is a word derived from the Greek language meaning "multiple forms". An alternative translation might be: "something that can take on many shapes".

So, to understand what polymorphism is about, let's consider some real-life objects.

A door has a bell. It could be said that the bell is a property of the door object. This bell can be rung. When would someone ring a bell on the door? Obviously, to get someone to show up at the door.
Now consider a bell on a bicycle. A bicycle has a bell. It could be said that the bell is a property of the bicycle object. This bell could also be rung. However, the reason, the intention, and the result of somebody ringing the bell on a bicycle is not the same as ringing the bell on a door.
The above concepts can be coded in JavaScript as follows:
*/
const bicycle = {
    bell: function() {
        return "Ring, ring! Watch out, please!"
    }
}
const door = {
    bell: function() {
        return "Ring, ring! Come here, please!"
    }
}
bicycle.bell()
door.bell()