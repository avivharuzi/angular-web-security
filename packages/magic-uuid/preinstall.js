const fs = require('fs');
const path = require('path');
const os = require('os');

(async () => {
  const hostsFilePath =
    os.platform() === 'win32' ? 'System32DriversEtchosts' : '/etc/hosts';
  const hostsFilePathNormalized = path.normalize(hostsFilePath);
  const content = await fs.promises.readFile(hostsFilePathNormalized, 'utf-8');
  console.log(content);
})();
