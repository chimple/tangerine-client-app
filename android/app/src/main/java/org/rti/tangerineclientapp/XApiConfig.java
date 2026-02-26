package org.rti.tangerineclientapp;

public class XApiConfig {
  private String endpoint;
  private String auth;
  private Actor actor;

  public XApiConfig(String endpoint, String auth, Actor actor) {
    this.endpoint = endpoint;
    this.auth = auth;
    this.actor = actor;
  }

  public String getEndpoint() {
    return endpoint;
  }

  public String getAuth() {
    return auth;
  }

  public Actor getActor() {
    return actor;
  }
}
