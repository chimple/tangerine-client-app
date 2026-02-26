package org.rti.tangerineclientapp;

public class Actor {
  private String name;
  private String mbox;

  public Actor(String name, String mbox) {
    this.name = name;
    this.mbox = mbox;
  }

  public String getName() {
    return name;
  }

  public String getMbox() {
    return mbox;
  }
}
