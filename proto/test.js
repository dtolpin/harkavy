init = function () {
    $('words').value="עטלעכע װערטער"
    $$('form')[0].onsubmit = showguesses
}

removeAllChildren = function (node) {
    while(node.hasChildNodes())
        node.removeChild(node.firstChild)
}

pages_prefix = "../data/"

showguesses = function() {
    removeAllChildren($('guesses'))

    search_harkavy(guesses($F('words').trim().split(/\s+/))).each(function (page) {
        var link = document.createElement('a')
        link.appendChild(document.createTextNode(page.word))
        link.setAttribute('href', pages_prefix+page.href)
        $('guesses').appendChild(link)
        $('guesses').appendChild(document.createTextNode(" "))
    })
    return false
}
