const defaultData = {
    OPM: [{ id: "o1", name: "IV of Spades", img: "https://scontent.fmnl25-4.fna.fbcdn.net/v/t1.15752-9/633941212_1572863790653545_500061897838901021_n.png?_nc_cat=107&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGtbBUXhfCDGifONG4umvOcZYuwXsO_QCxli7Bew79ALFzQ27yVYb6XDYaUZEbB7rTKGVPAavgtRs_vJ-mz3S7w&_nc_ohc=WJPFSwxXbhkQ7kNvwEtvdyc&_nc_oc=Adlsz6scsoIur49kWSvQnR9hfBnGhWQNdCK3gUm-C3BIlGE6tHuolW0QVR0gDEON9k4&_nc_zt=23&_nc_ht=scontent.fmnl25-4.fna&oh=03_Q7cD4gHZjDdMcaJEniGdKWZ7PXB7o8I99guyyO3hCuuCa3OVqg&oe=69B4A90A", votes: 0 },
          { id: "o2", name: "Ben&Ben", img: "https://scontent.fmnl25-3.fna.fbcdn.net/v/t1.15752-9/462579782_587347703754714_6187339624302073383_n.png?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHzOlmAOfSjzTN5H6P8hmUhthK8fkxa1kC2Erx-TFrWQDbchaFttgTANs5e1CGyNPB9AaH_rcWW63dm5DIIiuf9&_nc_ohc=7lvbi_eNBIkQ7kNvwFVCBCe&_nc_oc=Adk24NWmVdWlXYoHLETjdFonwnU6qiGsG_6wI1ZrBN3UkoAFId8HUdKCkKoNjj3h_uU&_nc_zt=23&_nc_ht=scontent.fmnl25-3.fna&oh=03_Q7cD4gFa46QyibP6qwf-4uGZxOmvazQyVuS3FGR2lQmkUSTcfA&oe=69B4A355", votes: 0 }],
    Rock:[{ id: "r1", name: "Queen", img: "https://scontent.fmnl25-5.fna.fbcdn.net/v/t1.15752-9/627622797_1228357172170998_5275626206644799369_n.png?_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFpNqsbOSXOYKjt0RaeA9tqZwj-TAZF3N9nCP5MBkXc35yRjpIS2hnjJe2EQb-RdoZ_BfpWUkNs3OFWT5Ebrs8K&_nc_ohc=F7vTWPdiVdEQ7kNvwGvSjYz&_nc_oc=AdlntO7e1pzntAWar_EGZoWOg84Edboh8XsOk3d9zynqnlFjYO1WbxKqbFUF7djLmQs&_nc_zt=23&_nc_ht=scontent.fmnl25-5.fna&oh=03_Q7cD4gEyBAk3tYacw_rU-lZr7DsMEfRFHjmWpXYM9Y1OgKpfpg&oe=69B4A15C", votes: 0 },
          { id: "r2", name: "Nirvana", img: "https://scontent.fmnl25-5.fna.fbcdn.net/v/t1.15752-9/627398544_1311061111049143_352374684733638506_n.png?_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHJuiVEwxvT1d_sO5YjMsP6Xn1q7xWzCqtefWrvFbMKq-mkHIDjYMPYxPmJTRBzs0jo46ffbQ0Tuk5gotPmEJzR&_nc_ohc=skGxJinJ8isQ7kNvwG-hmbS&_nc_oc=AdnUSdzMkL3MDW1_xhsexcg5Ge0XDMz2ha9KOiuG2DHTEsG7nmT-J5a8zP2tnmNN6tM&_nc_zt=23&_nc_ht=scontent.fmnl25-5.fna&oh=03_Q7cD4gGIgn49fTAuicyy1gZlRq-T4tQO25ppA5abuBwfuwEKzQ&oe=69B4C60C", votes: 0 }],
    Pop: [{ id: "p1", name: "Coldplay", img: "https://scontent.fmnl25-1.fna.fbcdn.net/v/t1.15752-9/627539604_1853579078696227_1478339317894847975_n.png?_nc_cat=103&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFgxyrVU7sFY-xbAnX30cPhqcin0ZX2wfupyKfRlfbB-8JMCQDlRECx4oLFTcNVXp5-mFpZaOK3j8MJIY1rk7LP&_nc_ohc=Tcsa3yyXlw0Q7kNvwHnPWNn&_nc_oc=AdnvqlWoEMzygFpqwYygjYpFo3UhuNkebMPwBT6TJAC7uei9i_2L6A4WAXTFgNqrhfw&_nc_zt=23&_nc_ht=scontent.fmnl25-1.fna&oh=03_Q7cD4gHUll0vA7fR3UaQkQ18ZH_DDgbKCSTnDrSBZcS7--6Atg&oe=69B4ACF9", votes: 0 },
          { id: "p2", name: "Paramore", img: "https://scontent.fmnl25-1.fna.fbcdn.net/v/t1.15752-9/589743933_1815947835731577_1712916203911002319_n.png?_nc_cat=103&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeErkCXAnlDMegeUSFr7wfdSOeqRj9qw5gI56pGP2rDmAhwdGa3Aq0EOXCjYHQfyI59A41yHU0jkDHjaDXurREo6&_nc_ohc=7LPU0H302doQ7kNvwGxNK_F&_nc_oc=Adkhc89mvkFuyfN-AqZ2gym3yjknRf-WQiNdrpCwTqOuT-tJJb5yzqUG2A8tRpt_x34&_nc_zt=23&_nc_ht=scontent.fmnl25-1.fna&oh=03_Q7cD4gGhXbunDjbrg1XxiE0fKFlekCIPjyXvUL5NKReen3k6Sw&oe=69B4B144", votes: 0 }]
};

