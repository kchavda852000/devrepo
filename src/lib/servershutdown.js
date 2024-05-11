async function servershutdown() {
  await process.exit();
  return { test: "pass" };
}

export default servershutdown;
