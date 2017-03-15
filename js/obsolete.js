console.log("old");
var div = document.createElement("div");
div.style.width = "300px";
div.style.height = "100px";
div.style.background = "red";
div.style.position = "absolute";
div.style.top = "58px";
div.style.left = "calc(50% - 150px)";
div.style.padding = "20px"
div.id = "obsolete"
div.innerHTML = "<a href='javascript:hideObsolete()'>Let op, de inhoud van deze website is verouderd en alleen aanwezig voor archief doeleinden.";

document.querySelector("body").appendChild(div);


document.querySelector("#obsolete a").style.color = "white";

function hideObsolete() {
	document.querySelector("#obsolete").style.display = "none";
}
