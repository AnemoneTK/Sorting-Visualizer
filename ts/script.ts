let data: number[] = [];

function generateData(){
    data = Array.from({length : 20}, ()=>{
        Math.floor(Math.random()*100)
    })
}