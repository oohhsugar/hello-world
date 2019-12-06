let mas = new Array(15);
for (let i = 0; i < 15; i++) {
    mas[i] = new Array(15);
}

for(let i = 0; i < 15; i++){
	for(let j = 0; j < 15; j++){
		mas[i][j] = 0;
	}
}
let step=3;
let move=0;

function  Tablica() {

  let NotMyTable =document.getElementById("RisTable");
  var size = document.getElementById("input_size").value;
  let nx= size;
  let ny= size;
  NotMyTable.innerHTML="";
  for (let i=0;i<nx;i++){
  	let NewLine =  document.createElement("tr");
  	for (let j = 0; j <ny; j++) {
  		let NewColumn =  document.createElement("td");
  		NewColumn.iCor= i;
  		NewColumn.jCor= j;
  		NewColumn.setAttribute("id","cell_" + (i+1) + "_" + (j+1));
  		NewColumn.cellStatus = "nothing";
     // document.getElementById("RisTable").addEventListener('click',check);
  		NewColumn.addEventListener("mousedown", check);
  		NewLine.appendChild(NewColumn);
     }
     NotMyTable.appendChild(NewLine);
   }  
}

function   check(){
    if (move%2==0){
      if(this.innerHTML==''){
    event.target.innerHTML= 'X';
    //console.log(" "+ this.iCor+ " " + this.jCor +" "+ this.id);
    mas[this.iCor][this.jCor] = 1;}
    if(proverka(this.iCor, this.jCor, 1)){
            alert("Крестики победили!");
        }
  }else {
    if(this.innerHTML==''){
    event.target.innerHTML= '0';
    mas[this.iCor][this.jCor] = 2;}
    if(proverka(this.iCor, this.jCor, 2)){
            alert("Нолики победили!");
        }
  }
    ++move;
  }


function pr(i, j, type, i_p, j_p){
  var size = document.getElementById("input_size").value;
    let nx= size;
    let ny= size;
    let new_i = i + i_p;
    let new_j = j + j_p;
    let in_field = (new_i >= 0)&&(new_j >= 0)&&(new_i < nx)&&(new_j < ny);
        if (in_field && type === mas[new_i][new_j]) {
            return 1 + pr(new_i, new_j, type, i_p, j_p);
        } else {
            return 0;
        }
}

function proverka(y, x, type1){
   let horizont = pr(y, x, type1, -1, 0) + pr(y, x, type1, 1, 0) + 1;
    let vertical = pr(y, x, type1, 0, -1) + pr(y, x, type1, 0, 1) + 1;
    let hightDiagonal = pr(y, x, type1, 1, -1) + pr(y, x, type1, -1, 1) + 1;
    let lowDiagonal = pr(y, x, type1, -1, -1) + pr(y, x, type1, 1, 1) + 1;
    if ((horizont >= step) || (vertical >= step) ||(hightDiagonal >= step) ||(lowDiagonal >= step)){
        return true;
    }

}
