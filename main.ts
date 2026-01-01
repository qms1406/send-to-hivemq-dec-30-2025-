input.onButtonPressed(Button.A, function () {
    ESP8266_IoT.publishMqttMessage("hello", "testtopic/1", ESP8266_IoT.QosList.Qos0)
})
ESP8266_IoT.MqttEvent("testtopic/2", ESP8266_IoT.QosList.Qos0, function (message) {
    basic.showString("" + (message))
})
ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
ESP8266_IoT.connectWifi("G", "223334444")
ESP8266_IoT.setMQTT(
ESP8266_IoT.SchemeList.TLS,
"0",
"user12",
"Abc@123456",
""
)
ESP8266_IoT.connectMQTT("37108b8b8b524e29aeac65a4aa451e05.s1.eu.hivemq.cloud", 8883, false)
OLED.init(128, 64)
OLED.clear()
basic.forever(function () {
    if (ESP8266_IoT.wifiState(true)) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
