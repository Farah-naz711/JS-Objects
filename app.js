// Chapter One
// Question1

// alert("Hello World")

// Question2

// alert("Error! Enter a valid password")

// Question3

// alert("Welocome to JS land...\nHappy Coding!");

// Question4

// alert("Welocome to JS land...");
// alert("Happy Coding!\nPrevent this page from creating additional dialogs");
// Question5

// alert("Hello.... I can run JS through web browser's console")
// Question 6 
//done in index.html
//Question 7
//done in index.html

                    // Chapter two
// Q1. Declare a variable called username
// var username;

// Q2. Declare a variable called myName & assign to it a string
// that represents your Full Name.

// var myName;
// myName="Farah Naz"

// Q3. Write script to

// a) Declare a JS variable, titled message.

// var message;

// b) Assign “Hello World” to variable message

// message="Hello World";

// c) Display the message in alert box.

// alert(message)


// Q4. Write a script to save student’s bio data in JS variables and
// show the data in alert boxes.

// var name="Johne Doe"
// alert(name)
// var age="15 years old"
// alert(age)
// var skill="Certified Mobile Application Development"
// alert(skill)

// Q5. Write a script to display the following alert using one JS
// variable:

// var message2="PIZZA\nPIZZ\nPIZ\nPI\nP"
// alert(message2)

// Q6. Declare a variable called email and assign to it a string that
// represents your Email Address(e.g. example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use
// string concatenation)


// var email;
// email="aahmadkhan156@gmail.com"
// alert("My email address is "+email)

// Q7. Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following
// message in an alert box:

// var book;
// book="A smarter way to learn JavaScript";
// alert("I am trying to learn from the book"+" "+book);

// Q8. Write a script to display this in browser through JS
// document.write("Yah! I can write HTML content through JavaScript")

// Q9. Store following string in a variable and show in alert and
// browser through JS
// “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”

// var str="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(str);



      // -------------Chapter 03-----------------


// Q1. Declare a variable called age & assign to it your age. Show
//  your age in an alert box

// var age ="15";
// alert("I am " +age+ " yeard old");

// Q2. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.


// Answer

// var n=1;

// alert("you have visited "+ n + " times");
// n=n+1;

// Q3. Declare a variable called birthYear & assign to it your birth year.
// Answer

// var birthYear=200;

// document.write("My birth year is  "+birthYear );
// document.write(" Data type of my declared variable is number");


// Q4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

// Answer


// var visitor_name="John Doe";
// var product="t-shirt";
// var Quantity=5;
// document.write(visitor_name +" Ordered "+Quantity+ " "+product +" on  XYZ Clothing store" );

            // ------------Chapter 4------------------


// Q1. Declare 3 variables in one statement.

// var var1 , var2, var3;

// Q2. Declare 5 legal & 5 illegal variable names.
// Answer

//********Legal*******                //*******Illegal**********
// var myName;                           // var 3name;
// var $name;                           // var my name;
// var full_name;                        // var my-name;
// var nam3;                             // var class;              
// var _name;


// Q3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________

// Answer

// document.write("<h1>Rules for naming JS variables</h1>");
// document.write("<br> Variable names can only contain $, _, number and character For example  $my_1stVariable<br>");
// document.write(" Variables must begin with a character, _ or $");
// document.write("<br>Variables Name are Case Sensetive");
// document.write("<br> Variable name should not be JS keywords")
                


     //----------- Chapter 5 MATH EXPRESSIONS-----------


// Q 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser

// Answer
// var num1=+prompt("Enter 1st Number");
// var num2=+prompt("Enter 2nd Number");
// var result = num1+num2;
// document.write("<br>Sum of "+ num1 +" and " + num2 +" is "+ result);

// Q2. Repeat task1 for subtraction, multiplication, division &
// modulus.

// Answer
// var num1=+prompt("Enter first number");
// var num2=+prompt("Enter second number");
// var multiplication=num1*num2;
// var division=num1/num2;
// var mod=num1%num2;

// document.write("<br>Multipication of "+num1+" and "+num2+" is "+ multiplication);
// document.write("<br>Dividision of "+num1+" by "+num2+" is "+division);
// document.write("<br>Remainder is "+mod);



// Q3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.

// Answer

// var n;
// document.write("Value after variable declaration is:");
// n=5;
// document.write("<br>Initial value: "+n);
// n++;
// document.write("<br>Value after increment is:"+n);
// n+=7;
// document.write("<br>Value after addition of 7 is:"+n);
// n--;
// document.write("<br>Value after decrement is:"+n);
// n=n%3;
// document.write("<br>The variable's remainder after dividing by 3 is"+n);

// Q4. Cost of one movie ticket is 600 PKR. Write a script to
// store ticket price in a variable & calculate the cost of buying 5
// ticketsto  a movie.


// Answer

// var cost =600;
// var  ticketsto=5;
// document.write("Total cost to buy 5 tickets to a movie is "+cost*ticketsto+" PKR");

// Q5. Write a script to display multiplication table of any
// number in your browser.

// Answer
// var i=0;
// var num=prompt("Enter number to print a table of that number");
// document.write("Table of "+ num +" is")
// for(i=1; i<=10; i++)
// document.write("<br>"+num+" * "+ i +" = "+num*i);


// Q6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”


// Answer

// var C=prompt("Enter tempreture in Celsius");
// var F=(C*9/5)+32;

// document.write("<br>"+C+"C is"+ F+"F");
// var F=prompt("Enter tempreture in fahrenheit");
// C=(F-32)*5/9;

// document.write("<br>"+F+"F is"+ C+"C");

// Q7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables 
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges

// Answer

// var item1=650;
// var item2=100;
// var quantityOfitem1=3;
// var quantityOfitem2=7;
// var shippingCharges=100;

