search_harkavy = function(words) {
    var pageidxs = []
    var addidxs = function(word) {
        var previdx = 0
        for(var idx = 1; idx!=harkavy_pages.length; previdx=idx, ++idx) {
            if(word<=normal(harkavy_pages[idx].word) && word>=normal(harkavy_pages[previdx].word))
                pageidxs.push(previdx)
        }
    }
    words.each(addidxs)
    return pageidxs.sort().uniq().map(function (i) {return harkavy_pages[i]})
}
                        
                
                
        