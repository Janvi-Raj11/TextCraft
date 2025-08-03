import React from "react";

export default function About(props) {
  const isDark = props.mode === "dark";

  return (
    <div
      className="container my-4"
      style={{ color: isDark ? "white" : "black" }}
    >
      <h2 className="my-3 fw-bold">About Us</h2>
      <p>Welcome to TextCraft — your intelligent text processing companion.</p>

      {/* Section 1 - What is TextCraft */}
      <section className="mb-4">
        <h4 className="fw-bold">What is TextCraft?</h4>
        <p>
          <strong>TextCraft</strong> is an all-in-one text utility tool designed
          to make text formatting and transformation simple and efficient. Built
          with modern web technologies like <strong>React</strong> and{" "}
          <strong>Bootstrap</strong>, it offers a fast, clean, and responsive
          experience across all devices.
        </p>

        <p>
          With TextCraft, users can input text and perform a wide range of
          operations — including case conversion (UPPERCASE, lowercase, Title
          Case, Sentence case), removal of unnecessary whitespace, word and
          character counting, and extraction of specific elements like email
          addresses.
        </p>
        <p>
          Whether you're a developer cleaning logs, a student formatting
          assignments, or a writer editing content, TextCraft is designed to
          save time, reduce manual effort, and streamline digital text
          processing with ease.
        </p>
      </section>

      {/* Section 2 - Features */}
      <section className="mb-4">
        <h4 className="fw-bold">Features of TextCraft</h4>
        <ul>
          <li>
            Convert text to UPPERCASE, lowercase, Title Case, and Sentence case
          </li>
          <li>Clear or copy text to the clipboard with a single click</li>
          <li>Extract email addresses using smart regular expressions</li>
          <li>
            Remove extra spaces and count characters (with or without spaces)
          </li>
          <li>
            Live summary: word count, sentence count, and estimated reading time
          </li>
          <li>
            Download processed text as a <code>.txt</code> file
          </li>
          <li>Toggle between Dark and Light mode for better readability</li>
        </ul>
      </section>

      {/* Section 3 - Usefulness */}
      <section className="mb-4">
        <h4 className="fw-bold">How is TextCraft Useful?</h4>
        <p>
          TextCraft is ideal for cleaning up unstructured text, formatting
          assignments, analyzing content, or testing string inputs. Whether
          you're a developer, student, or content creator, TextCraft makes text
          manipulation fast, consistent, and user-friendly.
        </p>
      </section>

      {/* Section 4 - Upcoming Features */}
      <section className="mb-4">
        <h4 className="fw-bold">Upcoming Features</h4>
        <ul>
          <li>Language translation (multi-language support coming soon)</li>
          <li>Grammar correction (intelligent grammar fixes in development)</li>
        </ul>
      </section>

      {/* Section 5 - About the Creator */}
      <section className="mb-4">
        <h4 className="fw-bold">About the Creator</h4>
        <p>
          Hi, I’m <strong>Janvi Raj</strong>, a B.Tech student specializing in
          Applied Electronics and Instrumentation Engineering. I enjoy building
          simple, practical tools that empower users to handle everyday digital
          tasks more efficiently through the power of technology.
        </p>
      </section>
    </div>
  );
}