// document.write("<h1>Shopping Cart</h1><br><br><br>")
// document.write("<br> Price of item 1 is "+ item1);
// document.write("<br> Ordered quantity of item 1 is "+quantityOfitem1);
// document.write("<br> Price of item 2 is "+item2);
// document.write("<br> Ordered quantity of item 2 is "+quantityOfitem2);
// document.write("<br> Shipping charges are  "+shippingCharges);
// var total=(item1*quantityOfitem1)+(item2*quantityOfitem2)+shippingCharges;
// document.write("<br><br><br>Totol cost of your order is "+total);

// Q8. Store total marks & marks obtained by a student in 2
// variables.

// // Answer

// document.write("<h1>Mark Sheet</h1><br><br><br>")
// var icp=+prompt("Enter ICP Marks");
// var maths=+prompt("Enter your Maths Marks");
// var Os=+prompt("Enter Operating System Marks");
// var cg=+prompt("Enter Computer Graphics Marks");

// total=400;
// var obt=icp+maths+Os+cg;
// document.write("Total Marks Are "+total);
// document.write("<br>Obtained Marks are"+obt);
// var per=(obt/total)*100;
// document.write("<br><br>Percentage is "+ per+"%");


// Q9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

 // Answer

// document.write("<h1>Currency in PKR</h1>")

// var totalCurrency=10*104.80+25*28;
// document.write("<br>Total Currency is "+ totalCurrency);

// Q10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

 // Answer

// var num=7;
// document.write("Number is = "+num+"<br> a.Add 5 <br>b. Multiply by 10 <br>c. Divide the result by 2");
// num=((num+5)*10)/2
// document.write("<br><br>Final Result is "+num);


// Q11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.

 // Answer

//  var currentYear=+prompt("Enter Current Year");
//  var birthYear=+prompt("Enter your birth year");
//  var age=currentYear-birthYear;
// document.write("<h1>Age Calculator</h1><br>")
// document.write("You are either "+age+" years old or "+--age+" years old");


// Q12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.b. Calculate the circumference based on the radius, and 
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

// Answer

// document.write("<h1>The Geometrizer</h1>")


// var radius=+prompt("Enter Radius")
// document.write("Radius of a Circle is "+radius);
// var pie=3.142;
// var circumference= 2*pie*radius;
// document.write("<br>The circumference is "+circumference);
// var area=pie*(radius*radius);
// document.write("<br>Area is"+ area);



// Q13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

// Answer

// document.write("<h1>The GeometrizerThe Lifetime Supply Calculator</h1>")

// var favoriteSnack="chips";
// var age="22";
// var maxAge="24"
// var amountPerday=4;
// var total=27;
// document.write("You will need "+(maxAge-age)*amountPerday+" to last you until the ripe old age of "+maxAge);




                // Chapter 6-9

// Q 1. Write a program to take a number in a variable, do the
// required arithmetic to display  in your browser:


// Answer

// var a=+prompt("Enter a number");
// document.write("Result<br>The value of a is "+a);
// document.write("<br>The value of ++a is "+ ++a);

// document.write("<br><br><br>The value of a++ is "+ a++);
// document.write("<br>Now the value of a is "+ a);

// document.write("<br><br><br>The value of --a is "+ --a);
// document.write("<br>Now the value of a is "+ a);

// document.write("<br><br><br>The value of a-- is "+ a--);
// document.write("<br>Now the value of a is "+ a);


// Q2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a; a=1
// --a - --b;  1 - 0
// --a - --b + ++b;   1 - 0 + 1
// --a - --b + ++b + b--;   1 - 0 + 1 
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--; //1 - 0 + 1 + 1
// document.write("a is "+a); //a = 1
// document.write("<br>b is "+b); //b=0
// document.write("<br>result is "+ result); //3


// Q3. Write a program that takes input a name from user &
// greet the user.

// Answer

// var userName=prompt("Enter your Name");
// document.write("Hello "+userName);

// Q5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

// Answer


// var num;
// num=+prompt("Enter a number to print its table");
// if(!num)
// {
//         for(i=1; i<=10; i++ )
//          {
//              document.write("<br>"+5 + " * "+ i +" = "+5*i);
//          }     
// }
// else
// {  for(i=1; i<=10; i++ )
//         {
//        document.write("<br>"+num + " * "+ i +" = "+num*i);
//          }   
// }

// Q6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)


// var sub1=prompt("Enter 1st Subject Name");
// var sub2=prompt("Enter 2nd Subject Name");
// var sub3=prompt("Enter 3rd Subject Name");
// var total=100;
// var ob1=+prompt("Enter 1st Subject's Obtained Marks");
// var ob2=+prompt("Enter 2nd Subject's Obtained Marks");
// var ob3=+prompt("Enter 3rd Subject's Obtained Marks");
// var per1=(ob1/total)*100;
// var per2=(ob2/total)*100;
// var per3=(ob3/total)*100;
// total=total*3;
// var ob=ob1+ob2+ob3;
//  var per=(ob/total)*100;
// document.write(" <table><tr><th>Subject </th><th>Total Marks </th><th>Obtained Marks  </th><th>Percentage </th></tr><tr><td>"+sub1+"</td> <td>"+total+"</td><td>"+ob1+"</td><td>"+per1+"%</td></tr><tr><td>"+sub2+"</td> <td>"+total+"</td><td>"+ob2+"</td><td>"+per2+"%</td></tr><tr><td>"+sub3+"</td> <td>"+total+"</td><td>"+ob3+"</td><td>"+per3+"%</td></tr><tfoot><tr><th></th><th>"+total+"</th><th>"+ob+"</th><th>"+per+"%</th></tr></tfoot></table>");



                // ------------Chapter 9-11--------------------




// Q1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”
// solution
// var cityName=prompt("Enter Your City Name");
// if(cityName=="karachi" || cityName=="KARACHI" || cityName=="Karachi")
// {
//     document.write("Welcome to the city of lights");
// }


// Q2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

// Answer
// var gender =prompt("Enter Your Gender");
// if(gender=="Male" || gender=="male" || gender=="MALE")
//  {
//      document.write("Good Morning Sir.");
//  }
//  else if (gender=="female" || gender=="Female" || gender=="FEMALE")
// {
//     document.write("Good Morning Ma’am.");
// }

