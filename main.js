function toggle(element) {

  const className = element.className;
  const section = document.querySelector("section." + className);
  let sectionClass = section.className;
  if (sectionClass.match("hidden")) {
    section.className = sectionClass.replace(" hidden", "")
  } else {
    section.className = sectionClass + " hidden";
  }
}

function hideAll(element) {
  const sections = document.querySelectorAll("section.tabs");
  console.log(sections);
  for (let i = 0; i < sections.length; i++){
    if (!sections[i].className.match("hidden")) {
      console.log("hi");
      sections[i].className += " hidden";
    }

  }
}

function unhide(element) {
  element.className = element.className.replace(" hidden", "");
}


function bindEventListeners() {
  let menuItems = document.querySelectorAll("nav button");
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", function() {
      hideAll();
      const className = menuItems[i].className;
      const section = document.querySelector("section." + className);
      unhide(section);
      // toggle(menuItems[i]);


    })
  }
}



//Driver Code
bindEventListeners();