function status(req, res) {
  res.status(200).json({"status":"API is running"});
}

export default status;