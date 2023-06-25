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
  const templateDiv = document.getElementById("template_div");
  wiegand_page_links.forEach((val, idx) => {
    let newOneHtml = templateDiv.innerHTML;
    let defaultBackground = "bg-" + bgs[Math.floor(Math.random() * bgs.length)];
    newOneHtml = newOneHtml.replace('id="template_div"', 'id="item_' + idx + '"');
    newOneHtml = newOneHtml.replace("{{href}}", val.href);
    newOneHtml = newOneHtml.replace("{{text}}", val.text);
    newOneHtml = newOneHtml.replace("{{icon}}", val.icon ?? "");
    newOneHtml = newOneHtml.replace("{{alt}}", val.alt ?? "");
    newOneHtml = newOneHtml.replace("{{bgcolor}}", val.bgcolor ?? defaultBackground);
    newOneHtml = newOneHtml.replace("{{description}}", val.description ?? "");
    newOneHtml = newOneHtml.replace(" template-", " ");
    let newOne = document.createElement("div");
    newOne.innerHTML = newOneHtml;
    templateDiv.parentNode.insertBefore(newOne, templateDiv);
    newOne.setAttribute("display", "inherit");
  });
  templateDiv.style.display = "none";
}
wiegand_page_init();
