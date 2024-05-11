export default async function handler(req, res) {
  //   console.log("in API Internal", req.body);
  //   let dbData = await servershutdown();
  res.send(JSON.stringify({ test: "updated4" }));
}
