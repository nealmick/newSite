d = document.getElementById("table")
var mouseDown = false;
var lastClicked;
var lastClickedX;
var lastClickedY;
var isOnDiv = false;
var g = [];
var ncx = 28
var ncy = 28
var number = "0";
let res = [1,1,1,1,1,1,1,1,1,1]
var tick = 0
var numberPlayBackDelay = 40
g = makeGrid(g)
$(d).mouseenter(function(){isOnDiv=true;});
$(d).mouseleave(function(){isOnDiv=false;});
numberHistory = []


 const labels = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
  ];
const data = {
labels: labels,
datasets: [{
    label: 'output: ',
    data: res,
    backgroundColor: [
    'rgba(201, 203, 207, 0.2)',
    'rgba(201, 203, 207, 0.2)',
    'rgba(201, 203, 207, 0.2)',
    'rgba(201, 203, 207, 0.2)',
    'rgba(201, 203, 207, 0.2)',
    'rgba(201, 203, 207, 0.2)',
    'rgba(201, 203, 207, 0.2)',
    'rgba(201, 203, 207, 0.2)',
    'rgba(201, 203, 207, 0.2)',
    'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
    '#17a2b8',
    '#17a2b8',
    '#17a2b8',
    '#17a2b8',
    '#17a2b8',
    '#17a2b8',
    '#17a2b8',
    '#17a2b8',
    '#17a2b8',
    '#17a2b8'
    ],
    borderWidth: 1
}]
};
var config = {
    type: 'bar',
    data: data,
    options: {
        plugins: {
            legend: {
              display: false
            }
          },
        scales: {
            x: {
              title: {
                display: true,
                text: 'Number'
              }
            },
            y: {
              title: {
                display: true,
                text: 'Value'
              },
              min: 10,
              max: -10,
              ticks: {
                suggestedMin: -10,    // minimum will be 0, unless there is a lower value.
                // OR //
                //beginAtZero: true   // minimum value will be 0.
                steps: 20,
                stepValue: 1,
                }

            }
        }
    },
  };

//const myChart = new Chart(document.getElementById('myChart'),config);


document.body.onmousedown = function() { 
    mouseDown = true;
    if (isOnDiv){
        if (lastClicked){
            lastClicked.className='clicked';
            updateGrid(lastClickedX+6,lastClickedY+6)

        } 

    }
}
document.body.onmouseup = function() {
    mouseDown = false;
    //getNumber(number,res,myChart)

}

var grid = clickableGrid(ncx-12,ncy-12,function(el,row,col,i){
    //console.log("x:",col);
    //console.log("y:",row);


    if (mouseDown == true){
        el.className='clicked';
        updateGrid(col+6,row+6)
        //printGrid()
    }
    //if (lastClicked) lastClicked.className='';
    lastClicked = el;
    lastClickedX = col;
    lastClickedY = row;
});



d.appendChild(grid);



     
function clickableGrid( rows, cols, callback ){
    var i=0;
    var grid = document.createElement('table');
    grid.className = 'grid';
    for (var r=0;r<rows;++r){
        var tr = grid.appendChild(document.createElement('tr'));
        for (var c=0;c<cols;++c){
            var cell = tr.appendChild(document.createElement('td'));
            //cell.innerHTML = ++i;

        }
    }
    return grid;
}


function updateGrid(foo,oof){
    numberHistory.push([oof-6,foo-6])

    a = '2'
    b = '1'
    c = '1'
    g[oof][foo]=a


    if(g[oof+1][foo]!=2&&g[oof+1][foo]!=3){
        g[oof+1][foo]=b
    }
    if(g[oof-1][foo]!=2&&g[oof-1][foo]!=3){
        g[oof-1][foo]=b
    }
    if(g[oof][foo+1]!=2&&g[oof][foo+1]!=3){
        g[oof][foo+1]=b
    }
    if(g[oof][foo-1]!=2&&g[oof][foo-1]!=3){
        g[oof][foo-1]=b
    }
    /*

    if(g[oof-1][foo+1]!=2&&g[oof-1][foo+1]!=3){
        g[oof-1][foo+1]=c
    }
    if(g[oof+1][foo+1]!=2&&g[oof+1][foo+1]!=3){
        g[oof+1][foo+1]=c
    }
    if(g[oof+1][foo-1]!=2&&g[oof+1][foo-1]!=3){
        g[oof+1][foo-1]=c
    }
    if(g[oof-1][foo-1]!=2&&g[oof-1][foo-1]!=2){
        g[oof-1][foo-1]=c
    }
    
    
    g[oof+1][foo+1]=b
    g[oof][foo+1]=b
    g[oof-1][foo+1]=b
    
    g[oof+1][foo]=b


    g[oof-1][foo+0]=b

    g[oof+1][foo-1]=b
    g[oof][foo-1]=b
    g[oof-1][foo-1]=b
    */
    
    return g
}