// Q3. Write a program to take input color of road traffic signal
// from the user & show the message according to:

// Answer

// var signal=prompt("Input color of road traffic signal");
// if(signal=="Red")
// document.write("<br>Must Stop");
// if(signal=="Yellow")
// document.write("<br>Ready to move");
// if(signal=="Green")
// document.write("<br>Move now");
// else
// document.write("<br>Not Availabe");

// Q4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”

// Answer

// var inp=prompt("Input remaining fuel in car (in litres)");
// if(inp<0.25)
// document.write("Please refill the fuel in your car");


// Q5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.

// a.
//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// OUTPUT: given condition for variable a is true

// b.
//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// Output : Nothing will show in the Output

// c.
//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// Output : condition 2 is true
        // condition 4 is true


// d. 
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// Output : The cost equals

//e.
//  if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// Output : True


// f.
//  if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

// Output: car is smaller than cat
// this is because each character has asci value 'r' has lesser number ASCI value than 't' this is because 'r' comes before 't' that's why car is lesser than cat


// Q6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. 


// var sub1=+prompt("Enter 1st Subject Marks out of 100");
// var sub2=+prompt("Enter 2nd Subject Marks out of 100");
// var sub3=+prompt("Enter 3rd Subject Marks out of 100");
// var total =300;
// var  obt=sub1+sub2+sub3;
// var perc=(obt/total)*100;
// var grade;
// var remarks;
// if (perc>=80)
// {
//          grade="A+";
//          remarks="Excellent";
// }
// else if (perc>=70 && perc<80){
//         grade="A";
//         remarks="Good";
 
// }
// else if (perc>=60 && perc<70)
// {
//     grade="B";
//     remarks="You need to improve";
   
// }
// else 
// {
//     grade ="Fail";
//     remarks="Sorry";
  
// }
// document.write("Total Marks:  "+total);
// document.write("<br>Marks Obtained "+obt);
// document.write("<br>Percentage: "+perc+"%");
// document.write("<br>Grade : "+grade );
// document.write("<br>Remarks: "+remarks);

// Q7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

// var secNumber=7;
// var guess=+prompt("Enter a number (range 1 to 10) to check whether the number is matched or not with secret number " );
// if (guess===secNumber)
// {
//     document.write("Bingo! Correct  answer");


// }
// else if(guess+1===secNumber)
// {
//     document.write("Close enough to the correct answer");
// }
// else {
//     document.write("Not Matched");
// }


// Q8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

// var num=prompt("Enter a number to check whether the number is divisible by 3 or not");
// document.write("Given number is 78");
// if(num%3==0)
// {
//     document.write("<br>Number is divisible by 3");
// }
// else {
//     document.write("<br>Number is not divisible by 3");
// }


// Q9. Write a program that checks whether the given input is an
// even number or an odd number.

// var number=+prompt("Enter a number");
// if (number%2===0)
// {
//     document.write("Number is even");

// }
// else 
// document.write("Number is odd");


// Q10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// var t=prompt("Enter tempreture");
// if(t>40)
// {
//     document.write("It is too hot outside.");
// }
// else if(t>30)
// {
//     document.write("The Weather today is Normal.");
// }
// else if(t>20)
// {
//     document.write("Today’s Weather is cool.");

// }
// else if (t>10)
// {
//     document.write("OMG! Today’s weather is so Cool.");
// }


// Q11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

// var num1=+prompt("Enter 1st Number: ");
// var num2=+prompt("Enter 2nd Number: ");
// var op=prompt("Enter Operator: ");
// var result;
// if(op==="+"){
// result=num1+num2;

//     document.write("Addition of "+num1+" and "+num2+"i s "+result);
// }
// else if(op==="-")
// {
//     result=num1-num2;
//     document.write("<br>Subtraction of "+num1+" by "+num2+" is "+result);
// }
// else if(op==="*")
// {
//     result=num1*num2;
//     document.write("Multipication of "+num1+" and "+" is "+result);

// }
// else if(op==="/")
// {
//     result=num1/num2;
//     document.write("Division of "+num1+" by "+num2+" is "+result);

// }
// else if(op==="%")
// {
//     result=num1%num2;
//     document.write("Remainder  is "+result);

// }
// else
// document.write("<br>Invalid Operator");


                    // chapter 12-13


// Q1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122)

// var char=prompt("Enter a character: ");
// if(char.charCodeAt()>=65 && char.charCodeAt()<=90 )
// document.write("Character is UpperCase Letter");
// else if(char.charCodeAt() >=97 && char.charCodeAt() <=122)
// document.write("Character is lower case Letter");
// else if (char.charCodeAt()>='48' && char.charCodeAt()<='57')
// document.write("Character is a digit");

// Q2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

// var int1=+prompt("Enter 1st integer");
// var int2=+prompt("Enter 2nd integer");

// if(int1===int2)
// {
//     document.write("Both integers are equal");
// }
// else if (int1>int2)
// {
//     document.write(int1+" is greater than "+int2);

// }
// else {

//     document.write(int2+" is greater than "+int1);
// }

// Q3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

// var inp=+prompt("Enter a number: ");
// if(inp >0)
// {
//     document.write("Number is Positive");

// }
// else if (inp==0)
// {
//     document.write("Number is 0");
// }
// else document.write("Number is Negative");


// Q4. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise
    
// var c=prompt("Enter a character");
// if (c =="a" || c=="e" || c=="i" ||  c=="o" ||  c=="u")
// document.write("True");
// else 
// document.write("False");

// Q5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

// var corPass="123fara01";
// var inpPass=prompt("Enter your Password");
// if(!inpPass){
//     document.write("Please Entere your Password");
// }
// else if(corPass===inpPass)
// {
// document.write("Correct");

// }
// else 
// {
//         document.write("Wrong");
// }


// Q6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else
// greeting = "Good evening";

// Q7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

// var time=+prompt("Enter time (in 24 hours clock format like: 19:00)");
// if(time>=0000 && time<1200)
// document.write("Good Morning");

