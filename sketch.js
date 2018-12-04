let p;
let scale = 20;
let place = 0;

function setup(){

    let buttons = document.getElementsByTagName('button');
    for(let i = 0; i<buttons.length; i++){
        buttons[i].style.visibility = 'hidden';
    }

    createCanvas(370, 100);
    
}

function draw(){
    if (frameCount % 200 == 1){
        let d = new Date();
        background(255);
    
        drawGrid('000', floor(d.getHours()/10));
        drawGrid('000000000', d.getHours()%10);
        drawGrid('000000', floor(d.getMinutes()/10));
        drawGrid('000000000', d.getMinutes()%10);

    }

}


function drawGrid(grid, amountToFill){
    if(grid.length<amountToFill){
        console.log(grid + ' is not big enough to have ' + amountToFill + ' cells filled');
        return;
    }
    grid = clearGrid(grid);
    grid = fillGrid(amountToFill, grid);

    let wide = grid.length/3;
    
    for(let i = 0; i<wide; i++){
        for(let j = 0; j<3; j++){
            grid[i+j*wide] == '1' ? fill(255, 0, 0) : fill(0);
            rect(place*100+i*scale, j*scale, scale, scale);
        }
    }
    place++;
    place%=4;

}

function clearGrid(s){
    let len = s.length;
    s = '0';
    for (let i = 1; i<len; i++){
        s+='0';
    }
    return s;
}

function replace(s, r){
    return s.substr(0,r)+'1'+s.substr(r+1);
}
   

function fillGrid(n, s){
    let filled = 1;
    let r = Math.floor(Math.random()*s.length);
    
    s = replace(s,r);
    while(filled<n){
        while(s[r]=='1'){
            r=Math.floor(Math.random()*s.length);
            
        }
        s = replace(s,r);
        filled++;
    }
    return s;
}