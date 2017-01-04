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
      //add columns to the the temp row object
      for (var i = 0; i < 20; i++) {
          var sq = $square.clone();
          sq.attr('id','sq'+i)
          $row.append(sq);
      }
      //clone the temp row object with the columns to the wrapper
      for (var i = 0; i < 9; i++) {
          $("#wrapper").append($row.clone());
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
      //add columns to the the temp row object
      for (var i = 0; i < 20; i++) {
        var gr = $square.clone();
        gr.attr('id', 'gr'+i)
          $row.append(gr);

      }
      //clone the temp row object with the columns to the wrapper
      for (var i = 0; i < 1; i++) {
          $("#wrapper").append($row.clone());
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
      //add columns to the the temp row object
      for (var i = 0; i < 20; i++) {
        var dr = $square.clone();
        dr.attr('id', 'dr'+i);
          $row.append(dr);
      }
      //clone the temp row object with the columns to the wrapper
      for (var i = 0; i < 4; i++) {
          $("#wrapper").append($row.clone());
      }
    })
}


minecraft.createWorld = function () {
  minecraft.createSky();
  minecraft.createGrass();
  minecraft.createDirt();
};

minecraft.createWorld();
