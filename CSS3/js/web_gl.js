$(function() {
    console.log('WebGL准备完毕')
    // 获取canvas-dom容器
    let can_container = $('#web_gl_container').get(0)
    // 获取绘制的上下文（画笔）
    let ctx = can_container.getContext('2d')
    if (!ctx) {
        console.error('抱歉，您的浏览器不支持canvas！请更新到最新浏览器')
    }
    // 填充色
    ctx.fillStyle = 'rgba(0, 0, 255, 1)'
    // 形状
    ctx.fillRect(10, 10, 200, 200)
})