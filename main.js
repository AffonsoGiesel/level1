function tweet() {
    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=600,height=300,left=100,top=100`;
    let msg = this.getText();
    msg = (msg != undefined) ? msg : 'Eu amo o @affsalfie!';
    msg = (msg != "") ? msg : 'Eu amo o @affsalfie!';
    var twtLink = 'https://twitter.com/home?status=' + encodeURIComponent(msg);
    window.open(twtLink, 'LOL', params);
    //window.open(twtLink, params);
}

function getText() {
    return document.getElementById('tweetInput').value.toString();
}


function resetCursor(txtElement) {
    if (txtElement.setSelectionRange) {
        txtElement.focus();
        txtElement.setSelectionRange(0, 0);
    } else if (txtElement.createTextRange) {
        var range = txtElement.createTextRange();
        range.moveStart('character', 0);
        range.select();
    }
}

function eraseText() {
    document.getElementById("tweetInput").value = "";
}
