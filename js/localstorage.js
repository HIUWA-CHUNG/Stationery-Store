localStorage['name'] = 'text';
localStorage['quantity'] = 'value';

var showStorage = function () {
  var storage = window.localStorage;
  for (var i = 0, len = storage.length; i < len; i++) {
    console.log(storage.key(i) + ':' + storage.getItem(storage.key(i)));
  }
};
showStorage();

// set cookie

document.cookie = 'username=text; expires = time()+3600)';
document.cookie = 'quantity=value; expires = time()+3600)';

function get_cookie(username) {
  var arr;
  var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
  if ((arr = document.cookie.match(reg))) {
    return arr[2];
  } else {
    return null;
  }
}

function get_cookie(quantity) {
  var arr;
  var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
  if ((arr = document.cookie.match(reg))) {
    return arr[2];
  } else {
    return null;
  }
}

function del_cookie(username) {
  var expTime = new Date();
  expTime.setTime(expTime.getTime() - 1);
  var cookieValue = get_cookie(username);
  if (cookieValue != null) {
    document.cookie =
      name + '=' + cookieValue + ';expires=' + expTime.toGMTString();
  }
}
function del_cookie(quantity) {
  var expTime = new Date();
  expTime.setTime(expTime.getTime() - 1);
  var cookieValue = get_cookie(quantity);
  if (cookieValue != null) {
    document.cookie =
      quantity + '=' + cookieValue + ';expires=' + expTime.toGMTString();
  }
}

alert(get_cookie('username'));
alert(get_cookie('quantity'));
del_cookie('username');
del_cookie('quantity');
