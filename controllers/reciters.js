import fs from "fs";

// get all reciters
export async function getReciters(req, res) {
  try {
    const file = JSON.parse(
      fs.readFileSync(new URL("../data/reciters.json", import.meta.url))
    );
    res.status(200).json(file);
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
}

// get suras of reciter
export async function getReciter(req, res) {
  try {
    const { id } = req.params;
    const file = JSON.parse(
      fs.readFileSync(new URL("../data/" + id + ".json", import.meta.url))
    );
    res.status(200).json(file);
  } catch (error) {
    res.status(500).json({ success: false, error: "invalid url" });
  }
}
