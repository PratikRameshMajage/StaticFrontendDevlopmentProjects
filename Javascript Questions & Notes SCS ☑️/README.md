# JAVA SCRIPT  ********

1. JS
2. WORD VS KEYWORD
3. VAR CONST LET
4. — THE DIFFERENCE — ES6 & ES6
5. — WINDOW OBJECT
6. — BROWSER CONTEXT API
7. — STACK
8. — HEAP MEMORY
9. — LEXECUTION CONTEXT
10. HOISTING
11. TYPE IN JS
12. — HOW TO COPY REFERENCE VALUE
13. CONDITIONALS
14. IF ELSE ELSE-IF
15. — TRUTHY VS FALSE
16. — SWITCH
17. — LOOP
18. — FOR WHILE
19. — FOR EACH FORIN FOR OF DO-WHILE
20. FUNCTION 
21. — CALLBACK FUNCS
22. PARAMETERS, ARGUMENTS
23. ARRAY
24. PUSH POP SHIFT UNSHIFT
25. — HOW ARRAY ARE MADE BEHIND THE SCENES
26. — WHY WE CAN MAKE NEGATIVE INDEXESARRAY IN JS
27.  OBJECTS
28. PROPERTISES VS METHODS
29. UPDATING OBJECT PROPERTISE
30. — UPDATING OBJECT PROP
31. — HOW TO DELETE OBJECT PROPS


# PART - 1. ****JavaScript Crash Course: Master the Basics in One Video! Ignite Your Front-End Mastery Series!****

1. WORD VS KEYWORD
2. VAR LET CONSTANT
3. HOISTING
4. TYPE IN JS
5. PRIMITIVE AND REFERENCE
6. CONDITIONALS - IF ELSE ELSE-IF
7. LOOP
8. FUNCTION
9. ARRAY
10. PUSH POP SHIFT UNSHIFT SPLICE
11. OBJECT - PROPERTIES AND METHODES

# PART - 2.**JavaScript Advance Crash Course: Level Up Your Coding Skills! Accelerate Your Front-End Mastery!**

1. 1st Difference b/w Var, Let, Const
2. 2nd Difference b/w Var, Let, Const
3. 3rd Difference b/w Var, Let, Const
4. Window Object
5. Browser Context API
6. Stack
7. Heap Memory
8. Execution Context
9. Lexical Environment
10. How to copy reference values
11. Truthy vs Flasy
12. Switch Case
13. For Each Loop
14. For in Loop
15. Do While Loop
16. Callback Function
17. First Class Functions
18. How Arrays are made behind the scenes, How we can make negative indexes arrays in JS
19. How to delete Object Prop

JAVASCRIPT_PART_1

1. WORD VS KEYWORD
    - Interpreter - Compiler
    - Cha-cha = word - no meaning
    - for = keyword - anything's which has meaning in JavaScript language which compiler understand in his dictionary
2. VAR, LET, CONSTANT
    - Variable and Constants - English words
        - VARIABLE = code mai jo bhi data store karne ke liye jiska use hota hai use kahte hai variable - value badale
        - CONSTANTS = value na badale
        - The Deference Var, Let, Constant
3. HOISTING
    - Deference in Hosting & Hoisting
    - Hoisting = Variable and Functions are Hoisted which means their Declaration is Moved on the Top of the Code
        - undefine = Exist but you don’t know where
        - not-defined = Not Exist
4. TYPE IN JS - PRIMITIVE AND REFERENCE
    - PRIMITIVE = Number, String, Null, Undefined, Boolean
        - let a = 12;
        - let b = a;
        - now a & b both have there own values
        - aisi koi bhi value jisko copy karne par real copy nahi hota, balki us main value ka reference pass hojaata hai, use ham reference value kahte hai, aur jiska copy karne par real copy ho jaaye wo primitive type value hoti hai
        - It will only change in that particular variable
    - REFERENCE = (), {}, []
        - let a = [1,2,3];
        - let b = a;
        - actually a is b change in b also change in a {both refer to one place in memory}
        - aisi koi bhi value jisko copy karne par real copy nahi hota, balki us main value ka reference pass hojaata hai, use ham reference value kahte hai.
        - It change in real values a and b both variables {if you refer a in b}