function printGrid(){
    header = '-------------------------'

    console.log(header)

    for(foo=0;foo<ncx;foo+=1){
        let line = ''
        for(oof=0;oof<ncy;oof+=1){
            line+=String(g[foo][oof])
        }
        
        console.log(foo+1,line)
    }
}

function makeGrid(grid){
    grid = []
    for(foo=0;foo<ncx;foo+=1){
        grid.push([])
        for(oof=0;oof<ncy;oof+=1){
            grid[foo].push([])
            grid[foo][oof]='0'
        }
    }
    return grid
}

function restart(){
    location.reload();
  
  }

function prepareSendnc(g){
    let s = "";
    printGrid()
    for(foo=0;foo<x;foo+=1){
        for(oof=0;oof<y;oof+=1){
            s+=g[foo][oof]+'-';
        }
    }

    return s

}


function getNumber(number,res,myChart){
    state=2
    $.ajax(
        {
            type:"GET",
            url: "/nc/nc/",
            
            dataType: 'json',
            data:{
            asdf: prepareSendnc(g),
            },
            success: function(asdf) {
            number = asdf.asdf
            res = asdf.fdsa
            //document.getElementById("num").innerText = 'Number is: '+number
            let aStr = ''
            maxV = -10
            let maxK = 0
            for(i = 0; i<res.length;i+=1){
                
                res[i] = (res[i] + 3)*2
                if(res[i]<0 && res[i]>-.5){
                    res[i]-=.5
                }
                if(res[i]>0 && res[i]<.5){
                    res[i]+=.5
                }
                if(res[i]>maxV){
                    maxV = res[i]
                    maxK = i
                }
                myChart.data.datasets[0].backgroundColor[i] = 'rgba(201, 203, 207, 0.2)'
                myChart.data.datasets[0].borderColor[i] = '#17a2b8'
                myChart.data.datasets[0].data[i]= res[i];
                myChart.update();

            }
            myChart.data.datasets[0].backgroundColor[maxK] = '#17a2b8'
            myChart.data.datasets[0].borderColor[maxK] = '#2D2D2D'
            
            myChart.update();


        }
        })

        return number

}













function printNumberHistory(){
    console.log(numberHistory)
    myStr = ''
    for(n = 0; n < numberHistory.length;n+=1){
        myStr+='['+numberHistory[n]+'],'
    }
    console.log('[',myStr,']')


}


numbers= []



