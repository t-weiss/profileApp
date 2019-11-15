import { Component, OnInit } from "@angular/core";
import { ProfileService } from "../services/profile.service";
import { Router } from "@angular/router";
import { UserProfile } from "../interfaces/user-profile";
@Component({
  selector: "app-edit-component",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  profile: UserProfile = {
    name: "",
    contact: "",
    bio: ""
  };

  constructor(private profileService: ProfileService, private router: Router) {}
  onSubmit() {
    this.profileService.setUserProfile(this.profile);
    this.router.navigate(["profile"]);
  }

  ngOnInit() {
    this.profile = this.profileService.getUserProfile();
  }
}
