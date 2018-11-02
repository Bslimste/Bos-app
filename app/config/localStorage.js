import React from "react";

export default class LocalStorage {
  static instance = null;
  playerId = "";
  projectDetail = {
    title: "",
    desc: "",
    author: "",
    creatorName: "",
    creatorProfilePhoto: ""
  };

  static getInstance() {
    if (LocalStorage.instance == null) {
      LocalStorage.instance = new LocalStorage();
    }

    return LocalStorage.instance;
  }

  savePlayerId(playerId) {
    this.playerId = playerId;
  }

  saveProjectDetail(obj) {
    this.projectDetail.title = obj.title;
    this.projectDetail.desc = obj.desc;
    this.projectDetail.author = obj.author;
    this.projectDetail.creatorName = obj.creatorName;
    console.log(obj.creatorProfilePhoto);
    this.projectDetail.creatorProfilePhoto = obj.creatorProfilePhoto;
  }

  getProjectDetail() {
    return this.projectDetail;
  }

  getPlayerId() {
    return this.playerId;
  }
}
