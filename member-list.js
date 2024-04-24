const tag = document.getElementById('member-list');

fetch("webring.json") // Import data from webring.json
.then((response) => {
  return response.json();
})
.then((data) => webring(data));

fetch("sites.json") // Import data from sites.json
.then((response) => {
  return response.json();
})
.then((data) => sites(data));




// ----------------------------------------------------------------

function webring(data) {

    tag.insertAdjacentHTML('beforebegin', `
    <div id="webringInfo">
    <a id="webringName" target="_blank" href='index.html'>${data.webringInfo[0].webringName}</a>
    </div>
    `);
}

function sites(data) {
  const regex = /^https:\/\/|\/$/g;
  let list = "";
  let i;

  tag.insertAdjacentHTML('afterbegin', `
  <p id="memberCount">there is <b>x${data.webringSites.length}</b> members in the ~misc-ring~</p>
  `);

for (i = 0; i < data.webringSites.length; i++) {
    list += `
    <div class="webringMember">
    <ul>
    <li id="siteOwner">${data.webringSites[i].siteOwner}</li>
    <li id="siteName"><a target="_blank" href='${data.webringSites[i].siteURL}'>${data.webringSites[i].siteName.replace(regex, "")}</a></li>
    <li id="siteURL"><a target="_blank" href='${data.webringSites[i].siteURL}'>${data.webringSites[i].siteURL.replace(regex, "")}</a></li>
    </ul>
    </div>
    `;
}

tag.insertAdjacentHTML('beforeend', `${list}`);
}