5. CONDITIONALS - IF ELSE ELSE-IF
    - if(false/true) / if(12>10) = convert into true and false

```jsx
if(true){

}
else if(true){

}
else{
    
}
```

6. LOOP
    - Loop - Iteration - Repeat
    - For Loop
    
    ```
    for(Start(Intialize),end(Condition),change(Increament)){
    
    }
    ```
    
    ```jsx
    for(var i = 0; i<11; i++){
        console.log(i);
    }
    ```
    
    - While Loop
    
    ```
    var i = 0;
    while(i<11){
        console.log(i);
        i++
    }
    ```
    
7. FUNCTION - Particular code likh ke use nam de sakte ho
    - mainly use in 3 works
        1. Use in Future 
        2. To Reuse
        3. use again  with deferent data values
    - 6 Styles to create Functions 3 in old 3 in new(ES6)
    
    ```jsx
    function abcd(){
        console.log("HEllO GEEKS");
    };
    abcd();
    ```
    
    - PARAMS & ARGUMENTS
        - ARGUMENTS - real value jo ham dete hai fun chalate waqt
        - PARAMETERS  - variables jinme valu store hoti hai arguments wali
    
    ```jsx
    function abcd(a,b){
        let c = a+b
        console.log(c);
    };
    abcd(2,2);
    ```
    
8. ARRAY
    - ham 1 variable mai 1 value store kar pate hai par jab hame 1 se jada value  store karni ho tab fir use hota hai Array.
    - array apko freedom deta hai 1 se jada value store or use karne ki.
    - array = group of values
    - index  = start from 0. 1 is on 0th index.

 

```
var a = 1,2,3;   ❌
var a = [1,2,3]; ✅
```

- PUSH POP SHIFT UNSHIFT SPLICE
    - PUSH - INSERT
    - POP - DELETE
    - SHIFT - REMOV FROM START
    - UNSHIFT - ADD FROM START
    - SPLICE - REMOVE FROM TO FROM ( INDEX, HOW MANY VALUES )

```jsx
var arr = [1,2,3,4,5];
// INSERT
arr.push(6)
console.log(arr);
// DELETE
arr.pop(6)
console.log(arr);
// REMOVE FROM START
arr.shift()
console.log(arr);
// ADD FROM START
arr.unshift(1)
console.log(arr);
// REMOVE FROM WHERE TO WHERE
arr.splice(2,1)
console.log(arr);
```

9. OBJECT
    - 1 se jada bande ki bat ki to hua array, 1 bande ke bare me sari  bat ki to hua object.
    - object hai 1 bande ki details ko hold karna. in a key value pair
    - access using . operator
    1. blank object
    2. filled object
    - key are the Properties
    - Method - Property has function value
```
// Blank Object
var a = {};
// Filled Object
var a = {
    age:24,
    name:"Pratik",
    city:"Mumbai"
		batch: function(){}
};
console.log(a.city);
// updating object proerties
a.name="John";
console.log(a.name);
```

# JAVASCRIPT_PART_2

