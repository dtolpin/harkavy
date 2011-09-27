init = function () {
    $('words').value="עטלעכע װערטער"
    $$('form')[0].onsubmit = show_translations
}

removeAllChildren = function (node) {
    while(node.hasChildNodes())
        node.removeChild(node.firstChild)
}

pages_prefix = "http://www.cs.uky.edu/~raphael/yiddish/harkavy/"

show_translations = function() {
    removeAllChildren($('translations'))

    search_harkavy(guesses($F('words').trim().split(/\s+/))).each(function (page) {
        var link = document.createElement('a')
        link.appendChild(document.createTextNode(page.word))
        link.setAttribute('href', pages_prefix+page.href)
        $('translations').appendChild(link)
        $('translations').appendChild(document.createTextNode(" "))
    })
    return false
}
