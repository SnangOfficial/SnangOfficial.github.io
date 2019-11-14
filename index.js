
console.log('Welcome to yeyeyeyeye.');
console.log('Background source from: bing\'s everyday pirture.');
var engine = 2, eAmo = 5;
var searchto = {'google' : 'https://www.google.com/search?q=%s&oq=%s&ie=UTF-8',
                'baidu' : 'https://www.baidu.com/s?wd=%s',
                'mengniang' : 'https://zh.moegirl.org/index.php?search=%s',
                'bilibili' : 'https://search.bilibili.com/all?keyword=%s&from_source=banner_search',
                'luogu' : 'https://www.luogu.org/problem/list?keyword=%s'};
var searchnan = {'google' : 'https://www.google.com/',
                 'baidu' : 'https://www.baidu.com/',
                 'mengniang' : 'https://zh.moegirl.org/Mainpage',
                 'bilibili' : 'https://www.bilibili.com',
                 'luogu' : 'https://www.luogu.org'};
var cnname = {'google' : '谷歌',
                 'baidu' : '百度',
                 'mengniang' : '萌娘',
                 'bilibili' : 'B站',
                 'luogu' : '洛谷'};
var eorder = {1 : 'google',
                2 : 'baidu',
                3 : 'luogu',
                4 : 'bilibili',
                5 : 'mengniang'};

// 获取相邻的搜索引擎的下标
function getNearbyEngine(i){
  if (engine + i <= 0)
    return eAmo;
  else if (engine + i > eAmo)
    return 1;
  else
    return engine + i;
}

// The left button of the choice of engine.
// 引擎选择的左按钮
function lbtn_click(){
  if (--engine <= 0)
    engine = eAmo;
  var le = eorder[getNearbyEngine(-1)], mid = eorder[getNearbyEngine(0)], ri = eorder[getNearbyEngine(1)];
  document.getElementById('e-left').innerHTML = cnname[le];
  document.getElementById('e-middle').innerHTML = cnname[mid];
  document.getElementById('e-right').innerHTML = cnname[ri];
}

// The right button of the choice of engine.
// 引擎选择的右按钮
function rbtn_click(){
  if (++engine > eAmo)
    engine = 1;
  var le = eorder[getNearbyEngine(-1)], mid = eorder[getNearbyEngine(0)], ri = eorder[getNearbyEngine(1)];
  document.getElementById('e-left').innerHTML = cnname[le];
  document.getElementById('e-middle').innerHTML = cnname[mid];
  document.getElementById('e-right').innerHTML = cnname[ri];
}

// check what keys the user press down.
function schboxKeydown(){
  if (window.event){
    var key = window.event.keyCode;
    if (key == 13 || key == 10)
      search();
    if (key == 38)
	  lbtn_click();
	if (key == 40)
	  rbtn_click();
  }
}

// Get the url leading to searching.
function getTargetLink(altrnatingText){
  if (altrnatingText == '')
    return searchnan[eorder[engine]];
  else
    return searchto[eorder[engine]].replace('%s', altrnatingText);
}

// Search.
function search(){
  var schbox = document.getElementById('schbox');
  var url = getTargetLink(schbox.value);
  window.open(url);
}

function e_middle_click(){
  window.open(searchnan[eorder[engine]]);
}

function clean(){
  var schbox = document.getElementById('schbox');
  schbox.value = "";
  schbox.focus();
}