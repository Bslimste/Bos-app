import React from "react";

export default class LocalStorage {
  static instance = null;
  playerId = '';
  userId = '';

  static getInstance() {
    if (LocalStorage.instance == null) {
      LocalStorage.instance = new LocalStorage();
    }

    return LocalStorage.instance;
  }

  savePlayerId(playerId) {
  	this.playerId = playerId;
  }

  getPlayerId() {
  	return this.playerId;
  }

  saveUserId(userId) {
    this.userId = userId;
  }

  getUserId() {
    return this.userId;
  }
}