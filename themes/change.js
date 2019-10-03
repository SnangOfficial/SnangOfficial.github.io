
var themeList = {'dark' : 'theme-dark.css', 'light' : 'theme-light.css'};
var themeUsing = 'light', themeDiv;

setThemeClickEvent();

function addThemesEvent(div){
  themeDiv = div;
}

function changeTheme(choice){
  document.getElementById('theme').href = './themes/' + themeList[choice.id];
  document.getElementById(themeUsing).className = "theme-selected-off";
  choice.className = "theme-selected-on";
  themeUsing = choice.id;
}
