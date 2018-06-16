let $buttons = $('#buttonWrapper>button')
let $slides = $('#slides')
let $images = $slides.children('img')
let $firstCopy = $images.eq(0).clone(true)//给true 就是子元素也克隆，如果不给true只克隆自己，不克隆里面的东西
let $lastCopy = $images.eq($images.length-1).clone(true)

$slides.append($firstCopy)//append 追加（插在后面）
$slides.prepend($lastCopy)// prepend 插在前面

$slides.css({transform:'translateX(-400px)'})

let current = 0

$buttons.eq(0).on('click',function(){
   if(current == 2){
    console.log('说明你是从最后一张移到第一张')
    $slides.css({transform:'translateX(-1600px)'})
        .one('transitionend',function(){
            $slides.hide()
            .offset()//如果你想知道一个东西的位置，就必须把它当前的css算一遍.offset一定会算的，算的过程中就会把浏览器自动合并给断掉。
            $slides.css({transform:'translateX(-400px)'})
            .show()
        })

   }else{
        $slides.css({transform:'translateX(-400px)'})
   }
   current = 0
})
$buttons.eq(1).on('click',function(){
    console.log(current)
    $slides.css({transform:'translateX(-800px)'})
    current = 1 
})
$buttons.eq(2).on('click',function(){
    if(current == 0){
        console.log('说明你是从第一张移到最后一张')
        $slides.css({transform:'translateX(0px)'})
        .one('transitionend',function(){
            $slides.hide()
             .offset()//如果你想知道一个东西的位置，就必须把它当前的css算一遍.offset一定会算的，算的过程中就会把浏览器自动合并给断掉。
            $slides.css({transform:'translateX(-1200px)'})
            .show()
        })
       } else{
             $slides.css({transform:'translateX(-1200px)'})
             current = 2
       }
})