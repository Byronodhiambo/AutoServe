import React from "react";

export default function Contact() {
  return (
    <>
      <div className="container">
        <p>hello world</p>
        <p>
          Go ahead and click the links and the back/forward button (if you're
          using StackBlitz, you'll need to click the "Open in New Window" button
          in the inline-browser's toolbar). React Router is now controlling the
          URL! We don't have any routes that render when the URL changes yet,
          but Link is changing the URL without causing a full page reload. Add
          Some Routes Add a couple new files: src/routes/invoices.jsx
          src/routes/expenses.jsx (The location of the files doesn't matter, but
          when you decide you'd like an automatic backend API, server rendering,
          code splitting bundler and more for this app, naming your files like
          this way makes it easy to port this app to our other project, Remix
          wink) Now fill 'em up with some code:
        </p>
      </div>
    </>
  );
}
