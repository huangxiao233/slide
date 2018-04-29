// setTimeout(function(){
//     $('.images>img:nth-child(1)').css({
//         transform:'translateX(-100%)'
//     })
//     $('.images>img:nth-child(2)').css({
//         transform:'translateX(-100%)'
//     })
//     // 跑完就去走到右边，监听transitionend事件
//     // $('.images>img:nth-child(1)').on('transitionend',function(e){
//     //     $(e.currentTarget).addClass('right').css({transform:'none'})
//     // })
//     // one就是表示执行过一次就失效了,不然总是会跑到右边去
//     $('.images>img:nth-child(1)').one('transitionend',function(e){
//         $(e.currentTarget).addClass('right').css({transform:'none'})
//     })
//     }
// ,3000)
// setTimeout(function(){
//     $('.images>img:nth-child(2)').css({
//         transform:'translateX(-200%)'
//     })
//     $('.images>img:nth-child(3)').css({
//         transform:'translateX(-200%)'
//     })
//     $('.images>img:nth-child(2)').one('transitionend',function(e){
//         $(e.currentTarget).addClass('right').css({transform:'none'})
//     })
// },6000)
// setTimeout(function(){
//     $('.images>img:nth-child(3)').css({
//         transform:'translateX(-300%)'
//     })
//     $('.images>img:nth-child(1)').css({
//         transform:'translateX(-100%)'
//     })
//     $('.images>img:nth-child(3)').one('transitionend',function(e){
//         $(e.currentTarget).addClass('right').css({transform:'none'})
//     })
// },9000)
// 图片一共三种状态
// 现状：current 走：leave 进入 enter 
let n 
init()
setInterval(() => {
    makeLeave(getImage(n))
         .one('transitionend', function (e) {
            makeEnter(e.currentTarget)
         })
    makeCurrent(getImage(n+1))
     n += 1
}, 3000)





function init(){
    n = 1
    $(`.images>img:nth-child(${n})`).addClass('current')
  
    .siblings().addClass('enter')
}

function x(n) {
    if (n > 3) {
        n = n % 3

        if (n === 0) {
            n = 3
        }
    }
    return n
}
// n=1,2,3

function getImage(n){
    return $(`.images>img:nth-child(${x(n)})`)
}

function makeCurrent($node){
    return $node.removeClass('enter').addClass('current')
    // 如果不加return将返回一个undefined!
}
function makeEnter($node){
    return $node.removeClass('current').removeClass('leave')
}
function makeLeave($node){
    return $node.removeClass('enter').addClass('leave')
}
// setTimeout(() => {
//     $('.images>img:nth-child(1)').removeClass('current').addClass('leave')
//         .one('transitionend', function (e) {
//             $(e.currentTarget).removeClass('leave').addClass
//                 ('enter')
//         }
//         )
//     $('.images>img:nth-child(2)').removeClass('enter').addClass('current')
// }, 3000)
// setTimeout(() => {
//     $('.images>img:nth-child(2)').removeClass('current').addClass('leave')
//         .one('transitionend', function (e) {
//             $(e.currentTarget).removeClass('leave').addClass
//                 ('enter')
//         }
//         )
//     $('.images>img:nth-child(3)').removeClass('enter').addClass('current')
// }, 6000)
// setTimeout(() => {
//     $('.images>img:nth-child(3)').removeClass('current').addClass('leave')
//         .one('transitionend', function (e) {
//             $(e.currentTarget).removeClass('leave').addClass
//                 ('enter')
//         }
//         )
//     $('.images>img:nth-child(1)').removeClass('enter').addClass('current')
// }, 9000)