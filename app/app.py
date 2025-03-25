from flask import Flask, render_template

app = Flask(__name__)

if __name__ == "__main__":
    app.run(debug=True)

sidebar_menu = [
    # Curation Menu
    {
        "menu_id": 1,
        "is_dropdown": True,
        "menu_label": "curation",
        "menu_url": "",
        "menu_icon": "bxs-medal",
        "menu_items": [
            {
                "menu_item_id": 1,
                "menu_id": 1,
                "menu_label": "Start Review",
                "menu_url": "/",
                "available_for": [1, 2, 3, 4, 5, 6, 7]
            }
        ],
        "menu_position": 1,
        "available_for": [1, 2, 3, 4, 5, 6, 7]
    },
    # Integration Menu
    {
        "menu_id": 2,
        "is_dropdown": True,
        "menu_label": "integration",
        "menu_url": "",
        "menu_icon": "bxs-category-alt",
        "menu_items": [
            {
                "menu_item_id": 2,
                "menu_id": 2,
                "menu_label": "Alation Integration",
                "menu_url": "/"
            },
            {
                "menu_item_id": 3,
                "menu_id": 2,
                "menu_label": "App Data Load",
                "menu_url": "/"
            },
            {
                "menu_item_id": 4,
                "menu_id": 2,
                "menu_label": "Status",
                "menu_url": "/"
            },
            {
                "menu_item_id": 5,
                "menu_id": 2,
                "menu_label": "Logs",
                "menu_url": "/"
            },
        ],
        "menu_position": 2,
        "available_for": [1, 2, 3, 4, 5, 6, 7]
    },
    # Reports Menu
    {
        "menu_id": 3,
        "is_dropdown": False,
        "menu_label": "reports",
        "menu_url": "/",
        "menu_icon": "bxs-file",
        "menu_items": [],
        "menu_position": 3,
        "available_for": [1, 2, 3, 4, 5, 6, 7]
    },
    # Users Menu
    {
        "menu_id": 4,
        "is_dropdown": True,
        "menu_label": "users",
        "menu_url": "",
        "menu_icon": "bxs-group",
        "menu_items": [
            {
                "menu_item_id": 2,
                "menu_id": 4,
                "menu_label": "User Datasources",
                "menu_url": "/"
            },
            {
                "menu_item_id": 3,
                "menu_id": 4,
                "menu_label": "Users",
                "menu_url": "/"
            },
            {
                "menu_item_id": 4,
                "menu_id": 4,
                "menu_label": "Roles",
                "menu_url": "/"
            },
            {
                "menu_item_id": 5,
                "menu_id": 4,
                "menu_label": "Permissions",
                "menu_url": "/"
            },
        ],
        "menu_position": 4,
        "available_for": [1, 2, 3, 4, 5, 6, 7]
    },
    # Admin Menu
    {
        "menu_id": 5,
        "is_dropdown": True,
        "menu_label": "admin",
        "menu_url": "",
        "menu_icon": "bxs-user",
        "menu_items": [
            {
                "menu_item_id": 6,
                "menu_id": 5,
                "menu_label": "Parameters",
                "menu_url": "/"
            },
            {
                "menu_item_id": 7,
                "menu_id": 5,
                "menu_label": "Datasources",
                "menu_url": "/"
            },
            {
                "menu_item_id": 8,
                "menu_id": 5,
                "menu_label": "Maintenance",
                "menu_url": "/"
            },
        ],
        "menu_position": 5,
        "available_for": [1, 2, 3, 4, 5, 6, 7]
    },
]

@app.get('/error')
def error_page():
    return render_template('/errors/error.html')

@app.get('/base')
def base():
    context = {
        "sidebar_menu": sidebar_menu
    }
    return render_template('/base/base.html', context=context)

@app.get('/')
def table_test():
    context = {
        "sidebar_menu": sidebar_menu
    }
    return render_template('/pages/table.html', context=context)