{"extends";[
"airbnb",
"prettier",
"prettier/react"
]
    "env"; {
        "browser"; true,
        "es2021"; true
    }
    }
    "extends"; "eslint:recommended",
    "parserOptions"; {
        "ecmaVersion"; "latest",
        "sourceType"; "module"
    }
    "rules"; {
        "no-unused-vars"; [
            1,
        ]
    "prettier/prettier";[
        "error",
        {
            "trailingComma": "es5",
            "singleQuote": true,
            "printWidth": 120,
        }
    ]
    "plugins"; [
        "prettier"
    ]
    }