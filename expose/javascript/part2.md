1. What will happen at line 12 and why? If the code causes an error, explain why.
- The console terminal shows 3. It is because the variable i was defined in the for condition block using the var keyword. As variables defined by the keyward provide the function scope, throughout the for loop, the variable i reaches 3. Then, the console terminal shows 3 as the program reads the line 12.

2. What will happen at line 13 and why? If the code causes an error, explain why.
- The console terminal shows 150 due to the same reasoning as the answer to the question 1. Because the variable discountedPrice defined by the keyword var provides the function scope, on the last interation of the for loop, discountedPrice = prices[2] * (1 - discount) = 300 * 0.5 = 150. Then, it keeps information even after the for loop is over. Therefore, the console terminal shows 150 as the program reads the line 13.

3. What will happen at line 14 and why? If the code causes an error, explain why
- The console terminal shows 150. After the last interation of the for loop, where the progmram calculates finalPrice = Math.round(discountedPrice * 100) / 100 = ( 150 * 100) / 100 = 150, the program keeps the finalPrice because it was previously defined on line 4 in the function; that is, the variable finalPrice provides block scope. As the program reads line 14, the console terminal shows 150.

4. What will this function return? Give a brief explanation why. If the code causes an error, explain why.
- The function returns [50, 100, 150] based on the input from the line 19. Because the variable discounted is defined on the line 3 in the function, the program keeps the stored information on the variable discounted during the interations of the for loop. Throughout the operations in the for loop, the program pushes 50, 100, 150 into discounted. Also, the variable discounted provides the block scope. Therefore, the function returns [ 50, 100, 150 ] as it finishes its operaiton. 

5. What will happen at line 12 and why?  If the code causes an error, explain why.
- The code returns an error because the variable i was defined in the for condition block using let keyword. The program treats the variable i as if it were defined in the for block, which means that the variable i will not be defined once the program goes out of the block boundary; in other words, the variable i provides the block scope.

6. What will happen at line 13 and why? If the code causes an error, explain why.
- The code returns an error because the variable discountedPrice is defined in the for block using let keyword. As the reasoning for the question 5 describes, the program will consider discountedPrice as undefined once it goes out of the block boundary; that is, the variable discountedPrice provides the bloock scope.

7. What will happen at line 14 and why? If the code causes an error, explain why.
- The console terminal shows 150. Because the variable finalPrice is defined on the line 4 in the function, the block scope of the finalPrice is vaild. Therefore, the program keeps the information from the for loop and shows the stored value of finalPrice on the console terminal as it reads the line 14.

8. What will this function return? Give a brief explanation. If the code causes an error, explain why.
- The function returns [50, 100, 150] due to the similar reasong for the question 4. Because the variable discounted is defined on the line 3 in the function, it provides the block scope. Therefore, the program stores the information on discouted during the for loop and returns the stored information in discounted as the program finishes the operation for the function discountedPrices.

9. What will happen at line 11 and why? If the code causes an error, explain why.
- The code returns an error because of the same reason for the question 5. Once the program goes out of the for condition block boundary, it will consider i as undefined; that is, the variable i provides the block scope.

10. What will happen at line 12 and why? If the code causes an error, explain why.
- The console terminal shows 3 because the variable length is defined on the line 4 in the function. On the line 4, the program performs an assignment const length = 3. Since the variable provides the block scope, the program shows 3 on the console terminal as it reads the line 12.

11. What will this function return? Give a brief explanation. If the code causes an error, explain why.
- The function returns [50, 100, 150] based on the input of the line 14. The variable discounted is declared on the line 3 in the function using the const keyword, which means that the variable provides the block scope. Also, the variable is not defined with the value so it can still be assigned values. Because program keeps the information on the discouted during the interation of the for loop, it returns discounted that stores the values previously pushed into discounted during the for loop interation.

12. Given the above Object, write the notation for: <br>
    
