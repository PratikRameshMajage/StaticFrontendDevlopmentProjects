# `Web Technology: V25.02.17` 
- `Fontend:`
- `ARPANET:`
  - `Intial Stage of Internet.`
  - `Advanced Research Project Agency Network.`
  - `closed in 1989.`
- `Intranet:` 
  - Internet which is inclose in particular Organization.
  - Limited or `Resticted to the particualr Organization or Company.` eg.,HR.company.com.
  - It is `Private Network.`
  - On this network type intranet work. : `eg.,LAN & MAN`: Local Area Network & Metropolitian Area Network.
  - It is `Highly Secured.` 
  - `Authentication, Authorization Required to Access.`
- `Internet:`
  - `Net` - `Network` - `All is Interconnected with each other.`
  - It is `less Secured.`
  - It is `Easily Accessible.`
  - `Access using Vpn.`(Virtual Private Network)
- `WWW:`
  - `World Wide Web.`
- `URL:`
  - `Uniform Resource Locator.`
  - `Your Addess on Internet.`
  - Website Address on Internet. 
  - On which port Server is running. eg,. localhost://5573/index.html
- `HTTP: Hyper Text Transfer Protocol:`
  - `Internet Protocol` `(Rules of req & res)` 
  - It is `Synchronous way.` (TSA) `Time Stamp Algorithum`
  - http on url(Port no)
  - If `Req not handle` and `Res not sent` then this situation is called `Dead lock`.
- `Get Method:`
  - `Open Net` - `Not Secured`
  - `Address is Visible`
- `Post Method:`
  - `Secured`
  - `Address is not Visible`
- `Digital Files:` `Documents:` `Web Pages:`
  - `Each page is Document for Server.`
  - `That's why 1s't line of code in html is` `Docktype="html"`.
- `HTML:`
  - `Hyper Text Transfer Protocol.`
  - In Html 1st we need to decide the Structure of web page.
  - `Html is use to define the Structure web page.`
  - It is `Not a Programing Language`.
  - It is `Markup Language.`
- `CSS:`
  - `Cascading Style Sheet.`
  - Types:
    - `Inline Css`
    - `Internal Css`
    - `External Css`
- `JAVASCRIPT:`
  - `Include Logic into the web page.`
- `BootStrap:`
  - `Framework of Html, Css, Js, Jquery.`
  - `BootStrap Classes` - `Container of Css code`
  - `BootStrap Follows International code Standards.` 
  - `Tweeter created using Bootstrap.`   
- `Browser:`
  - `Browser render's web page.`
  - `Every web page is Document.`
  - `FTP:` `File Transfer Protocol`
  - `HTTP: TCP|IP:` `Transfer Control Protocal` | `Internet Protocol.`

```html
V25.02.17
<html></html>
<head></head>
<title></title>
<h1><h2><h3><h4><h5><h6> 
<center><center>
<marquee></marquee>  
<!-- By default flow in right to left direction -->
<marquee direcetion="right"></marquee>  
<marquee direcetion="up"></marquee>  
<marquee direcetion="down"></marquee>
<marquee direcetion="right"><marquee direcetion="up"></marquee></marquee>
<marquee><marquee direcetion="down"></marquee></marquee>  
```
- `HTML:`
  - `Tag:` `<>` `Angular Brackets.`
  - `head:` `Context of data on web page.`
  - `title:` `Browser web page title or heading.`
  - Difference between element and tag.
  - mixture of element and tag creates html markup language.
    - `Element:`
      - `Element's are Without angular brackets.`
      - `Element's specified within Tags.`
    - `Tag:`
      - `Tag's are With angular brackets.`
      - `Tag's Hide the Complexity of data.`    
 - `Hyperring:` 
   - `Jumping from one document to another via links is called hyperlinking.`
   - Hyperlinking: The process of navigating from one document to another through clickable links. These links, known as hyperlinks, connect web pages, documents, or other digital resources, enabling seamless navigation on the internet or within a system.
 - `Markup language:` 
   - `Hide's complexity of Data.` 
   - `Context specified within Tag's`
 - `Web page:` `Serve on web Internet.` `Connected with each other.` `They are all connected with each other.`   

- **HyperText Markup Language (HTML)**
  - **HyperText Markup Language (HTML)** is the standard language used to create and structure web pages.  

- **Breaking it down:**  
  1. **HyperText** → Text that contains links (hyperlinks) to other documents or resources.  
  2. **Markup** → A way of structuring content using special tags (`<tags>`) to define elements like headings, paragraphs, images, and links.  
  3. **Language** → A set of rules and syntax used to communicate with web browsers.  

- **What HTML Does:**  
  - It **structures** web content using elements like `<p>` for paragraphs, `<h1>` for headings, and `<img>` for images.  
  - It **links** different web pages together using `<a>` (anchor) tags.  
  - It **works with CSS and JavaScript** to style and add functionality to web pages.

