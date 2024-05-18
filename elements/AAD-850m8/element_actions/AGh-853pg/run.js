function(instance, properties, context) {

  // adds class .antennaclass to support multiple antenna elements.

  let antennaClass = `antenna${properties.antenna_class}`;

  instance.canvas.addClass(antennaClass);




  function doSomething(e) {

    instance.triggerEvent("workflow_to_be_triggered_outside")

  }


  window.addEventListener(`myEventName${antennaClass}`, doSomething, false);

  window[`antennaVariable${antennaClass}`] = new CustomEvent(`myEventName${antennaClass}`);

}