// else if(time>=1200 && time<1700)
// document.write("Good Afternoon");
// else if(time>=1700 && time<2100)
// document.write("Good Evening");
// else if(time>=2100 && time<=2400)
// document.write("Good Night");



                                     
                  
                  
                  
                  
                  // Arrays Assignment 13-15

                  
// Question1:Declare an empty array using JS literal notaion to store student names in future.
// var arr=[];
//Question2:Declare an empty array using JS object notation to store student names in future.
// var arr=new Array();
//Question3:Declare and initialize a string array.
// var stringArray;
// stringArray=["Farah naz","hjknbb","ijohbbb"];
//Question4:Declare and initialize a number array.
// var numArray;
// numArray=[45,75,22,765];
// console.log(numArray)
//Question5:Declare and initialize a boolean array.
// var boolArray;
// boolArray=["true","false"];
// console.log(boolArray);
//Question6:Declare and initialize a mixed array.
// var mixedArray;
// mixedArray=["name",34,'true',null,undefined];
// console.log(mixedArray)
//Question7:Declare and initialize an array and store available education qualification in Pakistan(e.g. SSC, HSC, BCS, BS, BCOM, MS, M.Phil. PhD).
    
//     document.write("<h1>Qualification</h1>")
// var arr=["SSC"," HSC","BCS","BS","BCOM","MS","M.Phil","PhD"];
// for(var i=0; i<arr.length; i++){

//    document.write(i+1+")"+arr[i]+"    <br>");
// }

//Question8: Write a program to store 3 student names in an array.Taker another array to store score of these three students. 
//Assume that total marks are 500 for each student, display the scores and percentage of students.


// var arrName=["Michael","John","Tony"];
// var arrScore=[320,230,480];
// var total=500;
// for(var i=0; i<3; i++){
//     document.write("Score of "+arrName[i]+" is "+arrScore[i]+". Percentage: "+(arrScore[i]/total)*100+"%<br>");
// }


//Question9: 

// document.write(" ");

// var arr=["red","orange","purple","black","blue","white","gray","pink"];
// document.write(" <h1>Array Elements</h1>")
// for(var i=0; i<arr.length; i++)
// {
//     document.write(arr[i]+" <br> ");
// }
//a.ask and add at the beginninb of the array then update and display
// var clr1=prompt("Enter the color that you want to add at the beginning of the array ");
// document.write(" <h1>Array Elements After adding element at the beginning </h1>")
// arr.unshift(clr1);
// // console.log(arr);
// for(var i=0; i<arr.length; i++)
// {
    
//     document.write(arr[i]+" <br> ");
// }
//b. ask and add at the ending of the array then update and display
// var clr2=prompt("Enter the color that you want to add the ending of the array")
// document.write(" <h1>Array Elements After adding element at the ending </h1>")
// arr.push(clr2);
// // console.log(arr);
// for(var i=0; i<arr.length; i++)
// {
//     document.write(arr[i]+" <br> ");
// }

//c. add two colors to the beginning of the array then update and display


// var clr3=prompt("Enter two more colors to add at the beginning of the array (element:1)");
// var clr4=prompt("Enter two more colors to add at the beginning of the array (element:2)");
// document.write(" <h1>Array Elements After adding 2 elements at the beginning </h1>")
// arr.unshift(clr3,clr4);
// for(var i=0; i<arr.length; i++)
// {
//     document.write(arr[i]+" <br> ");
// }

// d. delete the first element of an array (update and display)
// document.write(" <h1>Array Elements After deleting first element </h1>")
// arr.shift();
// for(var i=0; i<arr.length; i++)
// {
//     document.write(arr[i]+" <br> ");
// }

// e. Delete the last color in the array (update and display)

// document.write(" <h1>Array Elements After deleting last element </h1>")
// arr.pop()
// for(var i=0; i<arr.length; i++)
// {
//     document.write(arr[i]+" <br> ");
// }


//f. Ask the user at which index he/she wants to add a color and color name. Then add the color to desired  position/index. Display the updated array in your browser.


// var ind1=+prompt("Enter the index at which you want to add an element ");
// var clr5=prompt("Enter the color name that you want to add at index "+ind1);
// document.write("<h1>Array Elements after adding element at index</h1>"+ind1);
// arr.splice((ind1-1),0,clr5);
// for(var i=0; i<arr.length; i++)
// {
//     document.write(arr[i]+" <br> ");
// }
//g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. Display the updated array in your browser

// var ind2=+prompt("Enter the index/position at which you want to delete");
// var num=+prompt("How many numbers you want to delete");
// document.write("<h1>Array Elements after deleting element of index</h1>"+ind1)
// arr.splice((ind2-1),num);
// for(var i=0; i<arr.length; i++)
// {
//     document.write(arr[i]+" <br> ");
// }

//Question10: Write a program to store student scores in an array and sort the array in ascending order using Array's sort method.

// var arr=[320,230,480,120,898,0,8,1,56,25];
// var temp;
// for(var i=0; i<arr.length; i++)
// {
//     for(var j=0; j<arr.length-1; j++)
//     {
//         if(arr[j]>arr[j+1])
//         {
//             temp=arr[j];
//             arr[j]=arr[j+1];
//             arr[j+1]=temp;

//         }

//     }
// }
// for(var k=0; k<arr.length; k++)
// {
//     document.write("<br>"+arr[k]);
// }

//Question11: Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.

// var cities=["Karachi", "Lahore","Islamabad","Quetta","Peshawar"];
// var selectedCities =cities.slice(1,4);
// console.log(selectedCities);


//Question12: Write a program to create a single string from the below mentioned array:
// var arr=["This"," is "," my "," cat "];
// (Use array's join method)


// var arr=["This "," is "," my "," cat "];
// var str=[];
    
//     document.write("<h1>Array</h1>");
//     for(var i=0; i<arr.length; i++)
//     {
//         document.write(arr[i])
//     }

    ///OR///

//     document.write("<h1>String</h1>");
// for(var i=0; i<arr.length; i++ )
// {
//     str=str+arr[i];

// }

// document.write(str);

