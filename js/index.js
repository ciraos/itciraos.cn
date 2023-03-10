/* 随机友链 */
fetch('https://fcircle.itciraos.cn/randomfriend?num=3';)
    .then(response => response.json())
    .then(data => {
    const friendList = document.getElementById('friend-list');
    data.friends.forEach(friend => {
        const li = document.createElement('li');
        li.innerHTML = `<a target="_blank" rel="noopener noreferrer" href=＂${friend.name}＂>${friend.link}</a>`;
        friendList.appendChild(li);
    });
});

/** */
