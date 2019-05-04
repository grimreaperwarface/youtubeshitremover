(function() {
    var badValues = [
        'убермаргинал',
        'смотрит',
        'лшпт',
        'что стало',
        'школоник',
        'капитан паника'
    ];
    var badValuesSize = badValues.length;

    for (let j = 0; j < badValuesSize; j++) {
        badValues[j] = badValues[j].toLowerCase();
    }

    function removebadValues () {    
        let el = document.getElementsByClassName('yt-simple-endpoint');
        let elSize = el.length;   
        for (let i = 0; i < elSize; i++) {
            if (typeof (el[i]) == 'undefined')
                continue;
            let title = el[i]['title'];
            title = title.trim().toLowerCase();
            if (title.length > 0)
                for (let j = 0; j < badValuesSize; j++) {              
                    if (title.indexOf(badValues[j]) >= 0) {
                        $(el[i]).parents('.ytd-grid-renderer').remove();
                        $(el[i]).parents('.style-scope.ytd-shelf-renderer').remove();                    
                        console.log('shit removed: ' + title);
                    }
                }
        }
    }
    removebadValues();
    console.log('shit remover inited');
    setInterval(removebadValues, 3000);
})();