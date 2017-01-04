var minecraft = {};//namespace created


minecraft.createSky = function () {
  var columns = 20;
  var $row = $("<div/>", {
      class: 'row'
  });
  var $square = $("<div/>", {
      class: 'sky cell'

  });

  $(document).ready(function () {
      //clone the temp row object with the columns to the wrapper
      for (var i = 0; i < 8; i++) {
          var row = $row.clone();
          var rowId = 'rowSky' + i;
          row.attr('id', rowId);

          //add columns to the the temp row object
          for (var j = 0; j < columns; j++) {
              var sk = $square.clone();
              sk.attr('id', rowId + '_sk' + j);
              row.append(sk);
          }

          $("#wrapper").append(row);
          $("#rowSky7_sk15").removeClass("sky").addClass("tree");
          $("#rowSky6_sk15").removeClass("sky").addClass("tree");
          $("#rowSky5_sk15").removeClass("sky").addClass("tree");
      }
  })


} //create sky

minecraft.createGrass = function () {
  var columns = 20;
  var $row = $("<div/>", {
      class: 'row'
  });
  var $square = $("<div/>", {
      class: 'grass cell'
  });

  $(document).ready(function () {
      //clone the temp row object with the columns to the wrapper
      for (var i = 0; i < 1; i++) {
          var row = $row.clone();
          var rowId = 'rowGrass' + i;
          row.attr('id', rowId);

          //add columns to the the temp row object
          for (var j = 0; j < columns; j++) {
              var gr = $square.clone();
              gr.attr('id', rowId + '_gr' + j);
              row.append(gr);
          }

          $("#wrapper").append(row);
      }
  })
}


minecraft.createDirt = function () {
  var columns = 20;
  var $row = $("<div/>", {
      class: 'row'
  });
  var $square = $("<div/>", {
      class: 'dirt cell'
  });

  $(document).ready(function () {
      //clone the temp row object with the columns to the wrapper
      for (var i = 0; i < 4; i++) {
          var row = $row.clone();
          var rowId = 'rowdirt' + i;
          row.attr('id', rowId);

          //add columns to the the temp row object
          for (var j = 0; j < columns; j++) {
              var dr = $square.clone();
              dr.attr('id', rowId + '_dr' + j);
              row.append(dr);
          }

          $("#wrapper").append(row);
      }
  })
}


minecraft.createMatrix = function () {
minecraft.matrix = new Array();
    minecraft.skyArrRow1 = new Array(20);
    minecraft.skyArrRow2 = new Array(20);
    minecraft.skyArrRow3 = new Array(20);
    minecraft.skyArrRow4 = new Array(20);
    minecraft.skyArrRow5 = new Array(20);
    minecraft.skyArrRow6 = new Array(20);
    minecraft.skyArrRow7 = new Array(20);
    minecraft.skyArrRow8 = new Array(20);

    //overriding sky for tree
    minecraft.skyArrRow8[7]="tree";

    minecraft.grassArr = new Array(20);
    minecraft.dirtArr1=new Array(20);
    minecraft.dirtArr2=new Array(20);
    minecraft.dirtArr3=new Array(20);
    minecraft.dirtArr4=new Array(20);

minecraft.matrix.push(minecraft.skyArr,minecraft.grassArr, minecraft.dirtArr);
};


minecraft.createToolbox = function () {
  var $toolboxDiv = $("<div/>", {
      class: 'toolboxDiv'
  });
    $("#wrapper").append($toolboxDiv);

    var $pickAxe=$("<div/>", {
        class: "pickAxe"
    });

    $($toolboxDiv).append($pickAxe);

    var $axe=$("<div/>", {
        class: "axe"
    });

    $($toolboxDiv).append($axe);

    var $shovel=$("<div/>",{
        class: "shovel"
    });

    $($toolboxDiv).append($shovel);

}



minecraft.toolBox=function(pickAxe,axe,shovel){
    this.pickAxe=pickAxe;
    this.axe=axe;
    this.shovel=shovel;




    //add or removing class on click.
    function clickTools(e){
        pickAxe=e.target;
        axe=e.target;
        shovel=e.target;
    }
};




  minecraft.createWorld = function () {
  minecraft.createSky();
  minecraft.createGrass();
  minecraft.createDirt();
  minecraft.createMatrix();
  minecraft.createToolbox();
  minecraft.toolBox();
};

minecraft.createWorld();
