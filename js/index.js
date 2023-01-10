
// Toggle Setting Box
$('.setting-gear').click(()=> {
    $(".setting-gear i").toggleClass('fa-spin')
    if($(".setting-gear i").hasClass('fa-spin')) {
        $('.setting').css('left', '0')
    } else {
        $('.setting').css('left', '-280px')
    }
})

// ******************** Define Function **************************
// control active for any option
switchActiveOption = (optionDOM, optionName, optionVal) => {
    for(item in optionDOM) {
        if(optionDOM[item].dataset[optionName] == optionVal) {
            optionDOM[item].classList.add('active')
        } else {
            optionDOM[item].classList.remove('active')
        }
    }
}

//******************** Start Setting *************** */

// Make Setting Object
const SETTING = {
    color: '#ee9002',
    bg: 'off' 
}
var hasChanges = 0

// Start Get Settings in Storage
const storageOptions = JSON.parse(localStorage.getItem('setting'))

// Start Get Elements From DOM
const colorOptionElm = { 
    'theme1': document.querySelector('.setting-content span.color-option:first-of-type'),
    'theme2': document.querySelector('.setting-content span.color-option:nth-of-type(2)'), 
    'theme3': document.querySelector('.setting-content span.color-option:nth-of-type(3)'),
    'theme4': document.querySelector('.setting-content span.color-option:last-of-type')
}

// **************** Color Setting ************************
for(let theme in colorOptionElm) {
    colorOptionElm[theme].onclick = function() {
        hasChanges += 1
        SETTING.color = colorOptionElm[theme].dataset.color
        document.querySelector(':root').style.setProperty('--main-color', colorOptionElm[theme].dataset.color)
        // change active class
        switchActiveOption(colorOptionElm, 'color', colorOptionElm[theme].dataset.color)
        // set storage
        localStorage.setItem('setting', JSON.stringify(SETTING))
    }
}

// Any Action when event ready
$(document).ready(() => {
    // check if has storage data or not
    if(storageOptions) {
        // ********* Color Option *******************
        // Set Main Color From Storage
        document.querySelector(':root').style.setProperty('--main-color', storageOptions.color)
        // change active class
        switchActiveOption(colorOptionElm, 'color', storageOptions.color)
    }
})