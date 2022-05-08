console.log("Ready or not, here I come!!");

function FeverDream ()
{let hexNumber = Math.floor(Math.random() * (16 ** 6)); return "#" + hexNumber.toString(16).padStart(6, "0"); }

let paragraphs = document.querySelectorAll("*")

function HitMeWithYourBestShot () {
for (let paragraph of paragraphs)
{
    paragraph.style.fontSize = Math.random()*0+"px";
    paragraph.style.backgroundColor = FeverDream();
      }
}
setInterval(HitMeWithYourBestShot,100);
