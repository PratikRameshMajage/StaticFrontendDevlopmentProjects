document.write("<h1>Types:</h1>")
var a = 37;
document.write(typeof(a))
var b = 9.7;
document.write("<br>",typeof(b))
var c = "Pandu";
document.write("<br>",typeof(c))
var d;
document.write("<br>",typeof(d))
var e = true;
document.write("<br>",typeof(e))
// var f = BigInt(2789.2189);
// document.write("<br>",typeof(f))
// BigInt and Symbol 
var g = {a: "JavaScript", b:"Python", c:"Java", d:"MySql"};
document.write("<br>",typeof(g))
var h = [11,22,33,44,55]
document.write("<br>",typeof(h))
// Array are consider as object in java and javascript
var i = "";
document.write("<br>",typeof(i))

document.write("<h1>Values:</h1>")
document.write("A is: ",a)
document.write("<br>B is: ",b)
document.write("<br>C is: ",c)
document.write("<br>D is: ",d)
document.write("<br>E is: ",e)
// document.write("<br>F is: ",f)
document.write("<br><h4 style='display: inline-block ' >G is: </h4>",g)
document.write("<br>G is: ",g.a)
document.write("<br>G is: ",g.b)
document.write("<br>G is: ",g.c)
document.write("<br>G is: ",g.d)
document.write("<br><h4 style='display: inline-block ' >H is: </h4>",h)
document.write("<br>H is: ",h[0])
document.write("<br>H is: ",h[1])
document.write("<br>H is: ",h[2])
document.write("<br>H is: ",h[3])
document.write("<br>H is: ",h[4])
document.write("<br>I is: ",i)