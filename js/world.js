

var minecraft={};

minecraft.sky=20;
minecraft.clouds="";
minecraft.grass="";
minecraft.dirt="";

minecraft.world=[];

// minecraft.world.push('test');
// console.log(minecraft.world);

for(var i=0;i<minecraft.sky;i++){
    var sky=$("<div/>");
    sky.addClass("sky");
    minecraft.world[i]=sky;
}

function cellClicked() {
    $(this).removeClass('sky').addClass('tree');
}

$('body').on('click','.cell',cellClicked);

//$(".row:eq(5) .cell:eq(8)").addClass('tree')