//Question 13: Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored (FIFO-First In First Out)

// var array=new Array(5);
// for(var i=0; i<5; i++)
// {
//         array[i]=prompt("Enter value of index "+(i+1));    
// }

// document.write("<h1>Array Elements</h1>")
// for(var i=0; i<5; i++)
// {
// document.write("Out:<br>"+array[i]+"<br>");
// }


//Question14: Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In First Out)


// var array=new Array(5);
// for(var i=0; i<5; i++)
// {
//         array[i]=prompt("Enter value of index "+(i+1));    
// }
// document.write("<h1>Array Elements In Reverse Order</h1>")
// for(var i=4; i>=0; i--)
// {
// document.write("Out:<br>"+array[i]+"<br>");
// }

// Question15: Write a program to store phone manufactures (Apple, Samsung, Motorola, Nokia , Sony & Haier ) in an array. Display the following dropdown/select menu in your browser using documnet.write() method:

// var arr=["Apple", "Samsung","Motorola","Nokia","Sony","Haier"];


// document.write("<h1>DropDown</h1>")


// document.write("<select><option >"+arr[0]+"</option><option >"+arr[1]+"</option><option >"+arr[2]+"</option><option >"+arr[3]+"</option><option >"+arr[4]+"</option><option >"+arr[5]+"</option></select>")




                        // Chapter 17-20
            //------------Array and Loops----------------



//  Question1 : Declare and initialize an empty multidimensional array .(Array of arrays)

// var arry = [];
// arry=[[4,2],[9,1]];
// console.log(arry);


//  Question2 : Declare and initialzse a multidimensional array representing the matrix

// var matrix=[];
// matrix=[
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ]
// for(var i=0; i<matrix.length; i++)
// {
//     for(var j=0; j<matrix[i].length; j++)
//     {
//         document.write(matrix[i][j]+"  ")
//     }
//     document.write("<br>")
// }

//  Question3 : Write a program to print numeric counting from 1 to 10

// for(var i=1; i<=10; i++)
// {
//     document.write(i+"<br>");
// }

//  Question4 : Write a program to print multipication table of any number using for loop. Table numbet and length should be taken as an input from user.

// var num=+prompt("Enter number to print its table");
// var len=+prompt("Enter the length of the table");
// if(!num)
// {
//     document.write("Not a number");

// }
// else if(!len)
// {
//     document.write("Not a number");
// }
// else{
    
// for (var i=1; i<=len; i++)
// {
//     document.write("<br>"+num+" x "+i+" = "+num*i);
    
// }
// }

//  Question5 : Write a program to print items of the following array using for loop

// fruits=["apple", "banana","mango","orange","strawbery"];
// document.write("<h1>Array Elements</h1>")
// var fruits=["apple", "banana","mango","orange","strawbery"];
// for (var i=0; i<fruits.length; i++)
// {
//     document.write(fruits[i]+"<br>");
// }
// document.write("<br><br>")
// for (var i=0; i<fruits.length; i++)
// {
//     document.write("Element at index"+i+" is "+fruits[i]+"<br>");
// }

//  Question6 :Generate the following series in your browser. See example output

//a. Counting: 1,2,4,5,6,7,8,9,10,11,12,13,14,15
// document.write("<h1>Counting:</h1>");
// for(var i=1; i<=15; i++)
// {
//     document.write(i+" ");
// }


// //b. Reverse Counting: 10,9,8,7,6,5,4,3,2,1
// document.write("<h1>Reverse Counting:</h1>");
// for(var i=10; i>=1; i--)
// {
//     document.write(i+" ");
// }


// //c. Even: 0,2,4,6,8,10,12,14,16,18,20
// document.write("<h1>Even:</h1>")
// for(var i=0; i<=20; i+=2)
// {
//     document.write(i+" ");

// }
// //d. Odd: 1,3,5,7,9,11,13,15,17,19
// document.write("<h1>Odd:</h1>")
// for(var i=1; i<=20; i+=2)
// {
//     document.write(i+" ");

// }


// //e. Series: 2k,4k,6k,8k,10k,12k,14k,16k,18k,20k
// document.write("<h1>Series:</h1>")
// for(var i=2; i<=20; i+=2)
// {
//     document.write(i+"k"+" ");

// }


//  Question7 : You have an array
//A=["cake","Apple pie","cookie","chips","patties"]
//Write a program to enable "search by user input" in an array.
//After searching, prompt the user whether the given item is found in the list or not.

// var A=["cake","Apple pie","cookie","chips","patties"];
// var orderOfuser=prompt("Enter your order ");
// var flag=0;
// for(var i=0; i<A.length; i++)
// {
// if(A[i]===orderOfuser)
// {
//     flag=1;
//     document.write(orderOfuser+" is available  at index "+i+" in our bakery");
//     break;
// }
// }
// if(flag===0)
// {
//     document.write("We are sorry. "+orderOfuser+" is not available in our bakery");
// }


//  Question8 : Write a program to identify the largest number in the given array.
//Array=[24,53,78,91,12].


// var Arr1=[24,53,78,91,12];
// for(i=0; i<Arr1.length; i++)
// {
//     document.write(Arr1[i]+"  ");
// }
// var lar=Arr1[0];
// for(i=0; i<Arr1.length; i++)
// {
// if(lar<Arr1[i])
// {
//     lar=Arr1[i];
// }
// }
// document.write("<h1>Largest Element</h1>");
// document.write(lar);


//  Question9 : Write  a program to identify the :Larest number in the given array.

// var Arr=[24,53,78,91,12];
// for(i=0; i<Arr.length; i++)
// {
//     document.write(Arr[i]+"  ");
// }
// var small=Arr[0];
// for(i=0; i<Arr.length; i++)
// {
// if(small>Arr[i])
// {
//     small=Arr[i]
// }
// }
// document.write("<h1>Smallest Element</h1>");
// document.write(small);

//  Question10 : Write a program to print multiples of 5 ranging 1 to 100.
//5, 10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100

// for(var i=0; i<=100; i+=5)
// {
//         document.write(i+" ");
    
