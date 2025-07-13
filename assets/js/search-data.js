// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-resume",
          title: "resume",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/resume/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "projects-us-baby-name-app",
          title: 'US Baby Name App',
          description: "Flask Application (python, pandas, matplotlib)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_baby_names/";
            },},{id: "projects-giant-pumpkin-dashboard",
          title: 'Giant Pumpkin Dashboard',
          description: "PostgreSQL Database, Google Maps API, Grafana Dashboard Development",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_pumpkin_database_api/";
            },},{id: "projects-giant-pumpkin-commonwealth-app",
          title: 'Giant Pumpkin Commonwealth App',
          description: "Shiny Application (R, shiny, tidyverse, ggplot)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_pumpkin_shiny_app/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
