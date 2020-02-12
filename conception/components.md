# Block (parent of all)
## props
  - dimensions : x, y, w, h
  - children
  - position : relative (to parent), absolute
  - backgroundColor
  - textColor
## methods
  - addChild
  - move
  - changePosition
  - add event (click, change, etc)
# Page
  - root block of every page
  - special grid-container with default configuration
# Flex-container
## props
  - direction : row, column
  - wrap : true/false
  - align-items
  - justify-content
## methods
  - changeDirection
  - modifyLayout
# Flex-item
# Grid-container
## props
  - display : grid | inline-grid
  - gap
  - grid-template-columns
  - grid-template-rows
  - grid-template-areas (make system for updating this css property)
  - cols : number
  - rows : number
  - justify-content
  - align-content
## methods 
  - modifyLayout
# Grid-item
## props
  - area
  - grid-column 
  - grid-row
# List 
# List-item (?)
# Text
# Quote (extends Text)
# Title (extends Text)
# Link (extends Text)
  - href
# Table
# Table-row
# Button
  - click event (all blocks can have clicks)
# Icon Button (extends Button)
# Dialog
# Snackbar 
# Toolbar
# Form
# Input
# Checkbox (extends Input)
# Dropdown (extends Input)
# Image
# Icon (extends Image ?)
# Carousel
# Video Player
# Audio Player
# Media Player (can play video and audio)
# Panel
# Card (extends Panel)
# Popup (extends Panel)