//     }



        //-------------------String Methods-----------------------

// Q1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.

// var firstName=prompt("What is your First Name");
// var lastName=prompt("Enter Last Name");
// var fullName=firstName+" "+lastName;
// console.log("Hello "+fullName);

// Q2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser

// var favMobileModel=prompt("Enter your Favourite Mobile Model");
// console.log("Your Favourite Mobile is "+favMobileModel+" Lenght of the input is "+favMobileModel.length);

// Q3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser

// var str="Pakistan";
// document.write(str+"<br>")
// var ind=str.indexOf('n');
// document.write("Index of letter 'n' is "+ind);


// Q4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser. 

// var str="Hello World";
// var ind=str.lastIndexOf('l');
// document.write("String is "+str);
// document.write("<br>"+"Last index of letter 'l' is "+ind);

// Q5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.

// var str="Pakistan";
// document.write(str+"<br>");
// var char=str.charAt(3);
// document.write("Character at index 3 is "+char);


// Q6. Repeat Q1 using string concat() method.

// var firstName=prompt("Enter your First Name");
// var lastName=prompt("Enter your Last Name");

// var fullName=firstName.concat(" ",lastName);

// document.write(fullName);

// Q7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad”

// var city ="HyderAbad";
// document.write(city+"<br>");
// var newCityName=city.replace("Hyder","Islam");
// document.write(newCityName);

// Q8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;



// var message="Ali and Sami are best friends. They play cricket and football together.";
// document.write(message);
// var newMessage=message.replace(/and/g,"&");
// document.write("<br><br><br>"+newMessage);



// Q9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

// var str="472";
// document.write("String<br><br>"+str);

// document.write("<br><br>Numver<br><br>"+~~str);

// Q10. Write a program that takes user input. Convert and
// show the input in capital letters.

// var inp=prompt("Enter any input");
// document.write("User Input "+inp);
// var nameUpp=inp.toUpperCase();
// document.write("</br></br> UpperCase "+nameUpp);

// Q11. Write a program that takes user input. Convert and
// show the input in title case.


// var userInput=prompt("Enter Input");

// var firstLetter=userInput.slice(0,1).toUpperCase();
// var otherWords=userInput.slice(1);
// var userInpModefied=firstLetter+otherWords;
// document.write("User Input "+userInput);
// document.write("<br><br>User Input Modefied "+userInpModefied);


// Q12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.


// var num = 35.36 ;
// document.write("Given Number is "+num +"<br>");
// var withoutDot1=num.toString().replace(/./g,"");
// document.write(withoutDot1);

//OR

        
//         var num=35.36, c=0;
//         var toStr=num;
//         document.write(num+"<br><br>")
//      var str=num.toString();
//      for(var i=0; i<str.length; i++)
//      {
//          if(str[i]=='.')
//          {
             
//                 break;
//          }
//          else
//          {
//              c=c+1;
//          }
//      }
//      var ten=1;
//        for(var i=c+1; i<str.length; i++)
//        {
//            ten=ten*10;
//            document.write(i+" "+ten+"<br>")
//        }
//        toStr=toStr*ten; 
//        document.write("Given is floating point number "+num)
// document.write("<br><br>Result is "+toStr.toString());


    




// Q13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

// var userName=prompt("Enter your Name");
// document.write("You Entered "+userName);

// for(var i=0; i<userName.length; i++)
// {
        

//         if (userName.charCodeAt(i)===33 || userName.charCodeAt(i)===44 || userName.charCodeAt(i)===46 || userName.charCodeAt(i)===64 )
//         {
//                 flag=1
//         document.write("<br>Please Enter a Valid Name");
//         }
        
// }


// Q14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. 

// var  A = ["cake","apple pie","cookie","chips","patties"];
// var order=prompt("Enter Your Order").toLowerCase();

// var flag=0;
// for (var i=0; i<A.length; i++)
// {
//         if(A[i]===order)
//         {
//                 flag=1;
//                 document.write("Your Order "+order+" is Available at index "+i);
//         }
// }

// if(flag==0)
// {
//         document.write("Sorry! Your Order "+order+" is not available");
// }

// Q15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.



// var passWord=prompt("Enter Password (contains alphabet and numbers) ");
// var firsLetter=passWord.slice(0,1);
// var flag=0;
// for(var i=48; i<=57; i++){
// if(firsLetter.charCodeAt()===i)
// console.log("First letter must be any of the alphabet");

// }

// if(passWord.length<6)
// {

        
//         console.log("pasword must be 6 characters long");
// }
// for(var i=0; i<passWord.charAt.length; i++)
// {
//         if(passWord.match(/[a-zA-Z]/g) && passWord.match(/[0-9]/g))
//         {
//                 flag=1; 
//                 break;
//         }
// }
// if(flag==0)
// {
//         console.log("Invalid ")
// }
// else
// console.log("Valid Password");


// Q16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// var str="University Of Karachi";
// var arr=str.split("");
// for(var i=0; i<arr.length; i++){
//         console.log(arr[i]);
// }


// Q17. Write a program to display the last character of a user
// input.


// var input=prompt("Enter your countary name");
// console.log("User Input is "+input);

// for(var i=0; i<input.length; i++)
// {
//         if(i===input.length-1)
//         {
//                 console.log("Last Character is "+ input[i])
//         }
// }



// Q18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

// var str="The quick brown fox jumps over the lazy dog";
// var a=0; 
// for (var i = 0; i < str.length; i++) {
//          if (str.slice(i, i + 3) == "the" || str.slice(i , i + 3)=="The") 

//         {
//                 a=a+1;
//         }

// }
// console.log("Occurence of the word 'the' Or 'The' is "+a+" times");



        //   ---------Math Methods-----------


// Question1:1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number

// var num=+prompt("Enter a positiver integer:")

// if(num<=0)
// {
//         alert("Please Enter a Postive Integer")
//         window.location.reload();
// }
// console.log("Your Entered number is "+num);


// // b. round off value of the number

// var round=Math.round(num)
// console.log("Rounded off value is "+round);

