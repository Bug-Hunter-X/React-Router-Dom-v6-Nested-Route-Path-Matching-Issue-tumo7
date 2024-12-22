# React Router Dom v6 Nested Route Path Matching Issue

This repository demonstrates a bug in React Router Dom v6 where nested routes with dynamic segments fail to match correctly.  The issue is that the parent route's dynamic segment is not correctly passed down to the child route, leading to incorrect rendering.

## Bug

The provided `bug.js` file demonstrates the problem.  A simple nested route structure is used.  The expected behavior is that navigating to `/users/123` should render the `UserDetail` component.  However, the route does not match, causing an error.

## Solution

The `bugSolution.js` file provides a solution. This solution utilizes the `useParams` hook to access the dynamic segments from the parent route and pass them down to the child route via props, ensuring that the nested route is matched correctly.