- `JavaScript:`
- It is a Scripting Language.
- It is a Programing Language.
- Script is used to embedd js into html.
- Script tag can be invoke inside js function.
- Js is used to introduce logic into the web page.
- Embedd means you writing js into html page.
- Internal Link and External Script tab use to link. src="" and desc attributes
- Write() function is used to print any value in Html. = document.write("Web-Design") | 
- We can use br tag inside double cotation. document.write("<br>Web-Design")
- Beacouse, js is Scripting Language it always accept string.
- If we need number then We need to explicitely parse into number using parseInt() function. parseFloat, parseDouble.
- This is just for + Operator beacouse it work as a Addition and Concatination.
- Implicite parsing done with other Operators like - * / // %.
- There is Defference between Type Casting and Parsing.
- Parsing: Convert String into number. JavaScript.
- Type Cast: Convert any value into any other data type. Just it can not applicable with String. Java.
- `Context api` - `window` | `Stack` | `Heap`    
- `Popup's:`
  - `Worning:` 
    - alert() - ok
  - `Permission:`
    - confirm() - ok | cancel
  - `Input:`
    - prompt() - input | ok | cancel | save in variable
- `Variables:` 
  - Variable means name of Memory Location.
  - Variable means Container.
  - Variable name varry or variation in name and size of container. 
  - Types of Variable in JavaScript:
    - var, let, const 
    - `Var:`
      - var allow Create's two duplicate variables.
      - Es5
      - Function Scope.
      - var add itself in window object. Expose your Data.
      - allow to update variable.
      - var is used to declare Variables.
      - var apne parent fun me kahi bhi use ho sakta hai.
    - `let:`  
      - let not allow to Create two duplicate variables.
      - Es6
      - Braces Scope.
      - let don't add itself in window object.
      - allow to update variable.
      - let is used to declare Variables.
    - `Const:`
      - not allow to update and modify variable.
      - Es6
      - braces Scope.
      - const not add itself in window object.
      - const is used to declare Constant Variables
- `Data Types:` 
  - typeof() function is use to check data type of variable.  
  - Primitives and Reference:
  - `Primitives:` Real value Copy
    - number: 37, 9.7;
    - string: "", "Pratik";
    - undefined: var a;
    - boolean: 
      - Truthy: 1, true, except falsy values;
      - Falsy: 0, NaN, null, document, false; 
    - BigInt and Symbol
    - object: (Object:object)
    - Array Consider as object in javascript. var a = { 0:11, 1:22, 2:33, 3:44, 4:55,   -1:104 }
    - NaN: var a = Par2345;
    - null
    - not defined: variable a is not exist. 
  - `Reference:` Reference value copy.
  - [] = Array
  - () = Functions
  - {} = Object`
- `Array:`
  - Declare using [].
  - var a = [11,22,33,44,55]. This is Array.
  - Access using [] & index value. a[0], a[1]
  - To Store Multiple Elements.
  - `Methods:`
    - push: Add extra element in Last.
    - pop: Delete Last Element. 
    - shift: Delete First Element.
    - unshift: Add Element in First.
    - slice: use in pythn.
    - splice: splice(2,1) Delete using index value. 
- `Object:`
  - Declare using {}.
  - var a = {name : "Pratik", age:22}. This is Object.
  - Access using dot Operator. a.name, a.age  
  - delete a.name. delete the Object Properties.
  - Variable-Properties-key:value, and value-functions-Methods. A property whichvalue is function.  
  - To Store the information of one Entity.
- `Function:`
  - Function is block of code which executes targeted logic.
  - Function is declared by function followed by function_Name.
  - A function logic executes when the function is called.
  - Processor jump and executes the Imediate block of code.
  - Reusability: Write Once and executes Multiple Times.
  - There are two types of Functions:
    - `Predefined:`
      - Predefined are renderimate Functions.
    - `User-Defined:`
      - userdefined are created by Programmers | Coders. 
    - `Syntax:` function function_name(){ //logic } = function defination function_name() = Function Call
    - `Parametrise Function:` 
      - Parameters = Function Defination and Arguments = Function Call.
    - `Non-Parametrise Function:`
    - `Return function:`
      - Function only return once.
  - `Execution Context:` 
    - Imaginary Container.
    - Contain 3 Things:
      - Variables.
      - Functions.
      - `Lexical Environment:` Scope of Variable and Function.
- `Arithmatic Operators:`
  - Addition & Concatination
  - Subtraction
  - Multiplication
  - Division
  - Modulo
- `Loops:`
  - Iteration and Parsing:
  - For Loop = For Control loop Statements.
  - While Loop = For infinite loop Condition's
  - Do-while Loop = Not Mostly use in devlopment
  - for of = String
  - for in = Object
  - forEach = Array