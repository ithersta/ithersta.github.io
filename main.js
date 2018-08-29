const btnPlay = document.getElementById("btnPlay");
const btnSell = document.getElementById("btnSell");
const btnClassic = document.getElementById("btnClassic");
const btnInsane = document.getElementById("btnInsane");
const btnsPlay = document.getElementById("btnsPlay");
const btnsMode = document.getElementById("btnsMode");
const txtName = document.getElementById("txtName");
const txtMoney = document.getElementById("txtMoney");
const imgCard = document.getElementById("imgCard");
const preload = new Image();

const rareChance = Array(89, 99, 100);
const rareColors = Array("#444444", "#5101db", "#ff399a");

const arrayCardIds = Array(
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020,
    2000, 2001, 2002, 2003, 2004, 2005,
    3000, 3001, 3002, 3003, 3004, 3005, 3006, 3007, 3008, 3009, 3010, 3011, 3012, 3013, 3014, 3015, 3016, 3017, 3018, 3019,
    4000, 4001, 4002, 4003, 4004, 4005, 4006, 4007, 4008, 4009, 4010, 4011, 4012, 4013, 4014, 4015, 4016, 4017, 4018, 4019, 4020,
    5000, 5001, 5002, 5003, 5004, 5005
);
const arrayCardNames = Array(
    "yaVorAvatarok.jpg", "4ai.jpg", "4toslu4ilos.jpg", "chill.jpg", "dab2015.jpg", "draka.jpg", "druzya.jpg", "fingers.jpg", "klass.jpg", "klasspogul9l.jpg", "krasavec.jpg", "o4karik.jpg", "shock.jpg", "smotru.jpg", "sosu.jpg", "vladick.jpg", "yaga.jpg", "yakrut.jpg", "naLegkoy.jpg", "fullHD.jpg",
    "винь.jpg", "aaaa.jpg", "arslan.jpg", "azat.jpg", "burgers.jpg", "cock.jpg", "condoms.jpg", "dab.jpg", "egypt.jpg", "eskimos.jpg", "foku_palm.jpg", "namoreletala.jpg", "otdixau.jpg", "poet.jpg", "religion.jpg", "rustam.jpg", "rustsharip.jpg", "superklass.jpg", "timetraveller.jpg", "paketySdavaites.jpg", "dushatPomogite.jpg",
    "superulitka.jpg", "superchill.jpg", "superplotnikova.jpg", "superrobot.jpg", "superskate.jpg", "superTycaDjysa.jpg",
    "MR.jpg", "4ai(.jpg", "4o palish.jpg", "chilit sidit.jpg", "dab2015.jpg", "petushari.jpg", "sid9t.jpg", "fingering.jpg", "klass.jpg", "LEXA Fotkat ne umeesh!!.jpg", "krasavec(HAHA).jpg", "o4konavt.jpg", "mda.jpg", "smotru.jpg", "sosu.jpg", "vladiki.jpg", "9zhka kryto.jpg", "yakrutoy.jpg", "nalegkoy.jpg", "4k.png(HAHAAAHAHAHAHAH)",
    "strashno.jpg", "aaaaAAAAAA.jpg", "arslan+mclaren=$.jpg", "minusAzat.jpg", "burgers.jpg", "cock.jpg", "condoms.jpg", "unexpectedDab.jpg", "egipet egipet EGIPET!@@@.jpg", "idem v shkolu nam klevo!!.jpg", "foku_palm.jpg", "namoreletala.jpg", "otdixau.jpg", "poet.jpg", "mne nravits9 eta photka.jpg", "rustam.jpg", "SHARIP RUSTAAAAA!.jpg", "superklass.jpg", "timetraveller.jpg", "jpg.jpg", "dushat(.jpg",
    "superulitka.jpg", "superchill.jpg", "superplotnikova.jpg", "superrobot.jpg", "superskat.jpg", "superTycaDjusa.jpg"
);
const arrayCardImageResources = Array(
    "c_yavorphoto.jpg", "c_4ai.jpg", "c_4toslu4ilos.jpg", "c_chill.jpg", "c_dab2015.jpg", "c_draka.jpg", "c_druzya.jpg", "c_fingers.jpg", "c_klass.jpg", "c_klasspogul9l.jpg", "c_krasavec.jpg", "c_o4karik.jpg", "c_shock.jpg", "c_smotru.jpg", "c_sosu.jpg", "c_vladick.jpg", "c_yaga.jpg", "c_yakrut.jpg", "c_nalehkoy.jpg", "c_fullhd.jpg",
    "r_vin.jpg", "r_aaaa.jpg", "r_arslan.jpg", "r_azat.jpg", "r_burgers.jpg", "r_cock.jpg", "r_condoms.jpg", "r_dab.jpg", "r_egypt.jpg", "r_eskimos.jpg", "r_foku_palm.jpg", "r_namoreletala.jpg", "r_otdixau.jpg", "r_poet.jpg", "r_religion.jpg", "r_rustam.jpg", "r_rustsharip.jpg", "r_superklass.jpg", "r_timetraveller.jpg", "r_paketysdavaites.jpg", "r_dushatpomogite.jpg",
    "superulitka.jpg", "superchill.jpg", "superplotnikova.jpg", "superrobot.jpg", "superskate.PNG", "supertycadjusa.jpg",
    "insane_c_yavorphoto.jpg", "insane_c_4ai.jpg", "insane_c_4toslu4ilos.jpg", "insane_c_chill.jpg", "insane_c_dab2015.jpg", "insane_c_draka.jpg", "insane_c_druzya.jpg", "insane_c_fingers.jpg", "insane_c_klass.jpg", "insane_c_klasspogul9l.jpg", "insane_c_krasavec.jpg", "insane_c_o4karik.jpg", "insane_c_shock.jpg", "insane_c_smotru.jpg", "insane_c_sosu.jpg", "insane_c_vladick.jpg", "insane_c_yaga.jpg", "insane_c_yakrut.jpg", "insane_c_nalehkoy.jpg", "insane_c_fullhd.jpg",
    "insane_r_vin.jpg", "insane_r_aaaa.jpg", "insane_r_arslan.jpg", "insane_r_azat.jpg", "insane_r_burgers.jpg", "insane_r_cock.jpg", "insane_r_condoms.jpg", "insane_r_dab.jpg", "insane_r_egypt.jpg", "insane_r_eskimos.jpg", "insane_r_foku_palm.jpg", "insane_r_namoreletala.jpg", "insane_r_otdixau.jpg", "insane_r_poet.jpg", "insane_r_religion.jpg", "insane_r_rustam.jpg", "insane_r_rustsharip.jpg", "insane_r_superklass.jpg", "insane_r_timetraveller.jpg", "insane_r_paketysdavaites.jpg", "insane_r_dushatpomogite.jpg",
    "insane_superulitka.jpg", "insane_superchill.jpg", "insane_superplotnikova.jpg", "insane_superrobot.jpg", "insane_superskate.PNG", "insane_supertycadjusa.jpg"
);
const arrayCardBaseSellPrices = Array(
    400, 300, 300, 300, 450, 450, 300, 250, 300, 200, 480, 520, 520, 300, 400, 400, 200, 400, 350, 200,
    400, 1000, 800, 1350, 700, 1000, 1500, 800, 1300, 1100, 1700, 1000, 800, 1300, 1800, 900, 1600, 800, 2000, 2000, 1800,
    5000, 3000, 3400, 1800, 4000, 3500,
    400, 300, 300, 300, 450, 450, 300, 250, 300, 200, 480, 520, 520, 300, 400, 400, 200, 400, 350, 200,
    400, 1000, 800, 1350, 700, 1000, 1500, 800, 1300, 1100, 1700, 1000, 800, 1300, 1800, 900, 1600, 800, 2000, 2000, 1800,
    5000, 3000, 3400, 1800, 4000, 3500
);

