/*
	Do JS to put hugo in the middle:
	-get the lane width
	-substract lane_width from hugo_width (200px)
	-then divide by 2
	-add the result as margin-left
*/

// console.log(document.getElementById("middle-lane").offsetWidth)
const lane_width = document.getElementById("middle-lane").offsetWidth;
const hugo = document.getElementById("hugo");
const width_center = (lane_width-200)/2;
const stanga = -1*lane_width+width_center;
const dreapta = lane_width+width_center;
let counter = 0;
let obstacles = 0;
const max_obstacles= 5;
let conditie=0;
var ok=1
let arata=1
// console.log(lane_width);
// console.log(width_center);
// console.log(stanga);
// console.log(dreapta);

function removeElement(elementId) {
    // Removes an element from the document
    const element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}


hugo.setAttribute("style","margin-left:"+width_center+"px;background-image: url('img/hugojump-01.png')")
// hugo.style.margin-left = (lane_width-200)/2;

// console.log((lane_width-200)/2)


document.onkeydown = function(e) {
	if (counter == 0) {
		document.getElementById("helptext").src="img/theiceismelting-01.png";
	}
	else if (counter == 1) {
		document.getElementById("helptext").src="img/use-01.png";
	}
	else if (counter == 2) {
		removeElement("any_key");
		document.getElementById("helptext").src="img/three-01.png";
		setTimeout(function(){document.getElementById("helptext").src="img/two-01.png";}, 1000);
		setTimeout(function(){document.getElementById("helptext").src="img/one-01.png";}, 2000);
		setTimeout(function(){removeElement("helptext"); document.getElementById("hugo");conditie=1;hugo.setAttribute("style","-webkit-animation: jump 0.2 infinite steps(10);animation: jump .2s ease-in-out infinite steps(10);margin-left:"+width_center+"px;background-image: url('img/hugoturn-01.png')");setTimeout(function(){hugo.setAttribute("style","-webkit-animation: run 1.5s infinite steps(8);animation: run 1.5s ease-in-out infinite steps(8);margin-left:"+width_center+"px;background-image: url('img/hugorun-01.png')");hugo.setAttribute("pos","mijloc");},200);}, 3000);
	}
	else{
		const pozitie = hugo.getAttribute("pos");
	    switch (e.keyCode) {
	        case 37:
	            console.log('left');
	            if (pozitie=="mijloc") {

	            	hugo.setAttribute("style","-webkit-animation: jump .2 infinite steps(10);animation: jump .2s ease-in-out infinite steps(10);margin-left:"+stanga+"px;background-image: url('img/hugoturn-01.png')");
	            	setTimeout(function(){

		            	hugo.setAttribute("style","-webkit-animation: run 1.5s infinite steps(8);animation: run 1.5s ease-in-out infinite steps(8);margin-left:"+stanga+"px;background-image: url('img/hugorun-01.png')");
		            	hugo.setAttribute("pos","stanga");
		            	
	            	},200);
	            }
	            if (pozitie=="dreapta") {

	            	hugo.setAttribute("style","-webkit-animation: jump 0.2 infinite steps(10);animation: jump .2s ease-in-out infinite steps(10);margin-left:"+width_center+"px;background-image: url('img/hugoturn-01.png')");
	            	setTimeout(function(){

		            	hugo.setAttribute("style","-webkit-animation: run 1.5s infinite steps(8);animation: run 1.5s ease-in-out infinite steps(8);margin-left:"+width_center+"px;background-image: url('img/hugorun-01.png')");
		            	hugo.setAttribute("pos","mijloc");
		            	
	            	},200);
	            }
	            break;
	        // case 38:
	        //     console.log('up');
	        //     break;
	        case 39:
	            console.log('right');
	            if (pozitie=="stanga") {

	            	hugo.setAttribute("style","-webkit-animation: jump 0.2 infinite steps(10);animation: jump .2s ease-in-out infinite steps(10);margin-left:"+width_center+"px;background-image: url('img/hugoturn-01.png')");
	            	setTimeout(function(){

		            	hugo.setAttribute("style","-webkit-animation: run 1.5s infinite steps(8);animation: run 1.5s ease-in-out infinite steps(8);margin-left:"+width_center+"px;background-image: url('img/hugorun-01.png')");
		            	hugo.setAttribute("pos","mijloc");
		            	
	            	},200);
	            }
	            if (pozitie=="mijloc") {

	            	hugo.setAttribute("style","-webkit-animation: jump 0.2 infinite steps(10);animation: jump .2s ease-in-out infinite steps(10);margin-left:"+dreapta+"px;background-image: url('img/hugoturn-01.png')");
	            	setTimeout(function(){

		            	hugo.setAttribute("style","-webkit-animation: run 1.5s infinite steps(8);animation: run 1.5s ease-in-out infinite steps(8);margin-left:"+dreapta+"px;background-image: url('img/hugorun-01.png')");
		            	hugo.setAttribute("pos","dreapta");
		            	
	            	},200);
	            }            
	            break;
	        // case 40:
	        //     console.log('down');
	        //     break;
		}
	}
	
    console.log(counter);
    counter=counter+1;
};


