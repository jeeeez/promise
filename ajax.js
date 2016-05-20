var ajax = function(url) {
	return new Promise(function(resolve, reject) {
		var xhq = new XMLHttpRequest();
		xhq.open('get', url);
		xhq.onload = function(data) {
			if (xhq.readyState === 4) {
				if (xhq.status === 200) {
					resolve(JSON.parse(xhq.responseText));
				}
			}
		}
		xhq.onerror = function(e) {
			reject(e);
		}
		xhq.send(null);
	});
}
