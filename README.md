# React + Vite + Three.JS

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Link website : https://thepolacy1127.pages.dev/
<img width="949" alt="image" src="https://github.com/Grandpa1001/ThePolacyShowTime/assets/28570039/80c4b386-de13-4576-9b52-1db9bd17d0c3">


Currently, two official plugins are available:


- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Simple tutorial object
- create own voxel model with VoxelEditor
- export to .obj (2 files obj and mlt)
- zip to 1 file
- go to https://www.mixamo.com/ import zip file, get animation - download fbx
- open file in blender 
- change mask shadow on texture - Texture Paint - Material - Settings - Blend Mode (change to Opaque) (all models)
- export to glb

get file in to website folder models

- use  npx gltfjsx public/models/file.glb    (to get jsx file)

Dificult option [How to add more than one animation to first character]
- get more animation from Mixamo and import fbx to Blender.
- first step import character 
- open new 2 panel  NotLinear Animation and ActionEditor
- Use Push Button to add new animation
- import new mixamo animation to blender and delete object,
- add another animation, hide skieleton, 
- to fix view on right side NotLinear change Extrapoola - Nothing
- Export all to glb

fix .jsx about const export method


