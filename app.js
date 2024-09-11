webix.ui({
    view: "window",
    id: "my_window",
    width: 300,
    height: 200,
    position: "center",
    head: "Hello Webix",
    body: {
        view: "text",
        value: "Welcome to Webix!",
        height: 100
    }
}).show();
