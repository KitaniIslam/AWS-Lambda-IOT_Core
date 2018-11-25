var awsIot = require("aws-iot-device-sdk");

var device = awsIot.device({
  keyPath: "credentials/your-private.pem.key",
  certPath: "credentials/your-certificate.pem.crt",
  caPath: "credentials/your-aws-iot-rootCA.crt",
  clientId: "",
  host: "",
  region: ""
});

exports.handler = (event, context) => {
  device.publish(
    "TestTopic",
    JSON.stringify({ test_data: "Hello From Lambda" }),
    function() {
      context.done();
    }
  );
};
