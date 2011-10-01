link_prefix = "http://www.cs.uky.edu/~raphael/yiddish/harkavy/" /* web */
// link_prefix = "data/" /* local */

/* end of tuneups */

links = { 'english-index-link':"index.utf8.html#ed", 
          'yiddish-index-link':"index.utf8.html#yd" }

init = function () {
    $$('form')[0].onsubmit = show_translations
    for(linkid in links) {
        $(linkid).href = link_prefix + links[linkid]
    }
}

removeAllChildren = function (node) {
    while(node.hasChildNodes())
        node.removeChild(node.firstChild)
}

show_translations = function() {
    removeAllChildren($('translations'))

    search_harkavy(guesses($F('words').trim().split(/\s+/))).each(function (page) {
        var link = document.createElement('a')
        link.appendChild(document.createTextNode(page.number+":"+page.word))
        link.href = link_prefix+page.href
        $('translations').appendChild(link)
        $('translations').appendChild(document.createTextNode(" "))
    })
    return false
}
