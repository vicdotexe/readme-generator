const licenses = [
    {
      "key": "mit",
      "name": "MIT License",
      "spdx_id": "MIT",
      "url": "https://api.github.com/licenses/mit",
      "node_id": "MDc6TGljZW5zZW1pdA=="
    },
    {
      "key": "lgpl-3.0",
      "name": "GNU Lesser General Public License v3.0",
      "spdx_id": "LGPL-3.0",
      "url": "https://api.github.com/licenses/lgpl-3.0",
      "node_id": "MDc6TGljZW5zZW1pdA=="
    },
    {
      "key": "mpl-2.0",
      "name": "Mozilla Public License 2.0",
      "spdx_id": "MPL-2.0",
      "url": "https://api.github.com/licenses/mpl-2.0",
      "node_id": "MDc6TGljZW5zZW1pdA=="
    },
    {
      "key": "agpl-3.0",
      "name": "GNU Affero General Public License v3.0",
      "spdx_id": "AGPL-3.0",
      "url": "https://api.github.com/licenses/agpl-3.0",
      "node_id": "MDc6TGljZW5zZW1pdA=="
    },
    {
      "key": "unlicense",
      "name": "The Unlicense",
      "spdx_id": "Unlicense",
      "url": "https://api.github.com/licenses/unlicense",
      "node_id": "MDc6TGljZW5zZW1pdA=="
    },
    {
      "key": "apache-2.0",
      "name": "Apache License 2.0",
      "spdx_id": "Apache-2.0",
      "url": "https://api.github.com/licenses/apache-2.0",
      "node_id": "MDc6TGljZW5zZW1pdA=="
    },
    {
      "key": "gpl-3.0",
      "name": "GNU General Public License v3.0",
      "spdx_id": "GPL-3.0",
      "url": "https://api.github.com/licenses/gpl-3.0",
      "node_id": "MDc6TGljZW5zZW1pdA=="
    }
]

const listLicenses = function(){
    return licenses.map(x => x.name);
}

const getLicense = function(name){
    return licenses.find(x => x.name == name);
}

const getUrl = function(license){
    return `http://choosealicense.com/licenses/${license.key}/`
}

const getBadgeUrl = function(license){
    return `https://img.shields.io/badge/License-${license.spdx_id}-brightgreen`;
}
const getUrlMarkdown = function(licenseName){
    let license = getLicense(licenseName);
    return `[${licenseName}](${getUrl(license)})`
}

const getBadgeMarkdown = function(licenseName){
    let license = getLicense(licenseName);
    return `![${license.name}](${getBadgeUrl(license)})`
}

// const buildLicenseSection = function(projectName,licenseName){
//     let license = getLicense(licenseName);
//     return `${buildBadge(license)}\n\nThe ${projectName} project is under the [${license.name}](${getLicenseUrl(license)}). See the link for more details.`
// }

module.exports={
    listLicenses,
    getBadgeMarkdown,
    getUrlMarkdown
}