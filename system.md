# TODO
- redéfinition de document.createElement
- redéfinition de document.registerElement
- redéfinition de document.querySelectorAll
- redéfinition de element.appendChild
- redéfinition de Object.defineProperty
- redéfinition des callbacks de custom elements
- redéfinition de template et de son usage (avec importNode)

# BlockFactory
## methods
  - public static BlockFactory getInstance()
  - public Block createBlock(blockRef?, options?)
# Editor
## attributes 
  - projet : Projet
  - currentPage
## methods
  - private addPage(name, pageRef?)
  - private changePage(pageRef)
  - private addBlock(position, blockRef?, options?, parent?)
  - private moveBlock(blockRef)
  - private saveBlock(block)
  - private changeDeviceView()
  - private openThemeSettings() : void
  - private previewProject()
  - private saveProject()
  - private virtual resizeBlock()
# Project
## attributes
  - pages : Page[]
  - date
  - theme
# Page (extends Grid)
  - title
  - height
# Block
## attributes
  - position
    - type (relative, absolute)
    - x
    - y
    - width (w)
    - height (h)
  - margin
  - padding
  - children : Block[]
  - theme : ItemThemeSettings
  - html (TODO)
  - css
    - classes
    - rules
  - events : Event[]
## methods
  - public Block? get(childRef)
  - public setSpacing(marginRef?, paddingRef?)
  - public setPosition(x, y, w, h, type)
# Grid
## attributes
  - override(children : Block[]) => children : GridItem[]
  - cols : number (grid-template-columns)
  - rows : number (grid-template-rows)
  - display ("default", "areas", "custom")
  - areas (grid-template-areas)
## methods
  - public setColumns(nbCol) : void
  - public setRows(nbRows) : void
  - public setAreas(Block[]?) : void
  - public saveDisplay() : void
  - public setGap(val) : void



