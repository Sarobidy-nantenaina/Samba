function rechdicho(elt,tab,debut,fin){
    let m;
    m = Math.floor((debut+fin)/2);
    if(debut > fin){
        return `le nombrbe que vous avez taper n'est pas dans le tableau`;
    }
    else if(debut<=fin){
       if(tab[m] == elt){
          return `le nombre que vous avez taper est bien dans le tableau`;
       }
        if(tab[m] < elt){
          return rechdicho(elt,tab,(m+1),fin);
       }
       if(tab[m] > elt){
          return rechdicho(elt,tab,debut,(m-1));
       }
    }
}