
console.log('Welcome to yeyeyeyeye.');
var engine = "baidu";
var searchto = {'google' : 'https://www.google.com/search?q=%s&oq=%s&ie=UTF-8',
                'baidu' : 'https://www.baidu.com/s?wd=%s',
                'mengniang' : 'https://zh.moegirl.org/index.php?search=%s',
                'bilibili' : 'https://search.bilibili.com/all?keyword=%s&from_source=banner_search',
                'csdn' : 'https://so.csdn.net/so/search/s.do?q=%s',
                'luogu' : 'https://www.luogu.org/problem/list?keyword=%s',
                'github' : 'https://github.com/search?q=%s'};
var searchnan = {'google' : 'https://www.google.com/',
                 'baidu' : 'https://www.baidu.com/',
                 'mengniang' : 'https://zh.moegirl.org/Mainpage',
                 'bilibili' : 'https://www.bilibili.com',
                 'csdn' : 'https://www.csdn.net/',
                 'luogu' : 'https://www.luogu.org',
                 'github' : 'https://github.com/'};

function chs(c){
  document.getElementById(engine).className = 'e-selected-off';
  document.getElementById(c.id).className = 'e-selected-on';
  document.getElementById('link-show').innerHTML = c.innerHTML + '<';
  if (engine == c.id)
    window.open(searchnan[c.id]);
  engine = c.id;
}

function schboxKeydown(){
  if (window.event){
    var key = window.event.keyCode;
    if (key == 13 || key == 10)
      search();
  }
}

function getTargetLink(altrnatingText){
  if (altrnatingText == '')
    return searchnan[engine];
  else
    return searchto[engine].replace('%s', altrnatingText);
}

function search(){
  var schbox = document.getElementById('schbox');
  var url = getTargetLink(schbox.value);
  window.open(url);
}

function schboxClear(){
  document.getElementById('schbox').value = '';
  document.getElementById('schbox').focus();
}
