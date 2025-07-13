const soopQuery = {
  operationName: "getStreamersLiveList",
  variables: {},
  query: `
    query getStreamersLiveList {
      getStreamersLiveList {
        name
        isLive
        platform
        streamUrl
      }
    }
  `
};

fetch("https://api.soop.gg/graphql", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(soopQuery)
})
  .then(res => res.json())
  .then(data => {
    const liveList = data.data.getStreamersLiveList;
    const ruru = liveList.find(streamer => streamer.name === "주르르");

    if (ruru && ruru.isLive) {
      console.log("[SOOP] 생방 상태:", ruru);
    }
  })
  .catch(err => console.error("SOOP 생방송 상태 에러:", err));