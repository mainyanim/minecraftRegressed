var minecraft = {};//namespace created
// {1. create sky
// 2. create grass
// 3. create dirt
// 4. add some elements
// } - create world can be onload



minecraft.createSkyLine = function() {
for (var i = 0; i < 20; i++){
  $('body').append('<div id= '+i+'>sky'+i+'</div>');
  $('div').addClass("sky");
};



minecraft.createWorld = function () {
  minecraft.createSkyLine();
};

minecraft.createWorld();
