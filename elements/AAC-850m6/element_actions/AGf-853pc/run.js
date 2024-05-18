function(instance, properties, context) {



  let targetClass = `antenna${properties.class_to_trigger}`;

  let targetEventVariableName = `antennaVariable${targetClass}`;

  window.dispatchEvent(window[targetEventVariableName]);




}
