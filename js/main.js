document.addEventListener("DOMContentLoaded", function () {

async function getCount(url, elementId) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    document.getElementById(elementId).innerText = data.count;
  } catch (error) {
    console.error(error);
    document.getElementById(elementId).innerText = "N/A";
  }
}

async function getUniqueCount(url, elementId) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const count = data.features.length;
    document.getElementById(elementId).innerText = count;
  } catch (error) {
    console.error(error);
    document.getElementById(elementId).innerText = "N/A";
  }
}

const base = "https://services.arcgis.com/o6oETlrWetREI1A2/arcgis/rest/services/service_ff5d6d29688f4807a8c7ce2b32432f25/FeatureServer";

// 🌳 Trees (Layer 0)
getCount(
  `${base}/0/query?where=1%3D1&returnCountOnly=true&f=json`,
  "trees-count"
);

// 👧 Troops (Layer 1)
getUniqueCount(
  `${base}/1/query?where=1%3D1&outFields=troop_id&returnDistinctValues=true&f=json`,
  "troops-count"
);

// 🏢 Businesses (Layer 2)
getUniqueCount(
  `${base}/2/query?where=1%3D1&outFields=bbb_partner&returnDistinctValues=true&f=json`,
  "business-count"
);

});
