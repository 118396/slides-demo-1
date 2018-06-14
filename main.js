function getImage(n){
    return $(`.images>img:nth-child(${x(n)})`)
}

function x(n){
    if(n>3){
        n = n%3
        if (n===0){
            n=3
        }
    }
    return n
}

function 初始化(){
    n = 1
    $(`.images > img:nth-child(${n})`).addClass('current')
    .siblings().addClass('enter')
}

function makeCurrent($node){
    return $node.removeClass('enter leave').addClass('current')
}
function makeLeave($node){
    return  $node.removeClass('enter current').addClass('leave')
    
}
function makeEnter($node){
    return $node.removeClass('leave current').addClass('enter')
}
let n
初始化()
let timer = setInterval(()=>{
  makeLeave(getImage(n))
    .one('transitionend', (e)=>{
      makeEnter($(e.currentTarget))//let 当前元素 = e.currentTarget
                                    //makeEnter($(当前元素))
    })
  makeCurrent(getImage(n+1))
  n += 1
},2000)
//声明一个n，初始化它，每三秒钟让第n个emg走（leave），leave结束以后，便进入enter区。
//让n+1个变成当前元素，现在n变成2，再过三秒让第2个元素走，进去enter区，同时n+1让第3个元
//素变成当前元素，现在n变成3，再过三秒让第3个元素走，进去enter区，让第一个元素进来。
document.addEventListener('visibilitychange',function(e){
    if(document.hidden){
        window.clearInterval(timer)
    }else{
        timer = setInterval(()=>{
            makeLeave(getImage(n))
              .one('transitionend', (e)=>{
                makeEnter($(e.currentTarget))//let 当前元素 = e.currentTarget
                                              //makeEnter($(当前元素))
              })
            makeCurrent(getImage(n+1))
            n += 1
          },2000)
    }
})

