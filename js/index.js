/* 随机友链 */
fetch("https://fcircle.itciraos.cn/friend")
    .then(response => response.json())
    .then(data => {
        const friendList = document.getElementById('friend-list');
        for (let i = 0; i < 3; i++) {
            const randomIndex = Math.floor(Math.random() * data.length);
            const friend = data[randomIndex];
            const li = document.createElement('li');
            li.innerHTML = `<a target="_blank" rel="noopener noreferrer" href="${friend.link}">${friend.name}</a>`;
            friendList.appendChild(li);
        }
    });

/** */
