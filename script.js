(function() {    
    var string = new String(window.location.href);
    string = string.split('.');
    if (string[1] != 'youtube') {
        console.log('not working');
        return;
    }
    //enter names of unwated channes here
    var badValues = [
        'Популярные прямо сейчас - Россия',
        'Popular Music Videos',
        'Latest Sports Videos',
        'MsKobel',
        'Salamonchik',
        'Popular Gaming Videos',
        'Litput',
        'Azot2033',
        'Azotka 2033',
        'Bogdan .720 Supreme',
        'Популярные на YouTube - Россия',
        'AdamTomasMoran',
        'This is Хорошо',
        'Официальный канал КВН',
        'Уральские пельмени',
        'Элез',
        'Антон Воротников',
        'Лайв Канал Сахара',
        'Dmitry Puchkov',
        'BlackSilverUfa',
        'Канал Стинта :3',
        'Дмитрий Крымский',
        '# Laska',
        '. Сиджей',
        'AdamThomasMoran',
        'Анатолий Шарий',
        'PlayWithSERCH',
        'Кузя тут',
        'BestOfWarface',
        'Мишаня :P',
        'Владюха Зажимает',
        'OneGameX',
        '[RGW] МС-Серёга',
        '[RGW] МС-Серега',
        'Monty',
        'Arsenij TRYNOZHENKO',
        'Unick',
        'Adam Tomas Moran',
        'Surman Live',
        'Владюха Зажимает',
        'Monter',
        '________ак _103__',
        'DONIC',
        'LevTVision',
        'Капитан Паника Warface',
        'Mops Kalkalich',
        'Наталья Малафеева',
        'BugaGames',
        'InfantryMovie Damir',
        'Griffin Channel',
        'Юрий Хованский',
        'Magister Yoda'
    ];
    
    function in_array(needle, haystack, strict) {
        var found = false, key, strict = !!strict;
        for (key in haystack) {
            if ((strict && haystack[key] === needle) || (!strict && haystack[key] == needle)) {
                found = true;
                break;
            }
        }
        return found;
    }
    
    function removeShit() {
        var headers = $('.yt-shelf-grid-item, .related-list-item.related-list-item-compact-video');
        var text;
        headers.each(function(){
            text = $(this).find('.g-hovercard').text();
            if (in_array(text, badValues)) {
                $(this).remove();
                console.log('shit removed: ' + text);
            }
        }); 
        headers = $('.autoplay-bar');
        text = headers.find('.content-wrapper').find('.g-hovercard').text();
        if (in_array(text, badValues)) {
            headers.remove();
            console.log('shit removed: ' + text);
        }
    }
    setTimeout(removeShit, 200);
    setInterval(removeShit, 3000);
    
    function removeShitEx() {
        $('.branded-page-related-channels.branded-page-box.yt-card').each(function(i, j){
            if (i == 1)    
                $(this).hide();
        });
        $('.related-channels-editor').hide();
        $('.branded-page-related-channels').hide();
        $('.ytp-videowall-still.ytp-suggestion-set').hide();
    }
    removeShitEx();
    setInterval(removeShitEx, 3000);
})();
