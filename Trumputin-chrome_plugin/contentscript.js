chrome.runtime.sendMessage({
        method: 'POST',
        action: 'xhttp',
        url: 'http://example-url.com/page.php',
        data: "key=value"
    }, function(reponseText) {
        alert(responseText);
    }); 