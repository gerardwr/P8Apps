(() => {

  function getFace(){
      
  function drawTime(d) {    
      g.reset();
      g.clearRect(0,40,239,210);
      g.setColor(1,1,1);
      g.setFontAlign(0,0);
      g.setFont("Vector",44);
      var txt = convert(d.getHours());
      g.drawString("gwr",120,60);
      g.drawString(d.getHours() + ":" + d.getMinutes(),120,80);
    }

  function onSecond(){
     var t = new Date();
     if (t.getSeconds() === 0) drawTime(t);
  }

  function drawAll(){
     drawTime(new Date());
  }

  return {init:drawAll, tick:onSecond};
  }

return getFace;

})();
