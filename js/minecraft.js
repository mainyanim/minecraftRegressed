var minecraft = {};//namespace created
// {1. create sky
// 2. create grass
// 3. create dirt
// 4. add some elements
// } - create world can be onload


minecraft.createSkyLine = function() {
$('<div></div>').attr("id","#ourSky");

for (var i = 0; i < 20; i++){
  $('#ourSky').append('<div id= '+i+'>sky'+i+'</div>');
  $('div').addClass("sky");

}

}



minecraft.createWorld = function () {
  minecraft.skyArea();
  minecraft.createSkyLine();
};

minecraft.createWorld();
