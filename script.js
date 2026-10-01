(function () {
    var day = 86400000, now = new Date(), t0 = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    function since(y, m, d) { return Math.max(0, Math.round((t0 - new Date(y, m - 1, d)) / day)); }
    document.getElementById('met').textContent = since(2026, 9, 6);
    document.getElementById('tog').textContent = since(2026, 9, 17);

    var lines = [
        "Tum Chandigarh mein ho aur dil Mumbai mein dhadakna bhool gaya hai 💓",
        "It started with a 'hi' on Telegram, kya pata tha poori zindagi ka 'hello' ban jaogi.",
        "Kya tum WiFi ho? Kyunki tumse connect hote hi sab kuch perfect lagta hai 📶",
        "Chai mein cheeni kam ho toh chalega, par meri life mein tum kam nahi chaloge ☕",
        "Tum meri Mumbai ki baarish ho: jab aati ho, sab kuch romantic ho jaata hai 🌧️",
        "Tumhare 'Nisarg!' bolne ka andaaz sabse alag aur sabse pyaara hai.",
        "Ek din tumhe tight hug dene Chandigarh zaroor aaunga 🤗",
        "90% of my screen time is you, aur mujhe zero complaints hain 😌",
        "Tumne daanta toh laga ki hum sach mein ek ho gaye hain 😂",
        "Distance kitni bhi ho, my heart always books a ticket to you ❤️"
    ];
    var i = 0, el = document.getElementById('line');
    document.getElementById('next').addEventListener('click', function () {
        i = (i + 1 + Math.floor(Math.random() * (lines.length - 1))) % lines.length;
        el.textContent = lines[i]; burst(5, this);
    });

    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var emo = ['💖', '💗', '💕', '💘', '❤️', '✨'];
    function heart(x, y, d) {
        if (reduce) return;
        var h = document.createElement('span'); h.className = 'heart';
        h.textContent = emo[Math.floor(Math.random() * emo.length)];
        h.style.left = x + 'px'; h.style.top = y + 'px';
        h.style.fontSize = (14 + Math.random() * 20) + 'px';
        h.style.setProperty('--d', d + 's');
        document.body.appendChild(h);
        setTimeout(function () { h.remove(); }, d * 1000);
    }
    function burst(n, from) {
        var r = from.getBoundingClientRect();
        for (var k = 0; k < n; k++) { heart(r.left + Math.random() * r.width, r.top, 3 + Math.random() * 3); }
    }
    document.getElementById('love').addEventListener('click', function () {
        document.getElementById('final').style.display = 'block';
        for (var k = 0; k < 40; k++) { heart(Math.random() * window.innerWidth, window.innerHeight - 20, 4 + Math.random() * 4); }
        document.getElementById('final').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
    });
    if (!reduce) {
        setInterval(function () { heart(Math.random() * window.innerWidth, window.innerHeight - 10, 7 + Math.random() * 4); }, 1800);
    }
    var L = [
        ["Open when you miss me 💌", ["Hey Khushi 🥺 Pehle ek deep breath lo. I miss you too, probably zyada.", "Jab bhi meri yaad aaye, yaad rakhna: Mumbai aur Chandigarh ke beech ki doori temporary hai, but hamara pyaar permanent hai.", "Abhi mujhe call ya message kar do, main sab kuch chhod ke aa jaunga. Tab tak, imagine karo ek tight hug from me 🤗", "Yours, Nisarg"]],
        ["Open when you're sad 🥺", ["Meri jaan, jo bhi hua ho, you are not alone.", "Bas mujhse baat karo, main bina judge kiye sunta rahunga. Tum strong ho, smart ho, aur sabse pyaari ho.", "Bad days aate hain aur chale jaate hain, aur main har din tumhare saath hu. Ek chhoti si smile karo, please, mere liye ❤️", "Always with you, Nisarg"]],
        ["Open when you can't sleep 🌙", ["Phone side mein rakho, aankhein band karo, aur ek gehri saans lo.", "Imagine karo ki main tumhare paas baitha hu aur tumhare baalon mein haath fer raha hu. Bhed ginne se better hai mere baare mein sochna 😏", "Aur haan, agar tum so gayi aur good night bolna bhool gayi, I will forgive you, as usual 😂", "Good night, Khushi. Sweet dreams 🌙 Nisarg"]],
        ["Open when you're angry at me 😡", ["Okay okay, galti meri hi hogi 😅 (shayad).", "Tumhara daantna mujhe pasand hai, but tumhara gussa mujhe dukhi karta hai. Mujhe sorry bolne do aur batao kya hua.", "Main sudharne ki poori koshish karunga, promise. Tum gusse mein bhi cutest ho. Ab maaf kar do na please 🥺🙏", "Your forever-in-trouble boyfriend, Nisarg"]],
        ["A reminder that I love you ❤️", ["Read this slowly: I love you.", "Tumhari smile, tumhari aankhein, tumhari wafadari, tumhara daantna, even tumhara bina good night bole so jaana, sab kuch.", "Tum 2026 ki best thing ho jo mere saath hui. Kabhi doubt mat karna, Khushi. Main tumhara hu, hamesha. ❤️", "Love always, Nisarg"]],
        ["Open when you're having a bad day 🌧️", ["Aaj ka din kharab tha? Come here, virtual hug 🤗", "Yaad rakhna, Mumbai ki baarish ki tarah bad days bhi guzar jaate hain, aur uske baad sab kuch fresh lagta hai.", "Tum jitna sochti ho usse kahin zyada capable ho. Aur jab thak jao, mujhe bata dena. Main tumhara cheerleader, tumhara chai partner, sab hu ☕", "You've got this, Nisarg"]],
        ["Open when you want to smile 😊", ["Chalo, ek quick smile mission 😌", "Number 1: Yaad karo jab maine tumse pehli baar Telegram pe baat ki thi aur bilkul nervous tha.", "Number 2: Soch lo ki main tumhare daantne se kitna darta hu, phir bhi galti repeat karta hu 😂", "Number 3: Ab tumhari smile aa gayi na? Mission accomplished. Love you, Nisarg 💖"]],
        ["Open when we finally meet 🤗", ["Khushi, agar tum ye padh rahi ho, toh matlab woh din aa gaya hai 🥹", "Mumbai aur Chandigarh ke beech ki saari doori ek hug mein khatam ho jaayegi. I have waited for this since 6th September.", "Plan: tight hug, tumhara haath pakadna, aur phir tumhe bahut saara dekhna, kyunki screen pe kabhi poora nahi dikhta.", "See you soon, meri jaan. Tumhara Nisarg ❤️"]]
    ];
    var d = document.getElementById('dlg');
    document.querySelectorAll('.env').forEach(function (b) {
        b.addEventListener('click', function () {
            var x = L[+b.dataset.i];
            document.getElementById('dt').textContent = x[0];
            document.getElementById('db').innerHTML = x[1].map(function (t) { return '<p>' + t + '</p>'; }).join('');
            d.showModal(); d.scrollTop = 0;
        });
    });
    document.getElementById('dc').addEventListener('click', function () { d.close(); });
    d.addEventListener('click', function (e) { if (e.target === d) d.close(); });
})();