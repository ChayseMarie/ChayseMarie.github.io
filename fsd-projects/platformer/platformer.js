$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
   toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(200, 650, 150, 20, "pink");
    createPlatform(800, 450, 150, 20, "purple");
    createPlatform(500, 550, 150, 20, "blue");
    createPlatform(
      0, 200, 150, 20, "black");
    createPlatform(1100, 500, 150, 20, "gray");



    // TODO 3 - Create Collectables
    createCollectable("steve", 610, 510);
    createCollectable("diamond", 850, 375);
    createCollectable("database", 310, 600);
    createCollectable("database", 1200, 450);
    
    // TODO 4 - Create Cannons
    createCannon("top", 600, 1005);
    createCannon("top", 1000, 1008);
    createCannon("left", 300, 1000);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
