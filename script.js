const bootLines = [
  'SYSTEM BOOT // EEE_PORTFOLIO_OS V1.0',
  'CHECK_CPU.....................OK',
  'CHECK_MEMORY..................OK',
  'LOAD_DRIVERS..................OK',
  'LOAD_SKILLS...................OK',
  'PROJECT_SCAN..................OK',
  'INIT_KERNEL...................OK',
  'ESTABLISH_IOT_BUS.............OK',
  'LAUNCH_INTERFACE..............OK'
];

const bootLog = document.getElementById('bootLog');

let index = 0;
function typeBootLine() {
  if (!bootLog) return;

  const line = document.createElement('div');
  line.textContent = bootLines[index % bootLines.length];
  bootLog.appendChild(line);

  if (bootLog.children.length > 12) {
    bootLog.removeChild(bootLog.firstChild);
  }

  index += 1;
  const jitter = 120 + Math.floor(Math.random() * 140);
  setTimeout(typeBootLine, jitter);
}

typeBootLine();
