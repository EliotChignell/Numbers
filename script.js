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
    showNumbers:  true,
    showPacks:    true,
    showUpgrades: true,
    numbers:      [],
    // Upgrades inner HTML
    upgradesInnerHTML: '',
    // Packs inner HTML
    packsInnerHTML: '<p>1-10 <a class="get fr" onclick="getPack(10)">Get</a></p>' +
                    '<p>10-50 <a class="get fr" onclick="getPack(50)">Get</a></p>' +
                    '<p>50-100 <a class="get fr" onclick="getPack(100)">Get</a></p>'
};

function randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function updateHTML() {
    requestAnimationFrame(updateHTML);
    h.cash.innerHTML = 'Cash: '+j.cash;
    h.cashPC.innerHTML = 'Cash per Click: '+j.cashPC;
    h.stats.style.width = window.innerWidth-30+'px';
}

function showHide(div) {
    switch(div) {
        case 'numbers':
            if (j.showNumbers) {
                h.showHideNumbers.innerHTML = 'Hide';
                j.showNumbers = false;
                if (j.numbers.length <= 0) {
                    h.numberContent.innerHTML = 'No Numbers';
                } else {
                    h.numberContent.innerHTML = j.numbers;
                }
            } else {
                h.showHideNumbers.innerHTML = 'Show';
                j.showNumbers = true;
                h.numberContent.innerHTML = '';
            }
            break;
        case 'packs': 
            if (j.showPacks) {
                h.showHidePacks.innerHTML = 'Hide';
                j.showPacks = false;
                h.packContent.innerHTML = j.packsInnerHTML;
            } else {
                h.showHidePacks.innerHTML = 'Show';
                j.showPacks = true;
                h.packContent.innerHTML = '';
            }
        break;
        case 'upgrades':
            if (j.showUpgrades) {
                h.showHideUpgrades.innerHTML = 'Hide';
                j.showUpgrades = false;
            h.upgradeContent.innerHTML = j.numbers;
            } else {
                h.showHideUpgrades.innerHTML = 'Show';
                j.showUpgrades = true;
                h.upgradeContent.innerHTML = '';
            }
        break;
    }
}

function sortNumbers() {
    requestAnimationFrame(sortNumbers);
    j.numbers.sort();
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

function openPack(num) {
    alert('Press OK to open pack.');
    if (num === 10) {
        content = randomInt(1,10);
        j.numbers.push(content);
        alert('You got the number: '+content+'!');
        content = 0;
    } else if (num === 50) {

    } else if (num === 100) {

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
