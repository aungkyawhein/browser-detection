const DeviceInfo = () => {
  const userAgent = navigator.userAgent;
  let deviceType = "Desktop";
  if (/iPad|Android/i.test(userAgent) && !/Mobile/i.test(userAgent)) {
      deviceType = "Tablet";
  } else if (/iPhone|iPod/i.test(userAgent)) {
      deviceType = "Mobile";
  } else if (/Android/i.test(userAgent)) {
      deviceType = "Mobile";
  }

  return deviceType;
};
const deviceType = DeviceInfo();
document.getElementById('b').textContent = deviceType;