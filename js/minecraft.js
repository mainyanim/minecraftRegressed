var minecraft = {};//namespace created


minecraft.createSky = function () {
  var columns = 20;
  var $row = $("<div/>", {
      class: 'row'
  });
  var $square = $("<div/>", {
      class: 'sky'
  });

  $(document).ready(function () {
      //add columns to the the temp row object
      for (var i = 0; i < 20; i++) {
          $row.append($square.clone());
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
      class: 'grass'
  });

  $(document).ready(function () {
      //add columns to the the temp row object
      for (var i = 0; i < 20; i++) {
          $row.append($square.clone());

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
      class: 'dirt'
  });

  $(document).ready(function () {
      //add columns to the the temp row object
      for (var i = 0; i < 20; i++) {
          $row.append($square.clone());
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
