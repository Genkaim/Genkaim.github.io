// noinspection JSIgnoredPromiseFromCall

// 这个语句的作用就是取代了BF原生的悬浮窗，不想要的话可以删掉（不确保没BUG）
document.addEventListener(
    'DOMContentLoaded',
    () => btf.snackbarShow = (text, time = 3500) => kms.pushInfo({text, time}, null)
)

const kms = {

    /** 是否为移动端 */
    isMobile: 'ontouchstart' in document.documentElement,
    
    /** 缓存 */
    _cache: {
        winCode: 0
    },
    /**
     * 在右上角弹出悬浮窗
     * @param {{text: string, time:number?, left:boolean?, bottom:boolean?}|string} optional
     *      配置项（text: 要显示的内容，time: 持续时间，left: 是否靠左显示，bottom: 是否靠下显示
     * @param button {?{icon:string?, text:string, desc:string?, onclick:function?}}
     *      传入null表示没有按钮（icon: 图标，text: 按钮文本，desc: 描述文本， onclick: 点击按钮时触发的回调）
     * @return {{close:function, onclose:function}} 一个对象，其中有两个函数对象，调用`close`可手动关闭悬浮窗，添加`onclose`可监听悬浮窗的关闭
     */
    pushInfo: (optional, button = null) => {
        let {text, time, left, bottom} = optional
        if (typeof optional === 'string') text = optional
        if (!time) time = 3500
        const externalApi = {}  // 对外部暴露的接口
        const id = kms._cache.winCode++
        const cardID = `float-win-${id}`
        const actionID = `float-action-${id}`
        const exitID = `float-exit-${id}`
        /**
         * 关闭指定悬浮窗
         * @param id {string} 悬浮窗ID
         */
        const closeWin = id => {
            const div = document.getElementById(id)
            if (div) {
                const {classList, style} = div
                if (classList.contains('close')) return
                if (externalApi.onclose) externalApi.onclose()
                style.maxHeight = `${div.clientHeight + 10}px`
                classList.add('close')
                setTimeout(() => div.remove(), 1000)
                setTimeout(() => {
                    style.maxHeight = style.marginBottom = '0'
                    classList.remove('show')
                }, 25)
            }
        }
        /** 关闭多余的悬浮窗 */
        const closeRedundantWin = className => {
            // noinspection SpellCheckingInspection
            const list = document.querySelector(`.float-box${className}`).children
            const count = list.length - 3
            for (let k = 0, i = 0; k < count && i !== list.length; ++i) {
                closeWin(list[i].id)
                ++k
            }
        }
        /** 构建html代码 */
        const buildHTML = id => {
            const buttonDesc = (button && button.desc) ? `<div class="descr"><p ${kms.isMobile ? 'class="open"' : ''}>${button.desc}</p></div>` : ''
            // noinspection HtmlUnknownAttribute
            return `<div class="float-win ${left ? 'left' : 'right'} ${bottom ? 'bottom' : 'top'} ${button ? 'click' : ''
            }" id="${cardID}" move="0" style="z-index:${id};"><button class="exit" id="${exitID}"><i class="iconfont icon-close"></i></button><div class="text">${text}</div>${button ?
                '<div class="select"><button class="action" id="' + actionID + '">' + (button.icon ? '<i class="' + button.icon + '">' : '') +
                '</i><p class="text">' + button.text + `</p></button>${buttonDesc}` : ''}</div></div>`
        }
        const className = `${left ? '.left' : '.right'}${bottom ? '.bottom' : '.top'}`
        // noinspection SpellCheckingInspection
        document.querySelector(`.float-box${className}`).insertAdjacentHTML('beforeend', buildHTML(id))
        const cardDiv = document.getElementById(cardID)
        const actionButton = document.getElementById(actionID)
        const exitButton = document.getElementById(exitID)
        if (actionButton) {
            actionButton.onclick = () => {
                if (button.onclick) button.onclick()
                closeWin(cardID)
            }
        }
        exitButton.onclick = () => closeWin(cardID)
        cardDiv.onmouseover = () => cardDiv.setAttribute('over', '1')
        cardDiv.onmouseleave = () => cardDiv.removeAttribute('over')
        closeRedundantWin(className)
        setTimeout(() => cardDiv.classList.add('show'), 25)
        let age = 0
        const task = setInterval(() => {
            const win = document.getElementById(cardID)
            if (win) {
                if (win.hasAttribute('over')) return age = 0
                age += 100
                if (age < time) return
            }
            clearInterval(task)
            closeWin(cardID)
        }, 100)
        externalApi.close = () => closeWin(cardID)
        return externalApi
    }
}