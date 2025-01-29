fetch("https://umami.xiowo.us.kg/") // 确保URL是正确的
.then(t => t.json())
.then(t => {
    let e = {
        today_uv: "今日人数",
        today_pv: "今日访问",
        yesterday_uv: "昨日人数",
        yesterday_pv: "昨日访问",
        last_month_pv: "本月访问",
        last_year_pv: "本年访问"
    };
    // 获取class为data-container的容器
    let n = document.querySelector(".data-container");
    if (n) {
        // 清空容器内容（可选）
        n.innerHTML = "";
        // 遍历JSON数据并添加到容器中
        for (let a in t) {
            if (t.hasOwnProperty(a) && e[a]) {
                n.innerHTML += `<div><span>${e[a]}</span><span id="${a}">${t[a]}</span></div>`;
            }
        }
        // 调用动画效果函数（如果有）
        initCountUp(t, e);
    } else {
        console.error("未找到class为data-container的容器");
    }
})
.catch(t => console.error("Error:", t));