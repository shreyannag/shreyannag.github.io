/* Code Written By Shreyan Nag */


function flames() {
 var r=/\s+/g;
 var fname=document.getElementById('name1').value;
var fr=fname.replace(r,"");	
 var flen=fr.length;
 var sname=document.getElementById('name2').value;
var sr=sname.replace(r,"");	
 var slen=sr.length
 var i,j,n,p=0;
	for(i=0;i<flen;i++)
	{
		for(j=0;j<slen;j++)
		{
			if(fname.charAt(i)==sname.charAt(j))
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
		if(fname.charAt(0)==sname.charAt(n))
		{
			p++;
	}
	}
	switch(p%6)
	{
		case 1 : document.getElementById('demo').innerHTML = "FRIENDS";
			break;
		case 2: document.getElementById('demo').innerHTML = "LOVERS";
			break;
		case 3: document.getElementById('demo').innerHTML = "AFFECTIONATE";
			break;
		case 4: document.getElementById('demo').innerHTML = "MARRIAGE";
			break;
		case 5: document.getElementById('demo').innerHTML = "ENEMY";
			break;
		case 6: document.getElementById('demo').innerHTML = "SISTER"
			break;
	}
}

function again() {
	location.reload(false);
}
