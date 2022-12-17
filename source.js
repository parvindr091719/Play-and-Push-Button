var playAndPushBtn = document.getElementById('playAndPushBtn');
var count = 0;

const playAndPush = () =>{
    if(count == 0){
        count = 1;
        playAndPushBtn.innerHTML = ">";
    }else{
        count = 0;
        playAndPushBtn.innerHTML = "||";
    }
}