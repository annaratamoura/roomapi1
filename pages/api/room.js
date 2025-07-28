export default async function handler(req, res) {
  const { id } = req.query

  if (!id) {
    return res.status(400).json({ error: "Missing room ID" })
  }

  try {
    const response = await fetch(
      `https://api.sheetbest.com/sheets/9d96c8f3-19d6-4d09-84f3-92bfdaca7f47/search?id=${id}`
    )
    const data = await response.json()

    if (data.length === 0) {
      return res.status(404).json({ error: "Room not found" })
    }

    return res.status(200).json(data[0])
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch data" })
  }
}