num1 = [ [4,8],[5,8],[6,8],[7,8],[8,8],[9,8],[10,8],[11,8],[12,8],[13,8], ]
num2 = [ [2,4],[2,5],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[1,11],[2,11],[2,12],[3,12],[4,11],[5,11],[6,11],[7,10],[8,9],[9,8],[10,7],[11,7],[11,6],[12,6],[12,5],[13,5],[13,6],[13,7],[13,8],[13,9],[13,10],[12,10],[12,11],[12,13], ]
num3=[[1,6],[1,7],[1,8],[1,9],[1,10],[1,11],[2,11],[3,11],[4,11],[5,10],[6,9],[6,8],[6,7],[7,7],[7,8],[7,9],[7,10],[8,10],[9,11],[10,11],[11,11],[12,11],[13,10],[14,10],[14,9],[14,8],[14,7],[14,6], ]
num4=[[4,5],[5,5],[6,5],[7,5],[8,5],[9,5],[10,5],[11,5],[11,6],[11,7],[11,8],[11,9],[11,10],[11,11],[11,12],[4,10],[5,10],[6,10],[7,10],[8,10],[9,10],[10,10],[11,10],[12,10],[13,10],[14,10],[15,10], ]
num5=[ [2,11],[2,10],[2,9],[2,8],[2,7],[2,6],[2,6],[2,5],[2,4],[3,4],[3,3],[4,3],[5,3],[6,3],[7,3],[8,3],[9,4],[9,5],[9,6],[8,6],[8,7],[8,8],[8,9],[8,10],[8,11],[9,12],[10,12],[11,12],[12,11],[13,11],[14,10],[15,9],[15,8],[15,7],[15,6],[15,5],[15,4],[14,3], ]
num6 = [ [2,8],[2,7],[2,6],[2,5],[2,4],[3,4],[3,3],[4,3],[5,3],[6,3],[7,3],[8,3],[9,3],[10,3],[11,4],[12,4],[13,5],[13,6],[14,6],[14,7],[14,8],[14,9],[14,10],[14,11],[12,11],[11,11],[10,11],[10,10],[9,9],[9,8],[9,7],[9,6],[10,5],[10,4],[11,4],[11,3],[12,2],[13,2],[14,1], ]
num7 = [ [2,4],[2,5],[2,6],[2,7],[2,8],[2,9],[2,10],[2,11],[2,12],[3,12],[4,12],[5,12],[6,12],[7,11],[8,11],[9,11],[10,11],[11,10],[12,10],[14,10],[13,10], ]
num8 = [ [7,7],[7,8],[7,9],[7,10],[6,10],[6,11],[5,11],[4,11],[3,11],[2,11],[2,10],[1,10],[1,9],[1,8],[1,7],[2,7],[2,6],[3,6],[3,5],[4,5],[5,5],[5,6],[6,6],[6,7],[7,7],[7,8],[7,9],[7,10],[8,10],[9,10],[10,10],[11,10],[12,10],[12,9],[13,9],[13,8],[14,7],[14,6],[13,6],[12,5],[11,5],[10,5],[9,5],[9,6],[8,6],[8,7],[7,7],[7,8],[7,9], ]
num9 = [ [2,8],[2,7],[2,6],[2,5],[2,4],[3,4],[4,4],[4,3],[5,3],[6,3],[6,4],[6,3],[7,4],[8,4],[8,5],[9,5],[9,6],[9,7],[9,8],[9,9],[9,10],[8,10],[8,11],[8,12],[7,12],[6,12],[5,13],[5,12],[4,12],[3,12],[3,11],[2,11],[2,10],[2,9],[2,7],[6,13],[7,13],[7,12],[8,12],[9,12],[10,12],[11,12],[12,12],[13,12],[14,12],[15,11], ]
num0 = [ [2,8],[2,7],[2,6],[3,6],[3,5],[4,5],[5,5],[5,4],[6,4],[7,4],[8,4],[9,4],[10,4],[11,4],[12,4],[12,5],[13,5],[13,6],[13,7],[13,8],[13,9],[13,10],[13,11],[12,11],[11,12],[10,12],[9,12],[8,12],[7,12],[6,12],[6,11],[5,11],[4,11],[3,11],[3,10],[3,11],[3,10],[2,10],[2,9],[1,9],[1,8],[1,7], ]
numbers.push(num0)
numbers.push(num1)
numbers.push(num2)
numbers.push(num3)
numbers.push(num4)
numbers.push(num5)
numbers.push(num6)
numbers.push(num7)
numbers.push(num8)
numbers.push(num9)



displayNumbers(numbers)


async function displayNumbers(numbers){
    while(true){
    for(numCounter = 0; numCounter<numbers.length;numCounter+=1){
        await sleep(300);

        for(numCounter2 = 0; numCounter2<numbers[numCounter].length;numCounter2+=1){
            await sleep(numberPlayBackDelay);

            grid.childNodes[numbers[numCounter][numCounter2][0]].childNodes[numbers[numCounter][numCounter2][1]].className='clicked'
        }
        await sleep(300);
        for(numCounter2 = numbers[numCounter].length-1; numCounter2>=0;numCounter2-=1){
            await sleep(numberPlayBackDelay);
            grid.childNodes[numbers[numCounter][numCounter2][0]].childNodes[numbers[numCounter][numCounter2][1]].classList.remove("clicked");

        }

    }
}
}



