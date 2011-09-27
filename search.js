

search_harkavy = function() {
    var pages=harkavy_pages.sort(function(x, y) normal(x.word).localeCompare(normal(y.word)))
    
    return function(words) {
        var pageidxs = []
        var addidxs = function(word) {
            var previdx = 0
            var idx = 0
            for(var idx = 0; idx!=pages.length; previdx=idx, ++idx) {
                var cmp = word.localeCompare(normal(pages[idx].word))
                if(cmp<=0) {
                    pageidxs.push(previdx)
                    if(cmp==0) pageidx.push(idx)
                    return
                }
            }
        }
        words.each(addidxs)
        return pageidxs.sort().uniq().map(function (i) {return pages[i]})
    }
}();
                        
                
                
        