import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Outlet } from "@tanstack/react-router";
import Home from "./pages/Home";
import Users from "./pages/Users";
import UserProfile from "./pages/UserProfile";
import { Link } from "@tanstack/react-router";
import React from "react";

// Root layout with nav and <Outlet />
const rootRoute = createRootRoute({
  component: () => (
    <div>
      <h2>🌐 My App</h2>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Home</Link> | <Link to="/users">Users</Link>
      </nav>
      <Outlet />
    </div>
  ),
});

// Routes
const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const usersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/users",
  component: Users,
});

const profileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/profile/$id", // dynamic route using $id
  component: UserProfile,
});

// Build route tree
const routeTree = rootRoute.addChildren([
  homeRoute,
  usersRoute,
  profileRoute,
]);

// Create router instance
export const router = createRouter({ routeTree });

// For TypeScript
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
