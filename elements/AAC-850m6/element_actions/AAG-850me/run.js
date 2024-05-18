function(instance, properties, context) {

  // this returns an array holding the list of texts (strings), booleans (yes/no) and integers (decimals and numbers)
  let getList = (thingWithList, startPosition, finishPosition) => {
    let returnedList = thingWithList.get(startPosition, finishPosition);
    return returnedList;
  }


  let targetClass = `antenna${properties.class_to_trigger}`;

  for (i = 1; i < 6; i++) {


    if (typeof properties[`value_to_send_${i}`] !== "undefined") {

      window[`antennaVariable${targetClass}DataToSend${i}`] = properties[`value_to_send_${i}`];

    }


    if (typeof properties[`list_of_values_to_send_${i}`] !== "undefined" && properties[`list_of_values_to_send_${i}`] !== null) {

      let acquiredList = getList(properties[`list_of_values_to_send_${i}`], 0, properties[`list_of_values_to_send_${i}`].length());

      window[`antennaVariable${targetClass}ListDataToSend${i}`] = acquiredList;

    }


  }




}
