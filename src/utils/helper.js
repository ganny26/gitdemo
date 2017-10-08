
var cheerio = require('cheerio');
var request = require('request');
let Helper = {
    getElementByXpath: function (tagsList, strList) {
        let tags = tagsList;
        let preferredStrings = strList;
        let result = [];
        for (let i = 0; i < tags.length; i++) {
            for (let j = 0; j < preferredStrings.length; j++) {
                let pattern = "//" + tags[i] + "[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'),'" + preferredStrings[j] + "')" + " and starts-with(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'),'" + preferredStrings[preferredStrings.length - 1] + "')" + "]";
                console.log(pattern);
                if (document.evaluate(pattern, document, null, XPathResult.ANY_UNORDERED_NODE_TYPE, null).singleNodeValue != null) {
                    let nodeValue = document.evaluate(pattern, document, null, XPathResult.ANY_UNORDERED_NODE_TYPE, null).singleNodeValue;
                    result.push(nodeValue);
                }
            }
        }
        return result;
    },
    grabHTMLByURL: function (url) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.onload = function () {
                if (xhr.status == 200) {
                    resolve(xhr.response);
                }
                else {
                    reject(Error(xhr.statusText));
                }
            };
            xhr.onerror = function () {
                reject(Error("Network Error"));
            };
            xhr.send();
        });
    },
    scrapHTML: function (url,cb) {
        var ingredata = "";
        var methoddata = "";
        console.log("Scrapping HTML",url)
        request(url, function (error, response, html) {
            //console.log(html);
            if (!error) {
                var data = cheerio.load(html);
                ingredata = data('.ingredientstitle').next().text();
              cb(ingredata)
            }
        })

        
    }

}

export default Helper;