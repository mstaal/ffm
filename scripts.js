function ismobile() { 
    if( navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/iOS/i)
    || navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ){
    return true;
    }
    else {
    return false;
    }
}

function mexport(name) {
    if(ismobile()){
    var mob = "location.href='fb-messenger-public://user-thread/";
        return mob.concat(name,"'");;
    }
    else {
    var desk = "location.href='https://www.messenger.com/t/";
        return desk.concat(name,"'");
    }
}
