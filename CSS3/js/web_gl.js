$(function() {
    console.log('WebGL准备完毕')
    let can_container = $('#web_gl_container').get(0)
    let ctx = can_container.getContext('2d')
    ctx.fillStyle = 'rgba(0, 0, 255, 1)'
    ctx.fillRect(10, 10, 200, 200)
})