1. VAR LET CONSTANT
    - ES5 - VAR AND ES6 - LET, CONST
    - VAR  - FUNCTION SCOPE HOTA HAI ⇒ VAR APNE PARENT FUNCTION ME KAHI BHI USE HO SAKTA HAI
    - VAR ADDS ITSELF TO TO THE WINDOW OBJECT
    - LET - BRACES SCOPE HOTA HAI
    - LET DOSENT ADD’S TO THE WINDOW OBJECT
    - JS LANGUAGE MAI KUCH CHEEJE NAHI HAIJO HAM USE KARTE HAI AUR VO CHEEJE HAME JS SE NAHI BALKI BROWSER SE MILTI HAI, AISE SARE FEATURES JO JS KA PART NAHI HAIBUT FIR           BHI HAM USE KAR SAKTE HAI UNHE HAM DHOOND SAKTE HAI EK PARTICULAR OBJECT MAI JISKA NAM HAI WINDOW.
    - JS MAI KAI SARE FEATURES HAIPAR KUCHH FEATURES JO HAM USE KARTE HAI WO FEATURES  WO NAHI HAI PAR FIR BHI USE KAR PATE HAI KYOKI WO FEATURES JS LANGUAGE USE KAR LETI           HAI WINDOW SE, AUR WINDOW EK BOX OF FEATURES GIVEN BY BROWSERTO USE WITH JS
        - 1st Difference b/w Var, Let, Const
        - 2nd Difference b/w Var, Let, Const
        - 3rd Difference b/w Var, Let, Const
    
    ```
    // SEARCH WINDOW ON CONSOLE
    // alert()
    // prompt()
    // console.log();
    // VAR a = 12;
    CONSOLE - WINDOW - DROPDAWN
    ```
    
2. Window Object
    - JS LANGUAGE MAI KUCH CHEEJE NAHI HAIJO HAM USE KARTE HAI AUR VO CHEEJE HAME JS SE NAHI BALKI BROWSER SE MILTI HAI, AISE SARE FEATURES JO JS KA PART NAHI HAIBUT FIR         BHI HAM USE KAR SAKTE HAI UNHE HAM DHOOND SAKTE HAI EK PARTICULAR OBJECT MAI JISKA NAM HAI WINDOW.
    - JS MAI KAI SARE FEATURES HAIPAR KUCHH FEATURES JO HAM USE KARTE HAI WO FEATURES  WO NAHI HAI PAR FIR BHI USE KAR PATE HAI KYOKI WO FEATURES JS LANGUAGE USE KAR LETI        HAI WINDOW SE, AUR WINDOW EK BOX OF FEATURES GIVEN BY BROWSERTO USE WITH JS
    
    ```
    // SEARCH WINDOW ON CONSOLE
    // alert()
    // prompt()
    // console.log();
    // VAR a = 12;
    CONSOLE - WINDOW - DROPDAWN
    ```
    
3. Browser Context API
    - WINDOW IS IN BROSER CONTEX API ALSO STACK AND HEAP MEMORY 3 OF THEN INCLUDE IN BROWSER CONTEXT API
4. Stack
    - FIRST COME LAST SERVE
5. Heap Memory
    - JITNA BHI VARIABLE YA DATA  HUM BANATE HAI UNHE STORE KAHI  TO KARNA PADTA HAIUSKE LIYE HOTA HAI HEAP MEMORY
    - 1+2+3{STORE}=||, 1+2=3{STORE}||, 3+3=6{STORE}||
6. Execution Context
    - EXECUTION CONTEXT MATLAB JAB BHI HAM FUNCTION CHALAYENGE FUNCTION APNA EK KHUDKA EK IMAGINARY CONTAINER BANA LEGA JISMAI USKI TEEN CHEEJE HOGI:
    1. VARIABLES
    2. FUNCTION INSIDE THAT PARENT FUNCTION
    3. LEXICAL ENVIRONMENT  OF THAT FUNCTION
    - YE JO CONTAINER HAI IMAGINARY ISE HI HAM EXECUTION  CONTEXT KAHTE HAI
    - EXECUTION CONTEXT IS A CONTAINER  WHERE THE FUNCTION’S  CODE IS EXECUTED AND IT’S  CREATED WHENEVER A FUNCTION IS CALLED IT CONTAINS 3 THINGS, VARIABLES, FUNCTION AND       LEXICAL ENVIRONMENT.
