# How to Use `FILES.REG` file
- The application asset loader uses a basic per-line format for checking which files it should fetch.
- The `FILES.REG` file should not contain any empty lines
- The register support commented lines
- To register a file
  - Push it to this repo
  - write the path to the file, from the root directory in a new line. Using this format [type]:[pathOrName].[extension]
    - image example => `imgx:logo.png`
    - files example => `file:License.md`
    - also valid file example => `:License.md`
  - For files in folders, use the following format (note, folder structure will be replicated on device)
    - e.g. => `file:folder/anotherFolder/file.extension`
    
    
