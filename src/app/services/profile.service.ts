import { Injectable } from "@angular/core";
import { UserProfile } from "../interfaces/user-profile";

@Injectable({
  providedIn: "root"
})
export class ProfileService {
  private profile: UserProfile = {
    name: "Tyler Weiss",
    contact: "Tyler.k.weiss@gmailcom",
    bio: "I am tyler weiss?"
  };

  //getter
  getUserProfile() {
    return this.profile;
  }

  //setter
  setUserProfile(profile: UserProfile) {
    this.profile = profile;
  }

  constructor() {}
}