7. Lexical Environment
    - LEXICAL ENVIRONMENTHOTA HAI EK CHART JISME YE LIKHA  HOTA HAI KI AAPKA PARTICULAR FUNCTION KI CEEIJO KO ACCESS KAR SAKTA HAI AND KINKO NAHIMATLAB KI IT HOLD’S IT’S           SCOPE AND SCOPE CHAIN
8. How to copy reference values

```jsx
var a = [1,2,3,4,5,]
var b = [...a]
// spread operator = copy values in b
```

9. Truthy vs Flasy
    - Truthy vs Flasy = JS MAI KUCH BHI LIKHO WO MAINLY DO PRAKAAR MAIN SE KISI EK PRAKAAR KO BELONG KARTI HAI .
    - FALSI VALUES YE HAI = 0, FALSE, UNDEFINED, NULL, NAN- NOT A NUMBER, DOCUMENT.ALL
    - MOSTLY USE IN IF ELSE
  
10. Switch Case

```jsx
switch(1){
    case 1:
        break;
    default:
}
```


11. For Each Loop
    - FOREACH LOOP SIRF ARRAY PE CHALTA HAI MATLAB KI JAB BHI TUMHAAREPASS EK ARRAYHO, TAB USE MAI KON AATA HAI FOREACH LOOP
    - FOREACH KABHI BHI BY DEFAULT APKE ARRAY MAIN  CHANGE  NAHI  KARTA WO AAPKO CHANGES KARKE DETA HAI ARRAY KI TEMPORARY COPY PAR JISKE WAJAH SE ARRAY  HAMESHA SAME RAHTA       HAI.

```
var a = [1,2,3,4,5,]
a.forEach(function(val){
    console.log(val+2);
})
```

12. For in Loop
    - OBJECT PE LOOP KARNE KE LIYE HOTA HAI FORIN LOOP

```jsx
var obj = {
    fullname: "Prtik",
    age:20,
    city:"mumbai"
}
for(var key in obj){
    console.log(key, obj[key]);
}
```

13. Do While Loop
    - WITHOUT CHECKING ONE TIME CODE EXECUTE. AT LEAST ONE TIME THEN IT CHECK CONDITION

```jsx
var a =0;
do{
    console.log("hey");
    a++;
}while(a<15)
```

14. Callback Function
    - JAB BHI KOI ASA CODE JO BAAD ME CHALTA HAI AAP LIKHOGE , KYUKI WO CODE BAAD MAIN CHALTA HAI JS KO YE  PATA NAHI HOTA KE WO COMPLETE HUA YA NAHI, AISE CODE KE COMPLET  HOGYA AUR AAP USE CHALA SAKTE HO, YE BATANE KA KAM CALLBACK KA HAI.
    - IT IS ASYNCRYNOUS JS
    - AAISA CODE JO BAD ME CHALTA HAI USE HAM EK FUNTION DEDETE HAI KE BHAIYA JOB COMPLETE HOJAANA TO YE  FUNCTION CHALA DENA , AUR WO JO FUNCTION HAM DETE HAI WO EK NORMAL FUNCTION HI  HOTA HAIAUR USE KAHTE HAI CALLBACK FUNCTION.

```jsx
setTimeout(function(){
    console.log("2 sec baad chala");
},2000);
```

15. First Class Functions
    - JS MAIN EK CONCEPT HOTA HAI JISKA MATLAB HOTA HAI KI AAP FUN KO USE KAR SAKTE HOAS A VALUE.

```jsx
function abcd(a){
    a()
}
abcd(function(){console.log("hey");})
```

16. How Arrays are made behind the scenes, How we can make negative indexes arrays in JS

```jsx
var  a = [1,2,3,4,5]
// THIS IS  NOT ARRAY. IT CONVERT INTO THIS 
// JUST CHECK IT BY USING {TYPE OF} 
arr = {
    0:1,
    1:2,
    2:3,
    3:4,
    4:5,
}
```

17. How to delete Object Prop

```
   var a = {
    name:"Pratik",
    age:20
}
delete a.name;
console.log(a);
```
