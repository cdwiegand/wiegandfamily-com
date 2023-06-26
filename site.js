let wiegand_page_init_count = 0;
function wiegand_page_init() {
  if (!window.wiegand_page_links) {
    console.warn("Links not yet loaded..");
    wiegand_page_init_count++;
    if (wiegand_page_init_count < 10) setTimeout(wiegand_page_init, 500);
    else console.error("Links never going to load, giving up!");
    return; // die!
  }

  const bgs = ["black", "purple", "red", "orange", "green", "white", "techelet"];
  const groupTemplateDiv = document.getElementById("group_template_div");
  groupTemplateDiv.style.display = "none";
  const itemTemplateDiv = document.getElementById("item_template_div");
  itemTemplateDiv.style.display = "none";

  wiegand_page_links.forEach((group, gidx) => {
    let newGroupHtml = groupTemplateDiv.innerHTML;
    newGroupHtml = newGroupHtml.replace(' id="group_template_div"', "");
    newGroupHtml = newGroupHtml.replace("{{title}}", group.title);
    let newGroup = document.createElement("div");
    newGroup.innerHTML = newGroupHtml;
    newGroup.id = "group_" + gidx;
    groupTemplateDiv.parentNode.appendChild(newGroup);
    newGroup.style.display = "inherit";

    group.links.forEach((val, idx) => {
      let newOneHtml = itemTemplateDiv.innerHTML;
      let defaultBackground = "bg-" + bgs[Math.floor(Math.random() * bgs.length)];
      newOneHtml = newOneHtml.replace(' id="item_template_div"', "");
      newOneHtml = newOneHtml.replace("{{href}}", val.href);
      newOneHtml = newOneHtml.replace("{{text}}", val.text);
      newOneHtml = newOneHtml.replace("{{icon}}", val.icon ?? "");
      newOneHtml = newOneHtml.replace("{{alt}}", val.alt ?? "");
      newOneHtml = newOneHtml.replace("{{bgcolor}}", val.bgcolor ?? defaultBackground);
      newOneHtml = newOneHtml.replace("{{description}}", val.description ?? "");
      newOneHtml = newOneHtml.replace(" template-", " ");
      let newOne = document.createElement("div");
      newOne.innerHTML = newOneHtml;
      newOne.id = "item_" + gidx + "_" + idx;
      newGroup.appendChild(newOne);
      newOne.style.display = "inherit";
    });
  });
}
wiegand_page_init();