// // c. floor value of the number

// var floor=Math.floor(num);
// console.log("Floor value is "+floor);


// // d. ceil value of the number

// var ceil=Math.ceil(num)
// console.log("Ceil Value is "+ceil);



// Question:2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number

// var negNum=+prompt("Enter a negative number");
// if(negNum>=0)
// {
//         alert("Enter a Negative Number");
//         window.location.reload();
// }
// console.log("Your Entered Number is "+negNum);


// // b. round off value of the number

// var round=Math.round(negNum);
// console.log("Round Off Value is "+round);

// // c. floor value of the number

// var floor=Math.floor(negNum);
// console.log("Floor Value is  "+floor);

// // d. ceil value of the number

// var ceil=Math.ceil(negNum);
// console.log("Ceil Value is "+ceil);



// Question3. Write a program that displays the absolute value of a number. E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var num=+prompt("Enter a value");
// var abs=Math.abs(num);
// console.log("Your Entered Number is "+num);
// console.log("Absolute value of the number is "+abs);



// Question4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:

// var random=Math.random();
// var dice=Math.floor(random*6)+1;
// console.log("Random dice value is "+dice);



// Question5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser


// var rand=Math.random();
// var n=Math.floor(rand*2)+1
// console.log(n)
// if(n==1)
// {
//         console.log("Random coin value :Heads");
// }
// else
// {
//         console.log("Random coin value :Tails");
// }



// Question6. Write a program that shows a random number between 1 and 100 in your browser.


// var rand=Math.random();
// var randomValue=Math.floor(rand*100)+1;

// console.log("Random number between 1 and 100 is : "+randomValue)


//Question7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms


// var weight=prompt("Enter your weight (kgs/kilograms)");
// var parse=parseFloat(weight);

// console.log("The weight of the user is "+parse+" kilograms")



// Question8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.


// var random=Math.floor(Math.random()*10)+1;
// var userNum=+prompt("Enter the number from 1 to 10");
// console.log(random)
// if(userNum>10)
// {
        
//         window.location.reload();
// }
// else
// {
//         if(userNum===random)
//         {
//                 console.log("Congratulations! Your Number Matched with the Secret Number");

//         }
//         else
//         {
//                 console.log("Not Matched")
//         }
// }

// *******************************Date Methods()*********************

// 1. Write a program that displays current date and time in your browser.

// var date = new Date();
// console.log("Current Date and Time "+date);


// 2. Write a program that alerts the current month in words. For example December.


// var mnth = ["January", "February","March","April","May","June","July","August","September","October","November","December"]
// var month = new Date().getMonth();

// console.log("Current Month in words "+mnth[month]);


// 3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.

// var dt = new Date();
// var day =String(dt).slice(0,3);
// alert("Today is "+day);


// 4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.DATE METHODS | JAVASCRIPT Page 2 of 5

// var dt = new Date();
// var day =String(dt).slice(0,3);
// if(day ==="Sat" || day === "Sun"){

//         console.log("Its a Fun day");
// }
// else
// console.log("Working Day");


// 5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.


// var dt = new Date().getDate();
// console.log(dt);
// if(dt<16)
// {
        
//                 console.log("First fifteen days of the month");
        
// }
// else {
        
//        console.log("Last Days Of The Month");
// }


// 6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.


// var miliSec= new Date().getTime();
// var minSince1970  = miliSec/(1000 * 60 *60);
// console.log("Minutes Since Jan 1970 midnight "+minSince1970);






// 7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”. 


// var hour = new Date().getHours();
// if(hour >= 00 && hour <=12)
// {
//         alert("Its PM");
// }
// else{
//         alert("Its AM");
// }




// 8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.


// var laterDate = new Date("Thur Dec 31 2020");
// console.log(laterDate);


// 9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015



// var days = new Date(2015,5,18);
// var sinceRamzan = days.getTime();
// var present = new Date().getTime();
// var diff = present - sinceRamzan;
// var daysSinceRamzan = Math.floor(diff/(1000*60*60*24));
// console.log(daysSinceRamzan + "Days Passed Since Ramzan 2015 ");




// 10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015. 



// var previousDate = new Date(2022,4,15).getTime();
// var presentDate = new Date().getTime();
// var dif  = presentDate - previousDate;
// var sec = Math.floor(dif/(1000));
// console.log(sec+" days passed Since 2015");




// 11. Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.


// var date = new Date();
// var extractHour = date.getHours();
// // var update =( extractHour+1) ;
// var d = date.setHours(extractHour-1);
// console.log("Current Date "+new Date());
// console.log("One Hour Ago It Was "+date);



// 12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?


// var date = new Date();
// var d = date.getFullYear();
// var hundYearsBack = d - 100;
// var updated = date.setFullYear(hundYearsBack);

// alert("Current Date "+new Date())
// alert("100 Years Back it was "+date);



// 13. Write a program to ask the user about his age. Calculate and show his birth year in your browser.


// var age = +prompt("Enter your Age");
// var  year = new Date().getFullYear();
// var yearAge = year - age;
// console.log("Your Age is "+age);
// console.log("Your Birth Year is "+yearAge);


// 14. Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge



// var customerName = prompt("Enter Customer Name");
// var numOfUnit = +prompt("Enter Number Of Units ");
// var chargesPerUnit = +prompt("Enter Charges Per Unit ");
// var d = String(new Date())
// var mnth = d.slice(3,7);
// var latePayment=350;
// var netAmount = numOfUnit * chargesPerUnit;
// var grossAmount = netAmount + latePayment;
// var mnth =String(new Date()).slice(3,3);
// document.write("<h1>K-Electric bill</h1>");
// document.write("<br> Customer Name "+"<b>"+customerName+"</b>");
// document.write("<br> Current Month "+mnth);
// document.write("<br> Number of units "+"<b>"+numOfUnit+"</b>")
// document.write("<br> Charges per unit "+"<b>"+chargesPerUnit+"</b>")
// document.write("<br><br><br>Net Amount Payable (within Due Date) "+"<b>"+netAmount.toFixed(2)+"</b>");
// document.write("<br> Late Payment Surcharge "+"<b>"+latePayment+"</b>");
// document.write("<br> Gross Amount Payable (after Due Date) "+"<b>"+grossAmount.toFixed(2)+"</b>");


