```
<ViewController>
  <Login/>
  <ContentViewController>
    <Navbar/>
    <Editor>
      <Toolbar/>
      <Page/>
    </Editor>
  </ContentViewController>
</ViewController>
```
## ViewController
### méthodes
- login
- setLanguage

## ContentViewController
- fetch du projet

### methodes
- newProject (navbar)
- openProject (navbar)
- saveProject (navbar)
- fetchProject(selectedProjectID)

## Editor
### méthodes
- changePage 
- addBlock
- changeBg (block -> toolbar)
- duplicate (block -> toolbar)
- align (blocks -> toolbar)
- mapBlockOptions

## Page
- render des blocs