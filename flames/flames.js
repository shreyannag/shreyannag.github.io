/* Code Written By Shreyan Nag */

//flames logic
function flames() {
 var r=/\s+/g;
 var d= '<button onclick=again()>Try another one !</button><br>';
 var fname=document.getElementById("name1").value;
 var fr=fname.replace(r,"");
 var flen=fr.length; console.log(flen+fr);
 var sname=document.getElementById("name2").value;
 var sr=sname.replace(r,"");
 var slen=sr.length; console.log(slen+sr);
 var i,j,n,p=0;
    if((fr=="" || sr=="") || (fr=="" && sr==""))
    {
        alert("No names have been");
    }
    else 
    {
	for(i=0;i<flen;i++)
	{
		for(j=0;j<slen;j++)
		{
			if(fr.charAt(i)==sr.charAt(j))
			{
				p++;
		}
		}
		if(p!=0)
		{
			p++;
		}
	}
	for(n=0;n<flen;n++)
	{
		if(fr.charAt(0)==sr.charAt(n))
		{
			p++;
	}
	}
    }
	switch(p%6)
	{
		case 1 : document.getElementById("print").innerHTML = d+'<p class="fr">FRIENDS</p>';
			break;
		case 2: document.getElementById("print").innerHTML = d+'<p class="lo">LOVERS</p>';
			break;
		case 3: document.getElementById("print").innerHTML = d+'<p class="af">AFFECTIONATE</p>';
			break;
		case 4: document.getElementById("print").innerHTML = d+'<p class="mr">MARRIAGE</p>';
			break;
		case 5: document.getElementById("print").innerHTML = d+'<p class="em">ENEMY</p>';
			break;
		case 6: document.getElementById("print").innerHTML = d+'<p class="si">SISTER</p>'
			break;
	}
}

//Reload function
function again() {
location.reload(false);
}

//User form layout
document.getElementById('flames_magic').innerHTML = '<p>Your Name</p><input type="text" id="name1"><br><p>Your Crush Name</p><input type="text" id="name2"><br><button onclick=flames()>FLAMES !</button><p id="print"></p>';
