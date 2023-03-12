
/* 随机友链 */
fetch('https://fcircle.itciraos.cn/friend')
    .then(response => response.json())
    .then(data => {
        const friendlist = document.getElementById('friend-list');
        for (let i = 0; i < 3; i++) {
            const randomIndex = Math.floor(Math.random() * data.length);
            const friend = data[randomIndex];
            const li = document.createElement('li');
            li.innerHTML = `<a target="_blank" rel="noopener noreferrer" href="${friend.link}">${friend.name}</a>`;
            friendlist.appendChild(li);
        };
    });

/** 随机友链文章 */
fetch('https://fcircle.itciraos.cn/randompost?num=20')
    .then(response => response.json())
    .then(data => {
        const postlist = document.getElementById('randompost-list');
        for (let j = 0; j < 3; j++) {
            const randomPost = Math.floor(Math.random() * data.length);
            const post = data[randomPost];
            const li = document.createElement('li');
            li.innerHTML = `<a target="_blank" rel="noopener noreferrer" href="${post.link}">${post.title}</a>`;
            postlist.appendChild(li);
        };
    });

window.onload = function() {
    message.info("欢迎欢迎！热烈欢迎！！！");
}

/** */
console.log("   ____ ___ ____      _    ___  ____\n",
    " / ___|_ _|  _ \\    / \\  / _ \\/ ___|\n",
    "| |    | || |_) |  / _ \\| | | \\___ \\ \n",
    "| |___ | ||  _ <  / ___ \\ |_| |___) |\n",
    " \\____|___|_| \\_\\/_/   \\_\\___/|____/\n");

/* * 公祭日自动变灰 */
if (PublicSacrificeDay()) {
    document.getElementsByTagName("html")[0].setAttribute("style", "filter:gray !important;filter:grayscale(100%);-webkit-filter:grayscale(100%);-moz-filter:grayscale(100%);-ms-filter:grayscale(100%);-o-filter:grayscale(100%);");
}

function PublicSacrificeDay() {
    var PSFarr = new Array("0403", "0404", "0405", "0406", "0414", "0512", "0707", "0807", "0814", "0909", "0918", "0930", "1025", "1130", "1213");
    //! 2020年04月04日，新冠肺炎哀悼日、清明节
    //! 2010年04月14日，青海玉树地震
    //! 2008年05月12日，四川汶川地震
    //! 1937年07月07日，七七事变，又称卢沟桥事变
    //! 2010年08月07日，甘肃舟曲特大泥石流
    //!       08月14日，世界慰安妇纪念日
    //! 1976年09月90日，毛主席逝世
    //! 1931年09月18日，九一八事变
    //!       09月30日，烈士纪念日
    //! 1950年10月25日，抗美援朝纪念日
    //! 2022年11月30日，江泽民逝世
    //! 1937年12月13日，南京大屠杀
    var currentdate = new Date();
    var str = "";
    var mm = currentdate.getMonth() + 1;
    if (currentdate.getMonth() > 9) {
        str += mm;
    } else {
        str += "0" + mm;
    }
    if (currentdate.getDate() > 9) {
        str += currentdate.getDate();
    } else {
        str += "0" + currentdate.getDate();
    }
    if (PSFarr.indexOf(str) > -1) {
        return 1;
    } else {
        return 0;
    }
}

/* 禁用 cltr+f5、ctrl+s */
document.onkeydown = document.onkeyup = document.onkeypress = function (event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if ((e.ctrlKey == true && (e.keyCode == 116)) || (e.ctrlKey == true && e.shiftKey == true && e.keyCode == 82) || (e.shiftKey == true && e.keyCode == 116) || (e.ctrlKey == true && e.shiftKey == true && e.keyCode == 116)) {
        e.keyCode = 0;
        e.returnValue = false;
        // VolantisApp.message('', '');
        // let i = 0;
        // i++;
        // console.log(i);
        message.info('哒咩哒咩！请不要强制刷新页面！因为本网站使用clientworker，所以强制刷新对您的访问体验是非常非常不好的！！所以请按下f12，或者鼠标右键点击检查，在"应用程序"-"存储"中，选择"清除网站数据"来清理缓存哦！谢谢！')
    }
};
/* $(document).keydown(function (e) {
if (e.ctrlKey == true && e.keyCode == 83) {
console.log('ctrl+s');
return false;
}
}); */
