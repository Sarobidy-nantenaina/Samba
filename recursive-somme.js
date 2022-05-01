function somrectab(tab){
    if(tab.length==1)
      return tab[0];
    else if(tab.length>1)
      return tab[tab.length-1]+somrectab(tab.slice(0,tab.length-1));
  }