// **********************Funtions***********************************

// Q1. Write a function that displays current date & time in your browser.

// function date()
// {
//         var d = new Date;
//         console.log(d);

// }

// console.log("Current Date and Time");
// date();


// Q2. Write a function that takes first & last name and then it greets the user using his full name.


// function greet(firstName = " " , lastName = " ")
// {
// alert("Hello , "+firstName+" "+ lastName);
// }

// var firstName = prompt("Enter your First Name");
// var lastName = prompt("Enter your Last Name");

// greet(firstName,lastName);



// Q3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.


// function sum(num1,num2){
//         var sumOfNums = num1 + num2;
//         return sumOfNums;

// }


// var num1 = +prompt("Enter 1st Number");
// var num2 = +prompt("Enter 2nd Number");

// console.log("Sum of two Numbers is "+sum(num1,num2));



// Q4. Calculator:
// Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.


// function opFunc(num1 = 0,operator,num2 = 0)
// {var result;

//         switch(operator){
//         case '+':  console.log("Addition"); result = num1 + num2; break;
//         case '-': console.log("Substraction"); result = num1 - num2; break;
//         case '*':  console.log("Multipication"); result = num1 * num2; break;
//         case '/':  console.log("Division"); result = num1 / num2; break;
//         case '%':  console.log("Modulus"); result = num1 % num2; break;
//         default :console.log("Invalid Operator");
// }
// return result;
// }
// var num1 = +prompt("Enter a number");
// var num2 = +prompt("Enter second number");
// var operator = prompt("Enter operator");

// console.log("Result is "+opFunc(num1,operator,num2));
        


// Q5. Write a function that squares its argument.


// function square(num)
// {
//         var sq = num*num;
//         console.log(sq);

// }
// var num = +prompt("Enter a number to find its square");
// square(num);



// Q6. Write a function that computes factorial of a number.



// function facto(num)
// {
// //7 
// // 1 * 2 * 3 * 4 * 5 * 6 * 7
//        var  fac = 1;
//         for(var i=1; i<=num; i++)
//         {
//               fac *=i;
                
//         }
//         num= fac;
//         console.log(num);
// }
// var num = +prompt("Enter a number to find its factorial");
// facto(num);


// Q7. Write a function that take start and end number as inputs & display counting in your browser.


// function counting(start,end)
// {

//         if(!start || !end)
//         {
//                 console.log("Enter a number");
//         }
//         else {
//                 console.log("Counting from "+start+" to "+end);
//                 for(var i=start; i<=end; i++)
//                 {
//                         console.log(i);
//                 }
//         }
      
// }
// var start = +prompt("Enter start point to display counting");
// var end = +prompt("Enter end point of the counting");
// counting(start,end);


// Q8. Write a nested function that computes hypotenuse of aright angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2 Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()



// function calculateHypotenuse(base,perpendicular){



// var base2 = calculateSquare(base);
// var perpendicular2 = calculateSquare(perpendicular);

// var hypotenuse = base2 + perpendicular2;
// return hypotenuse;
//         function  calculateSquare(sq){
// return square = sq * sq;
//         }

// }


// var base = +prompt("Enter a base ");
// var perpendicular= +prompt("Enter a perpendicular");
//  var hyp = calculateHypotenuse(base,perpendicular);

// console.log("Hypotenuse of a right angle triangle is "+ hyp);


// Q9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables


// function areaOfRectangle(width,height){

//         var area = width * height;
//         return area;


// }

// console.log("Area Of A Rectangle");
// // console.log(areaOfRectangle(7,4));  /////  Argument as a value

// var width =7, height = 4;
// console.log(areaOfRectangle(width,height));  ///Argument as a variable


// Q10. Write a JavaScript function that checks whether a passed string is palindrome or not? A palindrome is word phrase, or sequence that reads the same backward as forward, e.g., madam.


// function palindrome(str) {
//         var re = /[^A-Za-z0-9]/g;
//         str = str.toLowerCase().replace(re, '');
//         var len = str.length;
//         for (var i = 0; i < len/2; i++) {
//           if (str[i] !== str[len - 1 - i]) {
//               return false;
//           }
//         }
//         return true;
//        }
//        var str = prompt("Enter a string to check whether the string is palindrome or not");
//        if(palindrome(str)){
//                console.log("Palindrome");
        
//        }
//        else console.log("String is not a palindrome");


// Q11. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'




// function firsLetter(str){

//         var arr = str.split(" ");
//         var newArr=[]
//         for(var i =0; i < arr.length; i++)
//         {
//                 arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

//         }
//         var str2 = arr.join(" ");
// return str2;
// }

// var str = 'the quick brown fox';


// console.log("Given String is "+str);

// console.log("String After changes  "+firsLetter(str));


// 12. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'


// function longestWord(str){

// var arr= str.split(" "); var len=0;
// for(var i =0; i<str.split(" ").length; i++)
// {
//         if(arr[i].length > len){

//                 len = arr[i].length;
//                 // console.log(arr[i])
//                 console.log(len)
//         }
// }

// }

// var str = "Web Development Tutorial";
// longestWord(str);


// 13. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of function occurrences of the specified letter within the string.Sample arguments : 'JSResourceS.com', 'o'


// 14. The Geometrizer Create 2 functions that calculate properties of a circle, using the definitions here. Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2


// function calcCircumference(radius)
// {

//         var circumferenceOfCircle = 2 * 3.14 * radius;
//         console.log("The circumference is" +circumferenceOfCircle);
// }

// function calcArea(radius){

// var areaOfCircle = 3.14*radius*radius;
//         console.log("The area is "+areaOfCircle);
// }
// var radius = +prompt("Enter the radius to calculate the Circumference and Area");
// calcCircumference(radius);
// calcArea(radius);