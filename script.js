(function() {
    var badValues = [
        'убермаргинал',
        'смотрит',
        'лшпт',
        'что стало',
        'школоник',
        'капитан паника',
        'Aspid',
        'капитанпаника',
        'приколы',
        'puchkov',
        'пучков'
    ];
    var badValuesSize = badValues.length;

    for (let j = 0; j < badValuesSize; j++) {
        badValues[j] = badValues[j].toLowerCase();
    }

    function removeBadValues (className, parentClasses) {
        let el = document.getElementsByClassName(className);
        let elSize = el.length;   
        for (let i = 0; i < elSize; i++) {
            if (typeof (el[i]) == 'undefined')
                continue;
            let title = el[i]['title'] || $(el[i]).text();
            title = title.trim().toLowerCase();
            if (title.length > 0)
                for (let j = 0; j < badValuesSize; j++) {              
                    if (title.indexOf(badValues[j]) >= 0) {
                        let s = [];
                        for (let k = 0; k < parentClasses.length; k++) {
                            $(el[i]).parents(parentClasses[k]).remove();
                        }
                        console.log('shit removed: ' + title);
                    }
                }
        }
    }
    
    function removeShit() {
        removeBadValues('yt-simple-endpoint', ['.ytd-grid-renderer, .style-scope.ytd-shelf-renderer']);
        removeBadValues('ytd-compact-video-renderer', ['.ytd-compact-video-renderer']);
        removeBadValues('ytd-video-meta-block', ['.ytd-compact-video-renderer']);
        removeBadValues('yt-simple-endpoint', ['.style-scope.ytd-grid-renderer']);
    }
    console.log('shit remover inited');
    removeShit();    
    setInterval(removeShit, 3000);
})();