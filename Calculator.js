var n=document.getElementById("digits");
n.onclick(function(){
    document.getElementById("inputSize").value=n;
});
function buttonClicked(x)
{
    switch(x)
    {
        case "=":
            try{
                document.getElementById('inputSize').value=eval(document.getElementById('inputSize').value);
            }
            catch(e)
            {
                document.getElementById('inputSize').value="Syntax error!";
            }
        break;
        case "back":
            var str=document.getElementById("inputSize").value;
            str=str.substring(0,str.length-1);
            document.getElementById("inputSize").value=str;
        break;
    }
}