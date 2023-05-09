function index_init() {
  if (!window.jQuery) {
    console.warn("jQuery not yet loaded..");
    setTimeout(index_init, 500);
    return; // die!
  }
  const links = [
    {
      href: "https://www.wiegandfd.com/",
      text: "Wiegand Family Distribution can be found here",
      icon: "fa fa-beer",
      bgcolor: "bg-purple",
    },
    { href: "https://native-land.ca/", text: "I recognize I live on the traditional territories of the Arapaho, Ute, and Cheyenne nations.", icon: "fa fa-location-dot", bgcolor: "bg-black" },
    { href: "https://aurora156.org/", text: "Aurora Revelation Lodge 156", icon: "fa fa-compass-drafting", bgcolor: "bg-techelet" },
    { href: "https://project529.com/garage", text: "Register your bike BEFORE it's stolen", icon: "fa fa-bicycle", bgcolor: "bg-bikes" },
    { href: "https://twitter.com/cdwiegand", text: "Twitter", bgcolor: "link-twitter", icon: "fa fa-brands fa-twitter" },
    { href: "https://github.com/cdwiegand", text: "GitHub", bgcolor: "link-github", icon: "fa fa-brands fa-github" },
    { href: "https://mastodon.social/@chris_wiegand", text: "Mastodon", bgcolor: "link-mastodon", icon: "fa fa-brands fa-mastodon" },
    { href: "https://www.tiktok.com/@the_tik_of_the_tok", text: "TikTok", bgcolor: "link-tiktok", icon: "fa fa-brands fa-tiktok" },
    {
      href: "https://www.youtube.com/channel/UC5lxbRAQWAkaBYrTzKWTt1w",
      text: "Youtube",
      bgcolor: "link-youtube", icon: "fa fa-brands fa-youtube",
    },
    {
      href: "https://content-security-policy.com/",
      text: "Make sure your websites use CSP when possible",
      icon: "fa fa-lock",
      bgcolor: "bg-purple",
    },
    {
      href: "https://securityheaders.io/?q=https%3A%2F%2Fwiegandfamily.com&followRedirects=on",
      text: "SecurityHeaders.io",
      icon: "fa fa-lock",
      bgcolor: "bg-purple",
    },
    {
      href: "https://www.ssllabs.com/ssltest/analyze.html?d=wiegandfamily.com&hideResults=on",
      text: "SSLLabs.com",
      icon: "fa fa-lock",
      bgcolor: "bg-purple",
    },
    {
      href: "https://observatory.mozilla.org/analyze/wiegandfamily.com",
      text: "Mozilla Observatory",
      icon: "fa fa-search",
      bgcolor: "bg-purple",
    },
    { href: "#", text: "FCC Callsign: KV0LTZ", icon: "fa fa-wifi", bgcolor: "bg-purple" },
    {
      href: "/public.key.2021.asc",
      text: "My primary GnuPG key (A3078AA1)",
      icon: "fa fa-key",
      bgcolor: "bg-purple",
    },
    {
      href: "http://www.denverboyscouts.org/",
      text: "I donate much of my free time to Boy Scouts",
      icon: "fa fa-tree",
      bgcolor: "bg-purple",
    },
    {
      href: "http://www.woodbadge.org/",
      text: "My Woodbadge critter: Fox",
      icon: "fa fa-ticket",
      bgcolor: "bg-purple",
    },
  ];
  let idx = 0;
  const templateDiv = $("#template_div");
  templateDiv.hide();
  $.each(links, (_, val) => {
    idx++;
    var newOneHtml = templateDiv.html();
    newOneHtml = newOneHtml.replace('id="template_div"', 'id="item_' + idx + '"');
    newOneHtml = newOneHtml.replace("{{href}}", val.href);
    newOneHtml = newOneHtml.replace("{{text}}", val.text);
    newOneHtml = newOneHtml.replace("{{icon}}", val.icon ?? "");
    newOneHtml = newOneHtml.replace("{{alt}}", val.alt ?? "");
    newOneHtml = newOneHtml.replace("{{bgcolor}}", val.bgcolor ?? "bg-trans");
    newOneHtml = newOneHtml.replace("{{description}}", val.description ?? "");
    newOneHtml = newOneHtml.replace(" template-", " ");
    let newOne = $(newOneHtml);
    newOne.insertBefore(templateDiv);
    newOne.show();
  });
}
index_init();
