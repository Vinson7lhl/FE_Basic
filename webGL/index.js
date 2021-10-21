$(function() {
    // 注意canvas只能用写在标签上的宽、高来定义大小；如果用脚本则会有兼容问题
    console.log('WebGL准备完毕')
    // 获取canvas-dom容器
    let can_container = $('#web_gl_container').get(0)
    // 获取绘制的上下文（画笔）
    let gl = can_container.getContext('2d')
    if (!gl) {
        console.error('抱歉，您的浏览器不支持canvas！请更新到最新浏览器')
        return
    }
    // 填充色
    gl.fillStyle = 'rgba(0, 0, 255, 1)'
    // 绘制矩形：前两个参数是举例画布左上角的位置值；后两者是矩形宽高
    gl.fillRect(10, 10, 200, 200)
    $('#clear_all').on('click', () => {
        gl.clearColor(1, 0, 0, 1)
        gl.clear(gl.COLOR_BUFFER_BIT)
    })
})