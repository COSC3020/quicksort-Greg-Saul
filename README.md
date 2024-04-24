[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/ZLHpg3lN)
# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make quicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

During the worst case in quicksort, the complexity would be $\theta(n^2)$ this happens because only one element gets sorted at a time and has to compare to every other element. This results in n iterations and n compares that multiply to be $n^2$. This bad case happens when the largest or smallest number is selected to be the pivot every time and makes it essentially have the efficiency of insertion sort.



### References used
https://www.geeksforgeeks.org/iterative-quick-sort/

Class slides pg. 27
