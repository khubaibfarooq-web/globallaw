import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-dark-toggler',
  templateUrl: './dark-toggler.component.html',
  styleUrls: ['./dark-toggler.component.css']
})
export class DarkTogglerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function () {
      $(".trigger").click(function () {
        $(".navbar-light").toggleClass("darkmode-bg");
        $(".nav-link").toggleClass("dark-text");
        $(".my-brand").toggleClass("dark-text");
        $(".form-box").toggleClass("darkmode-content");
        $(".form-text").toggleClass("darkmode-content");
        $("#about").toggleClass("darkmode-bg");
        $(".rights-icon").toggleClass("rights-icon-dark");
        $(".d-mode-text").toggleClass("dark-text");
        $("#practice").toggleClass("darkmode-bg");
        $(".shadow").toggleClass("darkmode-content");
        $("#our-services").toggleClass("darkmode-bg");
        $(".our-service-thumb").toggleClass("darkmode-content");
        $("#our-team").toggleClass("darkmode-bg");
        $(".team-member").toggleClass("darkmode-content");
        $("#calltoday").toggleClass("darkmode-bg");
        $("#get-quote").toggleClass("darkmode-bg");
        $(".buy-now").toggleClass("dark-mode-btn");
        $("#footer").toggleClass("darkmode-bg");
        $("#test").toggleClass("darkmode-bg");
        $(".package-detail").toggleClass("darkmode-content");
        $("#pricing").toggleClass("darkmode-bg");
        $(".trigger").toggleClass("active");
      });

    });
  }

}
