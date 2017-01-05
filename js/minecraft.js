var minecraft = {};//namespace created

minecraft.tempMemory = [];//temp result onclick

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
          //wood created
          $("#rowSky7_sk3").removeClass("sky").addClass("leaf");
          $("#rowSky7_sk4").removeClass("sky").addClass("leaf");
          $("#rowSky7_sk5").removeClass("sky").addClass("leaf");
          $("#rowSky6_sk4").removeClass("sky").addClass("leaf");
          //bush created
          $("#rowSky5_sk14").removeClass("sky").addClass("leaf");
          $("#rowSky4_sk14").removeClass("sky").addClass("leaf");
          $("#rowSky4_sk13").removeClass("sky").addClass("leaf");
          $("#rowSky3_sk14").removeClass("sky").addClass("leaf");
          $("#rowSky3_sk15").removeClass("sky").addClass("leaf");
          $("#rowSky4_sk15").removeClass("sky").addClass("leaf");
          $("#rowSky4_sk16").removeClass("sky").addClass("leaf");
          $("#rowSky4_sk17").removeClass("sky").addClass("leaf");
          $("#rowSky5_sk16").removeClass("sky").addClass("leaf");
          $("#rowSky3_sk16").removeClass("sky").addClass("leaf");
          $("#rowSky2_sk15").removeClass("sky").addClass("leaf");
          //tree created
          $("#rowSky7_sk9").removeClass("sky").addClass("stone");
          $("#rowSky7_sk10").removeClass("sky").addClass("stone");
      }
  })


} //sky and default elements are created

//sky created
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
//grass created
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
//dirt created

minecraft.createToolbox = function () {
  var $toolboxDiv = $("<div/>", {
      class: 'toolboxDiv',
  });
    $("#wrapper").append($toolboxDiv);

    var $pickAxe=$("<div/>", {
        class: "pickAxe",
        click:(function () {
          minecraft.tempMemory = [];
          if ($($axe).css("background-color", "blue") || $($shovel).css("background-color", "blue")) {
            $($axe).css("background-color","black");
            $($shovel).css("background-color","black");
          $($pickAxe).css("background-color", "blue")
          minecraft.tempMemory.push("pickaxe chosen");
          console.log(minecraft.tempMemory)
          if (minecraft.tempMemory[0] === "pickaxe chosen") {
            var cellClicked = function () {
            $(this).removeClass('stone').addClass('sky')
            }
            $('body').on('click', '.cell', cellClicked);
            }
        }
      })
    })
    $($pickAxe).attr('id','mPickAxe');
    $($toolboxDiv).append($pickAxe);

    var $axe=$("<div/>", {
        class: "axe",
        click:(function(){
          minecraft.tempMemory = [];
          if ($($pickAxe).css("background-color", "blue") || $($shovel).css("background-color", "blue")) {
            $($pickAxe).css("background-color","black");
            $($shovel).css("background-color","black");
          $($axe).css("background-color", "blue")
          minecraft.tempMemory.push("axe chosen");
          console.log(minecraft.tempMemory)
          if (minecraft.tempMemory[0] === "axe chosen") {
            var cellClicked = function () {
            $(this).removeClass('leaf tree').addClass('sky')
            }
            $('body').on('click', '.cell', cellClicked);
            }
        }
        })
    });
    $($axe).attr('id','mAxe');
    $($toolboxDiv).append($axe);

    var $shovel=$("<div/>",{
        class: "shovel",
        click:(function(){
          minecraft.tempMemory = [];
          if ($($pickAxe).css("background-color", "blue") || $($axe).css("background-color", "blue")) {
            $($pickAxe).css("background-color","black");
            $($axe).css("background-color","black");
          $($shovel).css("background-color", "blue")
          minecraft.tempMemory.push("shovel chosen");
          console.log(minecraft.tempMemory)
          if (minecraft.tempMemory[0] === "shovel chosen") {
            var cellClicked = function () {
            $(this).removeClass('dirt grass').addClass('sky')
            }
            $('body').on('click', '.cell', cellClicked);
            }
        }
        })
    });
    $($shovel).attr('id','mshovel');
    $($toolboxDiv).append($shovel);

    var $checkTool=$("<div/>",{
        class: "toolref",
        click:(function(){
            alert("")
        })
    });
    $($checkTool).attr('id','checkbox');
    $($toolboxDiv).append($checkTool);
}
//toolbox created

// minecraft.toCraft = function () {
// if (minecraft.tempMemory[0] == "axe chosen") {
//   $('body').on('click', '.cell', cellClicked);
//   var cellClicked = function () {
//   $(".cell").removeClass('leaf').addClass('sky')
//   }
//   }
// }



// $('body').on('click', '.cell', cellClicked);



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
//do we actually need matrix?


// MAIN FUNCTION//
  minecraft.createWorld = function () {
  minecraft.createSky();
  minecraft.createGrass();
  minecraft.createDirt();
  minecraft.createMatrix();
  minecraft.createToolbox();
  // minecraft.toCraft();
};

// main function call
minecraft.createWorld();
