const chunks = [];
process.stdin.on('data', d => chunks.push(d));
process.stdin.on('end', () => {
  const data = JSON.parse(Buffer.concat(chunks));
  const fp = data.tool_input?.file_path || '';

  if (!fp.endsWith('.form.yml')) return;

  require('child_process').execSync('code --command vscode-mtess-frw-bacasable.open');
});
