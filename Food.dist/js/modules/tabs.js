function tabs(
  tabsSelector,
  tabsContentSelector,
  tabsParentSelector,
  activeClass
) {
  // Tabs
  const tabs = document.querySelectorAll(tabsSelector);
  const tabsContent = document.querySelectorAll(tabsContentSelector);
  const tabsParent = document.querySelector(tabsParentSelector);

  function hideTaskContent() {
    tabsContent.forEach((tab) => {
      tab.style.display = "none";
    });

    tabs.forEach((tab) => {
      tab.classList.remove(activeClass);
    });
  }

  function showTaskContent(i = 0) {
    tabsContent[i].style.display = "block";

    tabs[i].classList.add(activeClass);
  }
  hideTaskContent();
  showTaskContent();

  tabsParent.addEventListener("click", (event) => {
    const target = event.target;

    if (target && target.classList.contains(tabsSelector.slice(1))) {
      tabs.forEach((tab, index) => {
        if (target == tab) {
          hideTaskContent();
          showTaskContent(index);
        }
      });
    }
  });
}

export default tabs;
