# This is an example tech spec incorporating mermaid.js.org diagrams

This diagram will only render in the VS Code Markdown Preview panel if you install the [Mermaid Plugin](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid)

```mermaid
sequenceDiagram
    User->>Next: Visit /blog page
    activate Next
    Next-->>User: Return list of posts
    deactivate Next
```