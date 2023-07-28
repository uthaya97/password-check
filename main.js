// password correct
var a=prompt("Enter the password");

document.write("Enter Password = "+a+"<br><br>");

var b=[];

for (i=0; i<a.length;i++){
	if (a[i]==" "){
		console.log(b.push(a[i]));
	}
}

if (b==" "){
		document.write("Not accepted space in password<br> Please Enter correct password")
	}
else if (b=" "){
		document.write("Your Password is correct");
	}





