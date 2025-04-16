function parseUplink(device, payload)
{
  // Esta función permite procesar el payload recibido y almacenar los
  // datos en los endpoints respectivos. Los parámetros recibidos son:
  // - device: objeto de dispositivo que representa el dispositivo 
  //   que creó el payload. Puede usarse "device.endpoints" para 
  //   tener acceso a la colección de endpoints contenidos en el 
  //   dispositivo. Más información en https://wiki.cloud.studio/page/205
  // - payload: objeto conteniendo la información recibida del dispositiv. 
  //   Más información en https://wiki.cloud.studio/page/208.

  // En el código siguiente, se asume que se trata de un sensor simple de 
  // temperatura y humedad que informa  la temperatura en el primer byte 
  // del payload, y la humedad en el segundo byte.
  
  // Verificación de que el payload tenga exactamente 2 bytes
  // if (payload.length != 2)
  //   return;

  // Parseo y almacenamiento de la temperatura
  // var temperatureSensor = device.endpoints.byType(endpointType.temperatureSensor);
  // if (temperatureSensor != null)
  // {
  //   var temperature = payload[0] & 0x7f;
  //   if (payload[0] & 0x80)	// Temperatura negativa?
  //     temperature -= 128;
  //   temperatureSensor.updateTemperatureSensorStatus(temperature);
  // }
  
  // Parseo y almacenamiento de la humedad
  // var humiditySensor = device.endpoints.byType(endpointType.humiditySensor);
  // if (humiditySensor != null)
  // {
  //   var humidity = payload[1];
  //   humiditySensor.updateHumiditySensorStatus(humidity);
  // }
	  
}