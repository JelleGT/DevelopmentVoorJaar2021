var c = document.getElementById("myPrime");
var ctx = c.getContext("2d");
setTimeout(function(){
  ctx.beginPath();
  ctx.arc(940,500,40,0,2*Math.PI);
  ctx.strokeStyle = "#ffffff";
  ctx.stroke();
  ctx.fillStyle = "#e6e600";
  ctx.fill();
    setTimeout(function() {
      // Do a second thing
      ctx.beginPath();
      ctx.arc(940,500,60,0,2*Math.PI);
      ctx.stroke();
      ctx.fill();
      setTimeout(function() {
        // Do a second thing
        ctx.beginPath();
        ctx.arc(940,500,80,0,2*Math.PI);
        ctx.stroke();
        ctx.fill();
        setTimeout(function() {
          // Do a second thing
          ctx.beginPath();
          ctx.arc(940,500,100,0,2*Math.PI);
          ctx.stroke();
          ctx.fill();
          setTimeout(function() {
            // Do a second thing
            ctx.beginPath();
            ctx.arc(940,500,120,0,2*Math.PI);
            ctx.stroke();
            ctx.fill();
            setTimeout(function() {
              // Do a second thing
              ctx.beginPath();
              ctx.arc(940,500,140,0,2*Math.PI);
              ctx.stroke();
              ctx.fill();
              setTimeout(function() {
                // Do a second thing
                ctx.beginPath();
                ctx.arc(940,500,180,0,2*Math.PI);
                ctx.stroke();
                ctx.fill();
                setTimeout(function() {
                  // Do a second thing
                  ctx.beginPath();
                  ctx.arc(940,500,260,0,2*Math.PI);
                  ctx.stroke();
                  ctx.fill();
                  setTimeout(function() {
                    // Do a second thing
                    ctx.beginPath();
                    ctx.arc(940,500,400,0,2*Math.PI);
                    ctx.stroke();
                    ctx.fill();
                    setTimeout(function() {
                      // Do a second thing
                      ctx.beginPath();
                      ctx.arc(940,500,600,0,2*Math.PI);
                      ctx.stroke();
                      ctx.fill();
                    }, 100);
                  }, 100);
                }, 200);
              }, 100);
            }, 100);
          }, 200);
        }, 300);
      }, 200);
    }, 200);
  }, 300);
