window.BENCHMARK_DATA = {
  "lastUpdate": 1680284879065,
  "repoUrl": "https://github.com/MystenLabs/sui",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "damirka.ru@gmail.com",
            "name": "Damir Shamanaev",
            "username": "damirka"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "71988c278600e60713ff91e21312289cba30eb4c",
          "message": "[framework] Adds `kiosk::set_owner_custom` to set the owner field manually (#10218)",
          "timestamp": "2023-03-31T20:37:34+03:00",
          "tree_id": "d8e3089b561f9bedb267fc2aeca778aea7397340",
          "url": "https://github.com/MystenLabs/sui/commit/71988c278600e60713ff91e21312289cba30eb4c"
        },
        "date": 1680284875927,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 180519799,
            "range": "± 10555875",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 307489,
            "range": "± 7992",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}