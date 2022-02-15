function add_item(img_url, text, link) {
    let content_list = document.getElementById("content-list");
    let item_div = document.createElement("div");
    item_div.classList.add('list_item');
    content_list.appendChild(item_div);

    let thumbnail_img = document.createElement("img");
    thumbnail_img.classList.add("thumbnail");
    thumbnail_img.setAttribute("src", img_url);
    item_div.appendChild(thumbnail_img);

    let wrapper_div = document.createElement("div");
    wrapper_div.classList.add('list_item_text_wrapper');
    item_div.appendChild(wrapper_div);

    let text_p = document.createElement("p");
    text_p.textContent = text;
    wrapper_div.appendChild(text_p);

    let link_a = document.createElement("a");
    link_a.setAttribute("href", link);
    let display_url = link;
    if (link.substring(0,8) == "https://") {
        display_url = link.substring(8, link.length);
    } else if (link.substring(0,7) == "http://") {
        display_url = link.substring(7, link.length);
    }
    link_a.textContent = display_url;
    wrapper_div.appendChild(link_a);

    let hr = document.createElement("hr");
    content_list.appendChild(hr);
}

function init() {
    add_item("https://i.imgur.com/x3X4LWu.png", "Posted an article about my NeoVim config (zh_cn)", "https://zhuanlan.zhihu.com/p/467428462")
    add_item("https://i.imgur.com/x3X4LWu.png", "My personal modern NeoVim config", "https://github.com/p-z-l/nvim-config")
}
