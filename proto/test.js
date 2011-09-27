init = function () {
    $('words').value="עטלעכע װערטער"
    $$('form')[0].onsubmit = showguesses
}

removeAllChildren = function (node) {
    while(node.hasChildNodes())
        node.removeChild(node.firstChild)
}

showguesses = function() {
    removeAllChildren($('guesses'))

    guesses($F('words').split(/\s+/)).each(function (word) {
        var link = document.createElement('a')
        link.appendChild(document.createTextNode(word))
        link.setAttribute('href', '')
        $('guesses').appendChild(link)
        $('guesses').appendChild(document.createTextNode(" "))
    })
    return false
}
