# Binary-Search
its all about binary equation in Math. Basically we use a Math concept in it.

# Linear-Search
in this I used concept to find a number from list in but basically we will get index of that number which we are finding. 

# Concept of this code.

Binary Search : In computer science, a binary search or half-interval search algorithm finds the position of a target value within a sorted array. The binary search algorithm can be classified as a dichotomies divide-and-conquer search algorithm and executes in logarithmic time

We basically ignore half of the elements just after one comparison.

    Compare x with the middle element.
    If x matches with middle element, we return the mid index.
    Else If x is greater than the mid element, then x can only lie in right half subarray after the mid element. So we recur for right half.
    Else (x is smaller) recur for the left half.

Linear-Search: In computer science, a linear search or sequential search is a method for finding an element within a list. It sequentially checks each element of the list until a match is found or the whole list has been searched.
