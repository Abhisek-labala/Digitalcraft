function sendmassage()
{
    const confirmation =confirm("Do you want to sumit.")
    if(confirmation==true)
    {
        alert("Your response has been send succesfully.. Please wait our team will contact You shortly!");
        document.getElementById("name").value ="";
        document.getElementById("email").value ="";
        document.getElementById("phone").value ="";
        document.getElementById("textarea").value ="";

    }
    else
    {
        alert("enter your details");
    }
}
function signin()
{
    const email =document.getElementById("floatingemail").value;
    const pass =document.getElementById("floatingPassword").value;
    if(email!="" && pass!="")
    {

        alert(email + " Login was successfull! Welcome to DigitalCraft Stduio.");
        window.location.href ="index.html";
    }
    else{
        alert("enter valid login details");
    }
   

}
function signup()
{
    const name =document.getElementById("name").value;
    const email =document.getElementById("floatingemail").value;
    const pass =document.getElementById("floatingPassword").value;
    if(email!="" && pass!="" && name!="")
    {
        alert(name +" your account has been created. you can login now");
        window.location.href="index.html";
        // document.writeln(name +" your account has been created. you can login now");
    }
    else{
        alert("Plz enter all details to create an account");
    }
}