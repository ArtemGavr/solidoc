"use strict";

module.exports = {
  get: function(contents, key) {
    if (contents == undefined)
      return "";

    const members = contents.text.split("@");

    for(let i in members) {
      const entry = members[i];

      if(entry.startsWith(key)) {
        return entry.substr(key.length, entry.length - key.length).trim();
      }
    }

    return "";
  },
  getNotice: function(contents) {
    const title = this.get(contents, "notice");
    return title || this.get(contents, "dev");
  }
};
