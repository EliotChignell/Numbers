var h = {
    cash:            document.querySelector('#htmlCash'),
    cashPC:          document.querySelector('#htmlCashPC'),
    cashBtn:         document.querySelector('#cashBtn'),
    showHideNumbers: document.querySelector('.showhideNumbers'),
    showHideUpgrades:document.querySelector('.showhideUpgrades'),
    showHidePacks:   document.querySelector('.showhidePacks'),
    numberContent:   document.querySelector('.numberContent'),
    packContent:     document.querySelector('.packContent'),
    upgradeContent:  document.querySelector('.upgradeContent'),
    stats:           document.querySelector('.stats'),
    upgrades:        document.querySelector('.upgrades'),
    packs:           document.querySelector('.packs')
};

var j = {
    cash:         0,
    cashPC:       1,
    showNumbers:  false,
    showPacks:    false,
    showUpgrades: false,
    numbers:      [0],
    // Upgrades inner HTML
    upgradesInnerHTML: '',
    // Packs inner HTML
    packsInnerHTML: '<p>1-10 <a class="get fr" onclick="getPack(10)">Get</a></p>' +
                    '<p>10-50 <a class="get fr" onclick="getPack(50)">Get</a></p>' +
                    '<p>50-100 <a class="get fr" onclick="getPack(100)">Get</a></p>'
};

function updateHTML() {
    requestAnimationFrame(updateHTML);
    h.cash.innerHTML = 'Cash: '+j.cash;
    h.cashPC.innerHTML = 'Cash per Click: '+j.cashPC;
    h.stats.style.width = window.innerWidth-30+'px';
}

function showHide(div) {
    if (div == 'numbers') {
        if (j.showNumbers) {
            h.showHideNumbers.innerHTML = 'Hide';
            j.showNumbers = false;
            h.numberContent.innerHTML = j.numbers;
        } else if (!j.showNumbers) {
            h.showHideNumbers.innerHTML = 'Show';
            j.showNumbers = true;
            h.numberContent.innerHTML = '';
        }
    } else if (div == 'packs') {
        if (j.showPacks) {
            h.showHidePacks.innerHTML = 'Hide';
            j.showPacks = false;
            h.packContent.innerHTML = j.packsInnerHTML;
        } else if (!j.showPacks) {
            h.showHidePacks.innerHTML = 'Show';
            j.showPacks = true;
            h.packContent.innerHTML = '';
        }
    } else if (div == 'upgrades') {
        if (j.showNumbers) {
            h.showHideUpgrades.innerHTML = 'Hide';
            j.showNumbers = false;
            h.upgradeContent.innerHTML = j.numbers;
        } else if (!j.showNumbers) {
            h.showHideUpgrades.innerHTML = 'Show';
            j.showNumbers = true;
            h.upgradeContent.innerHTML = '';
        }
    }
}

function sortNumbers() {
    requestAnimationFrame(sortNumbers);
    j.numbers.sort(function(a,b){return a-b});
}

function moreCash() {
    j.cash += j.cashPC;
}

function getPack(num) {
    if (num === 10) {

        if (j.cash >= 100) {
            conf = confirm('Are you sure you want to buy a 1-10 pack for 100 Cash?')
            if (conf) {
                j.cash -= 100;
                openPack(10);
            }
        } else {
            alert('You do not have enough money!')
        }

    } else if (num === 50) {

        if (j.cash >= 200) {
            conf = confirm('Are you sure you want to buy a 10-50 pack for 200 Cash?')
            if (conf) {
                j.cash -= 200;
                openPack(50);
            }
        } else {
            alert('You do not have enough money!')
        }

    } else if (num === 100) {

        if (j.cash >= 350) {
            conf = confirm('Are you sure you want to buy a 50-100 pack for 350 Cash?')
            if (conf) {
                j.cash -= 350;
                openPack(100);
            }
        } else {
            alert('You do not have enough money!')
        }

    }
}

// Onclick events
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    h.cashBtn.ontouchstart = moreCash;
    console.log('Device is mobile');
} else {
    h.cashBtn.onclick = moreCash;
    console.log('Device is not mobile');
}

// LocalStorage

// loopy
sortNumbers();
updateHTML();