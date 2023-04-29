// 1. FILTER METHOD:
// Filtering arrays
// To find the scripts in the data set that are still in use, the following function
// might be helpful. It filters out the elements in an array that don’t pass a test.

// 2. MAP METHOD:
// Transforming with map
// The map method transforms an array by applying a function to all of its
// elements and building a new array from the returned values. The new array
// will have the same length as the input array, but its content will have been
// mapped to a new form by the function.

3. REDUCE METHOD:
Summarizing with reduce
Another common thing to do with arrays is to compute a single value from
them. Our recurring example, summing a collection of numbers, is an instance
of this. Another example is finding the script with the most characters.
The higher-order operation that represents this pattern is called reduce (sometimes also called fold). It builds a value by repeatedly taking a single element
from the array and combining it with the current value. When summing numbers, you’d start with the number zero and, for each element, add that to the
sum.
The parameters to reduce are, apart from the array, a combining function
and a start value. This function is a little less straightforward than filter and
map, so take a close look at it: