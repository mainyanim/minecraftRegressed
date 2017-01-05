var minecraft = {};//namespace created

minecraft.tempMemory = "";//temp result onclick

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

minecraft.cellClicked = function(){
  if (minecraft.tempMemory === "pickaxe chosen") {
      $('#checkbox').removeClass('toolbox leaf dirt grass');
      if ($(this).hasClass('stone')) {
      $(this).removeClass('stone').addClass('sky')
      $('#checkbox').addClass('stone');
    }
  }
  if (minecraft.tempMemory === "axe chosen") {

      $('#checkbox').removeClass('toolbox leaf dirt stone');
      if ($(this).hasClass('tree')) {
      $(this).removeClass('tree').addClass('sky')
      $('#checkbox').addClass('tree');
    } else if ($(this).hasClass('leaf')) {
      $(this).removeClass('leaf').addClass('sky');
      $('#checkbox').addClass('leaf');
    }
  }
  if (minecraft.tempMemory === "shovel chosen") {
      $('#checkbox').removeClass('toolbox leaf stone tree');
      if ($(this).hasClass('dirt')) {
      $(this).removeClass('dirt').addClass('sky')
      $('#checkbox').addClass('dirt');
    } else if ($(this).hasClass('grass')) {
      $(this).removeClass('grass').addClass('sky');
      $('#checkbox').addClass('grass');
    }
    }
};

minecraft.createToolbox = function () {
  var $toolboxDiv = $("<div/>", {
      class: 'toolboxDiv',
  });
  $('body').on('click', '.cell', minecraft.cellClicked);
    $("#wrapper").append($toolboxDiv);

    var $pickAxe=$("<div/>", {
        class: "pickAxe",
        click:(function () {
          minecraft.tempMemory = "";
          if ($($axe).css("background-color", "blue") || $($shovel).css("background-color", "blue")) {
            $($axe).css("background-color","black");
            $($shovel).css("background-color","black");
            $($pickAxe).css("background-color", "blue")
          }
          minecraft.tempMemory = "pickaxe chosen";
          console.log(minecraft.tempMemory)


        
      })
    })
    $($pickAxe).attr('id','mPickAxe');
    $($toolboxDiv).append($pickAxe);

    var $axe=$("<div/>", {
        class: "axe",
        click:(function(){
          minecraft.tempMemory = "";
          if ($($pickAxe).css("background-color", "blue") || $($shovel).css("background-color", "blue")) {
            $($pickAxe).css("background-color","black");
            $($shovel).css("background-color","black");
          $($axe).css("background-color", "blue")
          minecraft.tempMemory= "axe chosen";
          console.log(minecraft.tempMemory)


            }

      })
    });
    $($axe).attr('id','mAxe');
    $($toolboxDiv).append($axe);

    var $shovel=$("<div/>",{
        class: "shovel",
        click:(function(){
          minecraft.tempMemory = "";
          if ($($pickAxe).css("background-color", "blue") || $($axe).css("background-color", "blue")) {
            $($pickAxe).css("background-color","black");
            $($axe).css("background-color","black");
            $($shovel).css("background-color", "blue")
          minecraft.tempMemory = "shovel chosen";
          console.log(minecraft.tempMemory)

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
// if (minecraft.tempMemory == "axe chosen") {
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