const themes = { 'OPM': '#f1c40f', 'Rock': '#e74c3c', 'Pop': '#f368e0' };

let musicData = JSON.parse(localStorage.getItem('bVote_D')) || defaultData;
let voteHist = JSON.parse(localStorage.getItem('bVote_H')) || [];
let userDB = JSON.parse(localStorage.getItem('bVote_U')) || {};
let currentUser = localStorage.getItem('bVote_Curr') || "Guest";
let currentGenre = 'OPM';
let isAdmin = false;

function addNewUser() {
    const name = prompt("Enter voter name:");
    if (name && name.trim()) {
        currentUser = name.trim();
        if (!userDB[currentUser]) userDB[currentUser] = [];
        localStorage.setItem('bVote_Curr', currentUser);
        localStorage.setItem('bVote_U', JSON.stringify(userDB));
        renderGrid();
    }
}

function renderGrid() {
    const grid = document.getElementById('bandGrid');
    const lockText = document.getElementById('lockStatus');
    document.getElementById('currentUserDisplay').innerText = currentUser;
    document.documentElement.style.setProperty('--theme-color', themes[currentGenre]);
    grid.innerHTML = "";
    
    const hasVoted = isAdmin ? false : (userDB[currentUser] && userDB[currentUser].includes(currentGenre));
    const totalGenreVotes = musicData[currentGenre].reduce((s, b) => s + b.votes, 0);

    lockText.innerText = hasVoted ? "VOTED" : "READY";
    lockText.className = hasVoted ? "lock-status locked" : "lock-status";

    musicData[currentGenre].forEach(band => {
        const percent = totalGenreVotes > 0 ? Math.round((band.votes / totalGenreVotes) * 100) : 0;
        const card = document.createElement('div');
        card.className = `band-card ${hasVoted ? 'disabled' : ''}`;
        card.onclick = () => castVote(band);
        card.innerHTML = `
            <img src="${band.img}">
            <div style="margin-top:10px; overflow:hidden;">
                <span class="percent-txt">${percent}%</span>
                <h3 style="margin:0; text-align:left; font-size:1.1rem;">${band.name}</h3>
            </div>
            <div class="bar-container">
                <div class="bar-bg"><div class="bar-fill" style="width:${percent}%"></div></div>
                <p style="font-size:0.65rem; color:#64748b; margin:5px 0 0;">${band.votes} votes</p>
            </div>
        `;
        grid.appendChild(card);
    });
    updateStats();
}

function castVote(band) {
    if ((userDB[currentUser] && userDB[currentUser].includes(currentGenre)) && !isAdmin) return;
    
    musicData[currentGenre].find(b => b.id === band.id).votes++;
    if (!userDB[currentUser]) userDB[currentUser] = [];
    userDB[currentUser].push(currentGenre);
    voteHist.push({ b: band.name, u: currentUser });

    localStorage.setItem('bVote_D', JSON.stringify(musicData));
    localStorage.setItem('bVote_U', JSON.stringify(userDB));
    localStorage.setItem('bVote_H', JSON.stringify(voteHist));

    renderGrid();
    const t = document.getElementById('toast'); t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 1500);
}

function updateStats() {
    let total = 0;
    for (let g in musicData) musicData[g].forEach(b => total += b.votes);
    document.getElementById('globalVotes').innerText = total;

    const list = document.getElementById('historyList');
    list.innerHTML = "";
    voteHist.slice(-3).reverse().forEach(h => {
        const li = document.createElement('li');
        li.style.fontSize = "0.75rem"; li.style.marginBottom = "5px";
        li.innerText = `• ${h.u} picked ${h.b}`;
        list.appendChild(li);
    });
}

function changeGenre(genre, btn) {
    currentGenre = genre;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('genreTitle').innerText = `${genre} Face-Off`;
    renderGrid();
}

function toggleWinners() {
    const overlay = document.getElementById('winnerOverlay');
    overlay.classList.toggle('active');
    if (overlay.classList.contains('active')) {
        const winList = document.getElementById('winnerList');
        winList.innerHTML = "";
        for (let g in musicData) {
            const winner = [...musicData[g]].sort((a,b) => b.votes - a.votes)[0];
            winList.innerHTML += `
                <div class="winner-card">
                    <small style="color:${themes[g]}">${g} LEADER</small>
                    <img src="${winner.img}" style="margin:10px 0;">
                    <h4>${winner.name}</h4>
                    <p style="font-size:0.8rem;">${winner.votes} Votes</p>
                </div>`;
        }
    }
}

function resetUserChoices() {
    if(confirm(`Clear choices for ${currentUser}?`)) {
        delete userDB[currentUser];
        localStorage.setItem('bVote_U', JSON.stringify(userDB));
        renderGrid();
    }
}

function fullSystemReset() {
    if(confirm("Wipe all data?")) { localStorage.clear(); location.reload(); }
}

function toggleAdmin() {
    isAdmin = !isAdmin;
    document.getElementById('adminToggle').classList.toggle('admin-on');
    renderGrid();
}

renderGrid();