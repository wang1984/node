const path=require('path');

var str='c:\\wamp\\www\\a.html';

var obj=path.parse(str);
//root      c:\\ 
//base      a.html
//ext       .html
//dir       c:\\wamp\\www\\
//name      a
console.log(obj);
