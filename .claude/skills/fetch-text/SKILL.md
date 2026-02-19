---
name: fetch-text
description: Download a PDF or web page and extract its text content into a file under the local tmp/ directory. Use when the user wants to save web content or PDF text locally.
argument-hint: <url>
---

# Fetch Text from URL

Download a PDF or web page from the given URL and extract its text content into a plain text file under the local `tmp/` directory in the project root.

## Input

`$ARGUMENTS` is the URL to fetch. It must be a valid HTTP/HTTPS URL.

## Instructions

1. **Create the output directory** if it doesn't exist: `mkdir -p tmp`

2. **Determine the content type** from the URL:
   - If the URL ends in `.pdf` or is known to serve PDF (e.g., `arxiv.org/pdf/`), treat it as a PDF.
   - Otherwise, treat it as a web page.

3. **Generate an output filename** based on the URL:
   - Extract a meaningful slug from the URL path (e.g., the last path segment without extension).
   - The output file should be `tmp/<slug>.txt`.
   - If the slug is empty or generic, use the domain name plus a short hash.

4. **For PDFs**:
   - Download the PDF to `tmp/<slug>.pdf` using `curl -sL`.
   - Check if `pdftotext` is available. If not, install `poppler-utils` via `apt-get`.
   - Convert to text: `pdftotext tmp/<slug>.pdf tmp/<slug>.txt`
   - Remove the intermediate PDF file after conversion.

5. **For web pages**:
   - Download the HTML to `tmp/<slug>.html` using `curl -sL`.
   - Check if `lynx` is available. If not, ask the user to install it (`apt-get install -y lynx`).
   - Convert to text: `lynx -dump -nolist -width=120 tmp/<slug>.html > tmp/<slug>.txt`
   - Remove the intermediate HTML file after conversion.

6. **Report the result** to the user:
   - Show the output file path.
   - Show the file size and line count.
   - Show a brief preview (first 20 lines).