const style = document.createElement('style');
style.innerHTML = '.oil {margin: 0px ' + (width_center+50) +'px;}';
document.head.appendChild(style);

var depinde = setInterval(function(){
	if (conditie==1) {
		var create = setInterval(function(){
			const rng = Math.floor(Math.random() * 3)+1;
			obstacles = obstacles + 1;
			
			const newOilDiv = document.createElement("div");
			const newOilImg = document.createElement("img");
			newOilImg.src = "img/oil-01.png";
			newOilImg.classList.add("oil");
			newOilDiv.classList.add("oil_barrel");
			// newOilDiv.setAttribute("id","oil_barrel");
			newOilDiv.appendChild(newOilImg);
			// console.log(newOilDiv);

				if (rng == 1) {
					////left_lane
					// console.log("stanga");
					newOilDiv.setAttribute("pos","stanga");
					document.getElementById("left-lane").appendChild(newOilDiv);

				}
				else if (rng == 2) {
					////mid_lane
					// console.log("width_center");
					newOilDiv.setAttribute("pos","mijloc");
					document.getElementById("middle-lane").appendChild(newOilDiv);

				}
				else if (rng == 3) {
					////right_lane
					// console.log("dreapta");
					newOilDiv.setAttribute("pos","dreapta");
					document.getElementById("right-lane").appendChild(newOilDiv);

				}


				document.querySelectorAll(".oil_barrel").forEach(function(e){
					e.classList.add("active");

					setTimeout(function(){
						e.classList.add("nu");
						// console.log(pozitie);
						if (hugo.getAttribute("pos")=="stanga") {
							if (rng==1 && ok==1) {
								if (arata==1) {alert("Oh no! Hugo got into the oil. Try to avoid the oil next time! You still had "+(max_obstacles-obstacles+2)+" obstacles left...");}
								ok=0;
								clearTimeout(create);
								clearTimeout(depinde);
								// clearTimeout(bug);
							}
						}
						else if (hugo.getAttribute("pos")=="mijloc") {
							if (rng==2 && ok==1) {
								if (arata==1) {alert("Oh no! Hugo got into the oil. Try to avoid the oil next time! You still had "+(max_obstacles-obstacles+2)+" obstacles left...");}
								ok=0;
								clearTimeout(create);
								clearTimeout(depinde);
								// clearTimeout(bug);
							}
						}
						else{
							if (rng==3 && ok==1) {
								if (arata==1) {alert("Oh no! Hugo got into the oil. Try to avoid the oil next time! You still had "+(max_obstacles-obstacles+2)+" obstacles left...");}
								ok=0;
								clearTimeout(create);
								clearTimeout(depinde);
								// clearTimeout(bug);
							}
						}
					},2000)
				})

				// var elim = document.getElementById("oil_barrel");
				// elim.classList.add("active");
				// setTimeout(function(){
				// 	console.log(rng);
				// 	console.log(hugo);
				// 	elim.parentNode.removeChild(elim);
				// },2000)



			if (obstacles > max_obstacles) {
				clearTimeout(create);
				// clearTimeout(bug);
				alert("Congtars! You guided Hugo to his home through "+ max_obstacles+" obstacles");
				hugo.setAttribute("style","margin-left:"+width_center+"px;background-image: url('img/hugojump-01.png')");
				arata=0;
			}
		}, 2000);
		clearTimeout(depinde);
		conditie=0;
	}
},1)

