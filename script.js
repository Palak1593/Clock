//let date=new Date(); //gives current date
//let hours=new Date().getHours(); //gives current hour  of day
//let minutes=new Date().getMinutes();
//let seconds=new Date().getSeconds();

//console.log(hours,minutes,seconds);

//let time=`${hours}:${minutes}:${seconds}`
// console.log(time);

 let element=document.getElementById('time');
// console.log(element);

 element.innerHTML=time;
 
// In the above code though we have printed current time on web page but
//we are unable to update the current time to do this use synchronous funtions

setInterval(() =>{
     //the code written here will be rerun after a particular time
   
    //  let hours=new Date().getHours(); //gives current hour  of day
    //  //phle Date() constructor call ho rha the gethours() call ho rha
    //  //to optimize this write DataTransfer.getHours()
    //  let minutes=new Date().getMinutes();
    //  let seconds=new Date().getSeconds();

    //optimized version is below

    let date=new Date(); //gives current date
    // let hours= date.getHours(); //gives current hour  of day
    // let minutes=date.getMinutes();
    // let seconds=date.getSeconds();

     //let time=`${hours}:${minutes}:${seconds}` optimized version is below

     let time=`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
     element.innerHTML=time;

},1000); //here 1000 means 1000microseconds & 1sec=1000microsec