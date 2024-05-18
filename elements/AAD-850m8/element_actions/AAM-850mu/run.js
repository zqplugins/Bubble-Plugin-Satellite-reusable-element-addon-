function(instance, properties, context) {


  let targetClass = `antenna${properties.antenna_class}`;


  for (i = 1; i < 6; i++) {

    instance.publishState(`received_data${i}`, window[`antennaVariable${targetClass}DataToSend${i}`]);
    instance.publishState(`received_list_of_data${i}`, window[`antennaVariable${targetClass}ListDataToSend${i}`]);

  }



}
