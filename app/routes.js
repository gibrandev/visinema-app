import { route } from "@react-router/dev/routes";

export default [
    route("/", "routes/home.jsx"),
    route("/register", "routes/register.jsx"),
    route("/admin", "routes/admin/layout.jsx", {
        loader: "./routes/admin/layout.jsx#loader"
    }, [
        route("dashboard", "routes/admin/dashboard.jsx"),
        route("user", "routes/admin/user/index.jsx"),
        route("user/create", "routes/admin/user/create.jsx"),
        route("user/edit", "routes/admin/user/edit.jsx"),
    ]),
];

