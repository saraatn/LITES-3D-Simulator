// Tracker Logic: Hard-coded mapping to ensure only the real stations turn red
  function markSceneAsVisited(sceneId) {
    var targetDotId = null;

    // Force strict matching: mapping the raw Marzipano scene ID to your specific map dot
    if (sceneId === "0-entrance-1") { targetDotId = "0-entrance-1"; }
    else if (sceneId === "2-5" || sceneId === "5") { targetDotId = "2-5"; }
    else if (sceneId === "3-8" || sceneId === "8") { targetDotId = "3-8"; }
    else if (sceneId === "4-10" || sceneId === "10") { targetDotId = "4-10"; }
    else if (sceneId === "5-15" || sceneId === "15") { targetDotId = "5-15"; }

    // If it's a real station, paint ONLY that dot red
    if (targetDotId) {
      var activeDot = document.querySelector('.map-dot[data-scene="' + targetDotId + '"]');
      if (activeDot) {
        activeDot.classList.remove('unvisited');
        activeDot.classList.add('visited');
      }
    }
  }

  // Optimized Switch Scene function
  function switchScene(scene) {
    stopAutorotate();
    scene.view.setParameters(scene.data.initialViewParameters);
    
    scene.scene.switchTo();
    
    // Evaluates the strict station check immediately upon arrival
    markSceneAsVisited(scene.data.id);
    
    startAutorotate();
    updateSceneName(scene);
    updateSceneList(scene);
  }
