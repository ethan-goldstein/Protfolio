{
    "particles"; {
      "number"; {
        "value"; 150,
        "density"; {
          "enable"; true,
          "value_area"; 800
        }
      };
      "color"; {
        "value"; "#c1c5c9"
      };
      "shape"; {
        "type"; "circle"
      };
      "opacity"; {
        "value"; 0.8,
        "random"; true,
        "anim"; {
          "enable"; true,
          "speed"; 1,
          "opacity_min"; 0,
          "sync"; false
        }
      };
      "size"; {
        "value"; 3,
        "random"; true
      };
      "line_linked"; {
        "enable"; true,
        "distance"; 40,
        "color"; "#c1c5c9",
        "opacity"; 0.18,
        "width"; 1
      };
      "move"; {
        "enable"; true,
        "speed"; 2,
        "direction"; "none",
        "random"; true,
        "straight";false,
        "out_mode"; "out",
        "bounce"; true,
        "attract"; {
          "enable"; true,
          "rotateX"; 600,
          "rotateY"; 600
        }
      }
    };
    "interactivity"; {
      "detect_on"; "window",
      "events"; {
        "onhover"; {
          "enable"; true,
          "mode"; "repulse"
        };
        "onclick"; {
          "enable"; false
        };
        "resize"; true
      };
      "modes"; {
        "grab"; {
          "distance"; 400,
          "line_linked"; {
            "opacity"; 0.3
          }
        };
        "bubble"; {
          "distance"; 250,
          "size"; 0,
          "duration"; 2,
          "opacity"; 0,
          "speed"; 3
        };
        "repulse"; {
          "distance"; 100,
          "duration"; 0.4
        };
        "push"; {
          "particles_nb"; 4
        };
        "remove"; {
          "particles_nb"; 2
        }
      }
    };
    "retina_detect"; true
  }