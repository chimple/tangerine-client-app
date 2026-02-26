package org.rti.tangerineclientapp;

public enum DeepLinkParam {
  ACTIVITY_ID("activity_id"),
  ENDPOINT("endpoint"),
  AUTH("auth"),
  ACTOR("actor"),
  ONLINE_SURVEY("online_survey"),
  GROUP_ID("groupId"),
  FORM_ID("formId"),
  NAME("name"),
  MBOX("mbox");

  public final String key;

  private DeepLinkParam(String key) {
    this.key = key;
  }
}
