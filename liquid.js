document.addEventListener('DOMContentLoaded', function() {
    // 动态创建样式表
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        .liquid-container {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 60px;
            height: 120px;
            border-radius: 10px;
            background-color: #333;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            overflow: hidden;
            z-index: 1000;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .liquid-title {
            width: 100%;
            height: 25%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 12px;
            text-align: center;
            padding-top: 5px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            padding-left: 5px;
            padding-right: 5px;
        }

        .liquid-level {
            width: 90%;
            height: 75%;
            background-color: #4a89dc;
            border-radius: 5px 5px 0 0;
            transition: height 0.3s ease;
        }
    `;
    document.head.appendChild(styleSheet);

    // 创建圆柱形容器元素
    const liquidContainer = document.createElement('div');
    liquidContainer.className = 'liquid-container';
    liquidContainer.id = 'liquidContainer';

    const liquidTitle = document.createElement('div');
    liquidTitle.className = 'liquid-title';
    liquidTitle.id = 'liquidTitle';

    const liquidLevel = document.createElement('div');
    liquidLevel.className = 'liquid-level';
    liquidLevel.id = 'liquidLevel';

    liquidContainer.appendChild(liquidTitle);
    liquidContainer.appendChild(liquidLevel);
    document.body.appendChild(liquidContainer);

    // 获取当前文章标题
    const titleElement = document.querySelector('.title');
    if (titleElement) {
        liquidTitle.textContent = titleElement.textContent;
    }

    // 监听滚动事件
    volantis.scroll.push(() => {
        const totalScrollHeight = document.body.scrollHeight - window.innerHeight;
        const currentScrollPosition = volantis.scroll.getScrollTop();
        const scrollPercentage = (currentScrollPosition / totalScrollHeight) * 100;

        // 根据滚动百分比调整液体高度
        const liquidHeight = 75 - (scrollPercentage / 100) * 75;
        liquidLevel.style.height = liquidHeight + '%';

        // 如果滚动到页面底部，液体高度为 0
        if (scrollPercentage >= 100) {
            liquidLevel.style.height = '0%';
        }
    });
});