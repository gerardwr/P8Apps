(() => {

  function getFace(){
      
  function drawTime(d) {    

      g.reset();
      g.clearRect(0,40,239,210);
      g.setColor(1,1,1);
      g.setFontAlign(0,0);
      g.setFont("Vector",20);
      g.drawString(Date(),120,60);
      g.drawString("gwr2",120,100);
      g.drawString("gwr3",120,140);
      g.drawString("gwr4",120,180);
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