a. Accessing the value of the name property in the student objec 
- student.name;
  
b. Accessing the value of the Grad Year property in the student object
- student["Grad Year"];
  
c. Calling the function for the greeting property in the student object
- student.greeting();

d. Accessing the name property of the object in the Favorite Teacher property in student
- student["Favorite Teacher"].name;

e. Access index zero in the array of the courseLoad property of the student object
- student.courseLoad[0];

13. arithmetic <br>
   
a. ‘3’ + 2 is '32'
- the integer 2 is converted into the string form '2' and concatenated to '3', and thus it shows '32'.

b. ‘3’ - 2 is 1
- the string '3' is converted into the integer form 3 and used to perform integer operation 3 - 2, and thus it shows 1.
  
c. 3 + null is 3
- null maps to the integer form 0 and used to perform integer operation 3 + 0, and thus it shows 3.

d. '3' + null is '3null'
- null maps to the string null and is concatenated to '3', and thus it shows '3null'.

e. true + 3 is 4
- true maps to the integer 1 and is used to performed integer operation 1 + 3, and thus it shows 4.

f. false + null is 0
- Because false maps to the integer 0 and null maps to the integer 0, they are used to perform integer operation 0 + 0, and thus it shows 0.

g. '3' + undefined is '3undefined'
- undefined is converted into the string form 'undefined' and concantenated to '3', and thus it shows '3undefined'.

h. '3' - undefined is NaN
- Because '3' maps to the integer 3 and undefined maps to NaN, the numerical operation shows NaN.

14.  Comparison <br>
    
a. '2' > 1 is true
- the 'string' is converted into the integer form 2 and compared to 1, and thus 2 > 1 = true.

b. '2' < '12' is false
- the strings are compared character by character from the leftmost side. Because '2' is greater than '1' in unicode-wise way, '2' > '1' and it can be expanded to '2' > '12'. Therefore, '2' < '12' is false.

c. 2 == '2' is true
- Because equality check == makes '2' become the integer 2, 2 == 2 is true.

d. 2 === ‘2’ is false
- Because strict equality check === is operated without type conversion and the strict equality check immediately returns false if the types of the both sides are different, as we can see the integer 2 and the string '2' are different types, 2 === '2' is false.
  
e. true == 2 is false
- Because true maps to 1 as == type-converts true value into numeric value, it shows that 1 == 2 is false.

f. true === Boolean(2) is true
- On the right side, Boolean(2) essentially means true. Therefore, the operation shows that true === true is true.

15. Explain the difference between the == and === operators.
- Non-strict check == usually converts the values types on both sides of the equality into numeric values and performs the equality check (exceptions would be like null; for example null equals to null or undefined only) However, strict equality check === performs the equality check without any type conversion on the values of its both sides and also it immediately returns false if the two types on its both sides are different.

16.  Given the above Object, write a for...in loop that will iterate through it and print out the value of the property if the property starts with the letter r, or if the value of that property is an odd number.
- it is in `part2-question16.js`

17. If the function above is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result? Briefly walk through how you arrived at that result.
- The result will be [2, 4, 6]; the elements in [1, 2, 3] are doubled. 
- As the program calls the function `modifyArray` with input [1, 2, 3] and another function `doSomething`, it goes into the function `modifyArray` with the inputs. In the for loop, the program calls the function `doSomething` corresponding to the input position for `callback`. In the function `doSomething`, it will double the input `num` and return the doubled input. Therefore, for example, on the first iteration of the for loop, the line 4 shows that the program will input 1 into callback function `doSomething` and get 2 as a return value, and then it push the 2 into `newArr` as an element. Then, after the for loop iteration is over, the program will have [2,4,6] in `newArr` and returns the `newArr`. 
    
18. The above program only prints out the time once when executed. Modify this code such that the program prints out the time every second. 
- it is in `part2-question18.js`

19. What is the output of the above code?
- 1 4 3 2