let cardRanges;
let maxSellQ;
let minSellQ;
let growSellQ;
let degrowSellQ;
let money;
let sellQ = 1;
let inflationRate;
let baseBuy;

let isSold = false;
let cardRareness = 0;
let cardIndex = 0;
let cardCost = 0;
let cardBuy;
let randSellQ = 1.0;
let inflation = 1;


btnPlay.onclick = function () {
    btnPlay.classList.add("loading", "disabled");
    btnSell.classList.add("disabled");
    updateMoney(-cardBuy);
    setTimeout(function () {
        generateCard();
    }, 100);
};

btnSell.onclick = function () {
    btnSell.classList.add("disabled");
    btnSell.innerText = "Продано";
    isSold = true;
    updateMoney(cardCost);
    updateBtn();
};

btnClassic.onclick = function() {
    startGame(false);
};

btnInsane.onclick = function() {
    startGame(true);
};

preload.onload = function () {
    showCard(cardIndex);
    btnPlay.classList.remove("loading");
    btnSell.classList.remove("disabled");
    updateBtn();
};

function generateCard() {
    iterateQ();
    x = randomInteger(1, 100);
    switch (true) {
        case (x <= rareChance[0]):
            cardRareness = 0;
            break;
        case (x <= rareChance[1]):
            cardRareness = 1;
            break;
        case (x <= rareChance[2]):
            cardRareness = 2;
            break;
    }

    const cardID = randomInteger(cardRanges[cardRareness * 2], cardRanges[cardRareness * 2 + 1]);
    cardIndex = arrayCardIds.indexOf(cardID);
    imgPreload(cardIndex);
}

function imgPreload(index) {
    preload.src = "/untitled2/media/" + arrayCardImageResources[index];
}

function showCard(index) {
    imgCard.src = "/untitled2/media/" + arrayCardImageResources[index];
    txtName.innerText = arrayCardNames[index];
    txtName.style.color = rareColors[cardRareness];
    cardCost = Math.floor(arrayCardBaseSellPrices[index] * sellQ * randSellQ * inflation);
    cardBuy = Math.floor(baseBuy * inflation);
    btnSell.innerText = "Продать за " + cardCost;
    btnPlay.innerText = "Купить за " + cardBuy;
}

function iterateQ() {
    if (isSold) {
        sellQ *= degrowSellQ;
        isSold = false;
    } else sellQ *= growSellQ;
    if (sellQ > maxSellQ) sellQ = maxSellQ;
    else if (sellQ < minSellQ) sellQ = minSellQ;
    randSellQ = randomInteger(95, 105) / 100;
    inflation *= inflationRate;
}

function startGame(insane) {
    btnsMode.style.display = 'none';
    btnsPlay.removeAttribute("style");
    if (insane) {
        cardRanges = Array(3000, 3019, 4000, 4020, 5000, 5005);
        maxSellQ = 3.88;
        minSellQ = 0.1;
        growSellQ = 1.2;
        degrowSellQ = 0.6;
        money = 20000;
        inflationRate = 1.2;
        baseBuy = 500;
    }
    else {
        cardRanges = Array(0, 19, 1000, 1020, 2000, 2005);
        maxSellQ = 3.88;
        minSellQ = 0.1;
        growSellQ = 1.2;
        degrowSellQ = 0.6;
        money = 20000;
        inflationRate = 1;
        baseBuy = 500;
    }
    cardBuy = baseBuy;

}

function randomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}

function updateBtn() {
    if (money >= cardBuy) {
        btnPlay.classList.remove("disabled")
    }
    else {
        btnPlay.classList.add("disabled")
    }
}

function updateMoney(diff) {
    money += diff;
    txtMoney.innerText = parseFloat(money/1000).toFixed(1) + "K";
}